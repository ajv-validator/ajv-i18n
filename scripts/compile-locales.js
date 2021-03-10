"use strict"

const messages = require("../messages"),
  doT = require("dot"),
  beautify = require("js-beautify"),
  fs = require("fs"),
  path = require("path")
let totalMissing = 0

const localize = getLocalizeTemplate()

messages._locales.forEach(compileMessages)
console.log("Total missing messages:", totalMissing)

function compileMessages(locale) {
  const localePath = path.join(__dirname, "..", "localize", locale)
  try {
    fs.mkdirSync(localePath)
  } catch (e) {}
  const locMsgs = localeMessages(locale)
  let code = localize({messages: locMsgs, locale: locale})
  code = beautify(code, {indent_size: 2}) + "\n"
  const targetPath = path.join(localePath, "index.js")
  fs.writeFileSync(targetPath, code)
}

function localeMessages(locale) {
  const locMsgs = []
  const localeDefs = getLocalDefs(messages._defs, locale)
  const enDefs = getLocalDefs(messages._defs, "en")

  for (const keyword in messages) {
    if (keyword[0] === "_") continue
    const keyMsgs = messages[keyword]
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
        continue
      }
    }

    if (keyDefs) defs = {...defs, ...keyDefs}

    const msgFunc = doT.compile(msg, defs)
    locMsgs.push({keyword: keyword, msgFunc: msgFunc})
  }

  locMsgs.sort(byKeyword)
  return locMsgs
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
