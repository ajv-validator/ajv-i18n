const AjvJTD = require("ajv/dist/jtd").default
const jtdValidationTests = require("./json-typedef-spec/tests/validation.json")
const assert = require("assert")
const localize = require("../localize/jtd")

const ONLY = []

describe("JSON Type Definition errors with ajv-i18n", function () {
  let ajvs
  this.timeout(30000)

  before(() => {
    ajvs = [getAjv(false, false), getAjv(false, true), getAjv(true, false), getAjv(true, true)]
  })

  for (const testName in jtdValidationTests) {
    const {schema, instance, errors} = jtdValidationTests[testName]
    const valid = errors.length === 0
    describeOnly(testName, () => {
      if (valid) {
        it("should be valid", () =>
          ajvs.forEach((ajv) => assert.strictEqual(ajv.validate(schema, instance), valid)))
      } else {
        it("should be invalid", () => {
          ajvs.forEach((ajv) => {
            assert.strictEqual(ajv.validate(schema, instance), valid)
            for (const locale in localize) {
              localize[locale](ajv.errors)
              ajv.errors.forEach((err) => assertStr(err.message))
              const text = ajv.errorsText(undefined, {separator: "\n"})
              // if (locale == "en") console.log(text)
              assertStr(text)
              ajv.errors.forEach((err) => {
                delete err.message
              })
            }
          })
        })
      }
    })
  }
})

function getAjv(allErrors, verbose) {
  return new AjvJTD({allErrors, verbose, messages: false})
}

function assertStr(str) {
  assert.strictEqual(typeof str, "string")
  assert(str.length > 0)
  assert.strictEqual(str.indexOf("undefined"), -1)
}

function describeOnly(name, func) {
  if (ONLY.length === 0 || ONLY.some((p) => p.test(name))) {
    describe(name, func)
  } else {
    describe.skip(name, func)
  }
}
