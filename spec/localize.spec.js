"use strict"

const localize = require("../localize")

const jsonSchemaTest = require("json-schema-test")
const Ajv = require("ajv").default
const Ajv2019 = require("ajv/dist/2019").default
const ajvKeywords = require("ajv-keywords")
const ajvFormats = require("ajv-formats")
const assert = require("assert")
const {toHash} = require("ajv/dist/compile/util")

const remoteRefs = {
  "http://localhost:1234/integer.json": require("./JSON-Schema-Test-Suite/remotes/integer.json"),
  "http://localhost:1234/subSchemas.json": require("./JSON-Schema-Test-Suite/remotes/subSchemas.json"),
  "http://localhost:1234/subSchemas-defs.json": require("./JSON-Schema-Test-Suite/remotes/subSchemas-defs.json"),
  "http://localhost:1234/baseUriChange/folderInteger.json": require("./JSON-Schema-Test-Suite/remotes/baseUriChange/folderInteger.json"),
  "http://localhost:1234/baseUriChangeFolder/folderInteger.json": require("./JSON-Schema-Test-Suite/remotes/baseUriChangeFolder/folderInteger.json"),
  "http://localhost:1234/baseUriChangeFolderInSubschema/folderInteger.json": require("./JSON-Schema-Test-Suite/remotes/baseUriChangeFolderInSubschema/folderInteger.json"),
  "http://localhost:1234/name.json": require("./JSON-Schema-Test-Suite/remotes/name.json"),
  "http://localhost:1234/name-defs.json": require("./JSON-Schema-Test-Suite/remotes/name-defs.json"),
}

const SKIP_DRAFT7 = [
  "format/idn-email",
  "format/idn-hostname",
  "format/iri",
  "format/iri-reference",
  "optional/content",
  "optional/float-overflow",
]

const SKIP = {
  draft6: ["optional/float-overflow"],
  draft7: SKIP_DRAFT7,
  "draft2019-09": [...SKIP_DRAFT7, "recursiveRef"],
}

const DEFAULT_META = {
  draft6: "http://json-schema.org/draft-06/schema#",
}

const suites = {
  draft6: "./JSON-Schema-Test-Suite/tests/draft6/{**/,}*.json",
  draft7: "./JSON-Schema-Test-Suite/tests/draft7/{**/,}*.json",
  "draft2019-09": "./JSON-Schema-Test-Suite/tests/draft2019-09/{**/,}*.json",
  "ajv-keywords": "./ajv-keywords/spec/tests/patternRequired.json",
  "ajv-formats": "./ajv-formats/tests/extras/format{Minimum,Maximum}.json",
}

for (const s in suites) runTests(s)

function runTests(suite) {
  const instances = [
    getAjv(suite, false, false),
    getAjv(suite, false, true),
    getAjv(suite, true, false),
    getAjv(suite, true, true),
  ]

  instances.forEach((ajv) => {
    addRemoteRefs(ajv)
    if (DEFAULT_META[suite]) {
      ajv.opts.defaultMeta = DEFAULT_META[suite]
    }
  })

  const tests = {}
  tests[suite] = suites[suite]

  jsonSchemaTest(instances, {
    description: "Schema tests of " + instances.length + " ajv instances with ajv-i18n",
    suites: tests,
    afterEach: afterEach,
    skip: SKIP[suite],
    assert: assert,
    cwd: __dirname,
    hideFolder: `${suite}/`,
    timeout: 30000,
  })
}

function getAjv(suite, allErrors, verbose) {
  let ajv
  const options = {
    strict: false,
    logger: false,
    messages: false,
    allErrors,
    verbose,
    formats: toHash(["idn-email", "idn-hostname", "iri", "iri-reference"]),
  }
  switch (suite) {
    case "draft2019-09":
      ajv = new Ajv2019(options)
      break
    default:
      ajv = new Ajv({...options, ignoreKeywordsWithRef: true})
      ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"))
  }
  ajvFormats(ajvKeywords(ajv, ["patternRequired"]), {keywords: true})
  return ajv
}

function afterEach(res) {
  if (res.valid) return
  for (const locale in localize) {
    localize[locale](res.errors)
    res.errors.forEach((err) => {
      assertStr(err.message)
    })
    const text = res.validator.errorsText(undefined, {separator: "\n"})
    // if (locale == 'en') console.log(text);
    assertStr(text)
    res.errors.forEach((err) => {
      delete err.message
    })
  }
}

function assertStr(str) {
  assert.strictEqual(typeof str, "string")
  assert(str.length > 0)
  // TODO enable this check - fails on unevaluatedItems
  // assert.strictEqual(str.indexOf("undefined"), -1)
}

function addRemoteRefs(ajv) {
  for (const id in remoteRefs) {
    ajv.addSchema(remoteRefs[id], id)
  }
}
