'use strict';

var localize = require('../localize');

var jsonSchemaTest = require('json-schema-test');
var Ajv = require('ajv');
var ajvKeywords = require('ajv-keywords')
var assert = require('assert');

var instances = [
  getAjv(false, false),
  getAjv(false, true),
  getAjv(true, false),
  getAjv(true, true)
];

function getAjv(allErrors, verbose) {
  var ajv = new Ajv({
    i18n: true,
    messages: false,
    patternGroups: true,
    unknownFormats: ['allowedUnknown'],
    allErrors: allErrors,
    verbose: allErrors
  });
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  ajvKeywords(ajv, ['switch', 'patternRequired', 'formatMinimum', 'formatMaximum']);
  ajv.addKeyword('constant', { macro: function(x) { return { const: x }; } })
  return ajv;
}

var remoteRefs = {
    'http://localhost:1234/integer.json': require('./JSON-Schema-Test-Suite/remotes/integer.json'),
    'http://localhost:1234/subSchemas.json': require('./JSON-Schema-Test-Suite/remotes/subSchemas.json'),
    'http://localhost:1234/folder/folderInteger.json': require('./JSON-Schema-Test-Suite/remotes/folder/folderInteger.json'),
};

instances.forEach(addRemoteRefs);

jsonSchemaTest(instances, {
  description: 'Schema tests of ' + instances.length + ' ajv instances with option i18n',
  suites: testSuites(),
  afterEach: afterEach,
  skip: [
    'optional/zeroTerminatedFloats'
  ],
  assert: assert,
  cwd: __dirname,
  hideFolder: 'draft4/',
  timeout: 30000
});

function testSuites() {
  if (typeof window == 'object') {
    var suites = {
      'draft-04': require('./JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json', {mode: 'list'}),
      'draft-06': require('./JSON-Schema-Test-Suite/tests/draft6/{**/,}*.json', {mode: 'list'}),
      'ajv tests': require('./ajv/spec/v5/*.json', {mode: 'list'})
    };
    for (var suiteName in suites) {
      suites[suiteName].forEach(function(suite) {
        suite.test = suite.module;
      });
    }
  } else {
    var suites = {
      'draft-04': './JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json',
      'draft-06': './JSON-Schema-Test-Suite/tests/draft6/{**/,}*.json',
      'ajv tests': './ajv/spec/v5/*.json'
    }
  }
  return suites;
}

function afterEach(res) {
  if (res.valid) return;
  for (var locale in localize) {
    localize[locale](res.errors);
    res.errors.forEach(function (err) {
      assertStr(err.message);
    });
    var text = res.validator.errorsText(undefined, { separator: '\n' });
    // if (locale == 'en') console.log(text);
    assertStr(text);
    res.errors.forEach(function (err) {
      delete err.message;
    });
  }
}

function assertStr(str) {
  assert.equal(typeof str, 'string');
  assert(str.length > 0);
  assert.equal(str.indexOf('undefined'), -1);
}

function addRemoteRefs(ajv) {
  for (var id in remoteRefs)
    ajv.addSchema(remoteRefs[id], id);
}
