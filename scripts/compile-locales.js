"use strict"

const doT = require("dot")
const beautify = require("js-beautify")
const fs = require("fs")
const path = require("path")
let totalMissing = 0

const [, , messagesFile, localeFile] = process.argv

const errorMessages = require(path.join("..", messagesFile))

const localize = getLocalizeTemplate()

errorMessages._locales.forEach(compileMessages)
console.log("Total missing messages:", totalMissing)

function compileMessages(locale) {
  const localePath = path.join(__dirname, "..", "localize", locale)
  try {
    fs.mkdirSync(localePath)
  } catch (e) {}
  let code = localize(localeMessages(locale))
  code = beautify(code, {indent_size: 2}) + "\n"
  const targetPath = path.join(localePath, localeFile)
  fs.writeFileSync(targetPath, code)
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
        const func = compileMsgFunc(keyMsgs[error])
        msgFuncs.push({error, func})
      }
      return msgFuncs
    } else {
      return compileMsgFunc(keyMsgs)
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

function getLocalizeTemplate() {
  const tmplStr = fs.readFileSync(path.join(__dirname, "..", "localize", "localize.jst"))
  return doT.compile(tmplStr)
}
