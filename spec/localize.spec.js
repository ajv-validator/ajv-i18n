"use strict"

const localize = require("../localize")

const jsonSchemaTest = require("json-schema-test")
const Ajv = require("ajv").default
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

const SKIP = {
  "draft-06": ["optional/float-overflow"],
  "draft-07": [
    "format/idn-email",
    "format/idn-hostname",
    "format/iri",
    "format/iri-reference",
    "optional/content",
    "optional/float-overflow",
  ],
}

const DEFAULT_META = {
  "draft-06": "http://json-schema.org/draft-06/schema#",
}

const suites = testSuites()
for (const s in suites) runTests(s)

function runTests(suite) {
  const instances = [
    getAjv(false, false),
    getAjv(false, true),
    getAjv(true, false),
    getAjv(true, true),
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
    description: "Schema tests of " + instances.length + " ajv instances with option i18n",
    suites: tests,
    afterEach: afterEach,
    skip: SKIP[suite],
    assert: assert,
    cwd: __dirname,
    hideFolder: "draft4/",
    timeout: 30000,
  })
}

function getAjv(allErrors, verbose) {
  const ajv = new Ajv({
    strict: false,
    logger: false,
    messages: false,
    allErrors: allErrors,
    verbose: verbose,
    ignoreKeywordsWithRef: true,
    formats: toHash(["idn-email", "idn-hostname", "iri", "iri-reference"]),
  })
  ajv.addMetaSchema(require("ajv/lib/refs/json-schema-draft-06.json"))
  ajvFormats(ajvKeywords(ajv, ["patternRequired"]), {keywords: true})
  return ajv
}

function testSuites() {
  let _suites
  if (typeof window == "object") {
    _suites = {
      "draft-06": require("./JSON-Schema-Test-Suite/tests/draft6/{**/,}*.json", {mode: "list"}),
      "draft-07": require("./JSON-Schema-Test-Suite/tests/draft7/{**/,}*.json", {mode: "list"}),
    }
    for (const suiteName in _suites) {
      _suites[suiteName].forEach((suite) => {
        if (suite.name.indexOf("optional/format") === 0) {
          suite.name = suite.name.replace("optional/", "")
        }
        suite.test = suite.module
      })
    }
  } else {
    _suites = {
      "draft-06": "./JSON-Schema-Test-Suite/tests/draft6/{**/,}*.json",
      "draft-07": "./JSON-Schema-Test-Suite/tests/draft7/{**/,}*.json",
      "ajv-keywords": "./ajv-keywords/spec/tests/{format*,patternRequired,switch}.json",
    }
  }
  return _suites
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
  assert.equal(typeof str, "string")
  assert(str.length > 0)
  assert.equal(str.indexOf("undefined"), -1)
}

function addRemoteRefs(ajv) {
  for (const id in remoteRefs) {
    ajv.addSchema(remoteRefs[id], id)
  }
}
