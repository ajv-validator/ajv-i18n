"use strict"

const doT = require("dot")
const beautify = require("js-beautify")
const fs = require("fs")
const path = require("path")
let totalMissing = 0

const [, , importFile, localeFileName] = process.argv
const localeFile = `${localeFileName}.js`
const localeDefFile = `${localeFileName}.d.ts`

const errorMessages = require(path.join("../messages", importFile))

const localize = getTemplate("localize.jst")
const localizeDef = getTemplate("localize.d.jst")

errorMessages._locales.forEach(compileMessages)
saveLocales()
console.log("Total missing messages:", totalMissing)

function compileMessages(locale) {
  const localeDirPath = path.join(__dirname, "..", "localize", locale)
  const localePath = path.join(localeDirPath, localeFile)
  const localeDefPath = path.join(localeDirPath, localeDefFile)

  try {
    fs.mkdirSync(localeDirPath)
  } catch (e) {}
  const code = localize(localeMessages(locale))
  const defCode = localizeDef()
  saveCode(localePath, code)
  saveCode(localeDefPath, defCode)
}

function saveLocales() {
  const indexDirPath = path.join(__dirname, "..", "localize")
  const indexPath = path.join(indexDirPath, localeFile)
  const indexDefPath = path.join(indexDirPath, localeDefFile)
  const renderIndex = getTemplate("index.jst")
  const renderDefIndex = getTemplate("index.d.jst")

  const code = renderIndex({locales: errorMessages._locales, importFile})
  const defCode = renderDefIndex({locales: errorMessages._locales, importFile})
  saveCode(indexPath, code)
  saveCode(indexDefPath, defCode)
}

function saveCode(filePath, code) {
  code = beautify(code, {indent_size: 2}) + "\n"
  fs.writeFileSync(filePath, code)
}

function localeMessages(locale) {
  const messages = []
  const localeDefs = getLocaleDefs(errorMessages._defs, locale)
  const enDefs = getLocaleDefs(errorMessages._defs, "en")

  for (const keyword in errorMessages) {
    if (keyword[0] === "_") continue
    const msgFunc = compileMessage(keyword)
    if (msgFunc) messages.push({keyword, msgFunc, keywords: errorMessages[keyword]._keywords})
  }
  messages.sort(byKeyword)
  return {
    locale,
    messages,
    defaultMessage: compileMessage("_defaultMessage"),
    typeMessage: compileMessage("_type"),
  }

  function compileMessage(keyword) {
    const keyMsgs = errorMessages[keyword]
    if (!keyMsgs) return undefined
    if (keyMsgs._type) {
      const msgFuncs = []
      for (const error in keyMsgs) {
        if (error[0] === "_") continue
        const func = compileMsgFunc(keyMsgs[error], `${keyword}/${error}`)
        msgFuncs.push({error, func})
      }
      return msgFuncs
    } else {
      return compileMsgFunc(keyMsgs, keyword)
    }
  }

  function compileMsgFunc(_keyMsgs, keyword) {
    const keyDefs = _keyMsgs._defs
    let msg = _keyMsgs[locale]
    let defs

    if (msg) {
      defs = localeDefs
    } else {
      defs = enDefs
      totalMissing++
      msg = _keyMsgs["en"]
      const errorMsg = `message for locale "${locale}" keyword "${keyword}"`
      if (msg) {
        console.warn(`Warning: Replaced with "en" ${errorMsg}`)
      } else {
        throw new Error(`Error: No ${errorMsg}`)
      }
    }

    if (keyDefs) defs = {...defs, ...keyDefs}

    return doT.compile(msg, defs)
  }
}

function getLocaleDefs(defs, locale) {
  const localeDefs = {}
  for (const key in defs) {
    const def = defs[key]
    localeDefs[key] = typeof def == "string" ? def : def[locale]
  }
  return localeDefs
}

function byKeyword(a, b) {
  return a.keyword.localeCompare(b.keyword)
}

function getTemplate(fileName) {
  const tmplStr = fs.readFileSync(path.join(__dirname, "..", "localize", fileName))
  return doT.compile(tmplStr)
}
