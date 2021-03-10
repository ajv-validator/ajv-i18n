"use strict"

const errorMessages = require("../messages")
const doT = require("dot")
const beautify = require("js-beautify")
const fs = require("fs")
const path = require("path")
let totalMissing = 0

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
  const targetPath = path.join(localePath, "index.js")
  fs.writeFileSync(targetPath, code)
}

function localeMessages(locale) {
  const messages = []
  const localeDefs = getLocalDefs(errorMessages._defs, locale)
  const enDefs = getLocalDefs(errorMessages._defs, "en")

  for (const keyword in errorMessages) {
    if (keyword[0] === "_") continue
    const msgFunc = compileMessage(keyword)
    if (msgFunc) messages.push({keyword, msgFunc})
  }
  messages.sort(byKeyword)
  return {
    locale,
    messages,
    defaultMessage: compileMessage("_defaultMessage"),
  }

  function compileMessage(keyword) {
    const keyMsgs = errorMessages[keyword]
    let msg = keyMsgs[locale]
    const keyDefs = keyMsgs._defs
    let defs

    if (msg) {
      defs = localeDefs
    } else {
      defs = enDefs
      totalMissing++
      msg = keyMsgs["en"]
      const errorMsg = 'message for locale "' + locale + '" keyword "' + keyword + '"'
      if (msg) {
        console.warn('Warning: Replaced with "en"', errorMsg)
      } else {
        console.error("Error: No", errorMsg)
        return undefined
      }
    }

    if (keyDefs) defs = {...defs, ...keyDefs}

    return doT.compile(msg, defs)
  }
}

function getLocalDefs(defs, locale) {
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
