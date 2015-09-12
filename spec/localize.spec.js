'use strict';

var localize = require('../index');

var jsonSchemaTest = require('json-schema-test');
var Ajv = require('ajv');
var assert = require('assert');

var instances = [
  Ajv({ i18n: true, messages: false }),
  Ajv({ i18n: true, messages: false, verbose: true }),
  Ajv({ i18n: true, messages: false, allErrors: true }),
  Ajv({ i18n: true, messages: false, allErrors: true, verbose: true }),
];

var remoteRefs = {
    'http://localhost:1234/integer.json': require('./JSON-Schema-Test-Suite/remotes/integer.json'),
    'http://localhost:1234/subSchemas.json': require('./JSON-Schema-Test-Suite/remotes/subSchemas.json'),
    'http://localhost:1234/folder/folderInteger.json': require('./JSON-Schema-Test-Suite/remotes/folder/folderInteger.json'),
};

instances.forEach(addRemoteRefs);

jsonSchemaTest(instances, {
  description: 'Schema tests of ' + instances.length + ' ajv instances with option i18n',
  suites: {
    'JSON-Schema tests draft4': './JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json',
  },
  afterEach: afterEach,
  skip: [
    'optional/zeroTerminatedFloats'
  ],
  cwd: __dirname,
  hideFolder: 'draft4/',
  timeout: 30000
});

function afterEach(res) {
  if (res.valid) return;
  for (var locale in localize) {
    localize[locale](res.errors);
    res.errors.forEach(function (err) {
      assertStr(err.message);
    });
    var text = res.validator.errorsText(undefined, { separator: '\n' });
    assertStr(text);
    res.errors.forEach(function (err) {
      delete err.message;
    });
  }
}

function assertStr(str) {
  assert.equal(typeof str, 'string');
  assert(str.length > 0);
}

function addRemoteRefs(ajv) {
  for (var id in remoteRefs)
    ajv.addSchema(remoteRefs[id], id);
}
