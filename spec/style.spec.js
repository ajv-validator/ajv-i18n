"use strict"

const messages = require("../messages")
const localize = require("../localize")
const assert = require("assert")

describe("code style: ordering of locales", () => {
  it("locales in index.js should be ordered (en first)", () => testLocalesProperties(localize))

  it("_locales should be ordered (en first)", () => testLocalesOrder(messages._locales))

  it("locales in _defs should be ordered (en first)", () => {
    testLocalesProperties(messages._defs.mPlural, "_defs.mPlural")
    testLocalesProperties(messages._defs.propPlural, "_defs.propPlural")
  })

  it("locales in keywords should be ordered (en first)", () => {
    for (const keyword in messages) {
      if (keyword[0] === "_") continue
      testLocalesProperties(messages[keyword], "keyword " + keyword)
    }
  })
})

function testLocalesOrder(locales, message) {
  assert.strictEqual(locales[0], "en", message)
  const ordered = ["en"].concat(locales.slice(1).sort())
  assert.deepStrictEqual(locales, ordered, message)
}

function testLocalesProperties(obj, message) {
  const props = Object.keys(obj)
  while (props[0][0] === "_") props.shift()
  testLocalesOrder(props, message)
}
