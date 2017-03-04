'use strict';

var localize = require('../localize');

var jsonSchemaTest = require('json-schema-test');
var Ajv = require('ajv');
var assert = require('assert');

var instances = [
  Ajv({ i18n: true, v5: true, messages: false }),
  Ajv({ i18n: true, v5: true, messages: false, verbose: true }),
  Ajv({ i18n: true, v5: true, messages: false, allErrors: true }),
  Ajv({ i18n: true, v5: true, messages: false, allErrors: true, verbose: true }),
];

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
      'JSON-Schema tests draft4': require('./JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json', {mode: 'list'}),
      'ajv tests': require('./ajv/spec/v5/*.json', {mode: 'list'})
    };
    for (var suiteName in suites) {
      suites[suiteName].forEach(function(suite) {
        suite.test = suite.module;
      });
    }
  } else {
    var suites = {
      'JSON-Schema tests draft4': './JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json',
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
