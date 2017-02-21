'use strict';

var messages = require('../messages');
var assert = require('assert');


describe('code style: ordering of locales', function() {
  it('_locales should be ordered (en first)', function () {
    testLocalesOrder(messages._locales);
  });

  it('locales in _defs should be ordered (en first)', function () {
    testLocalesProperties(messages._defs.mPlural, '_defs.mPlural');
    testLocalesProperties(messages._defs.propPlural, '_defs.propPlural');
  });

  it('locales in keywords should be ordered (en first)', function() {
    for (var keyword in messages) {
      if (keyword[0] == '_') continue;
      testLocalesProperties(messages[keyword], 'keyword ' + keyword);
    }
  });
});


function testLocalesOrder(locales, message) {
  assert.equal(locales[0], 'en', message);
  var ordered = ['en'].concat(locales.slice(1).sort());
  assert.deepEqual(locales, ordered, message);
}


function testLocalesProperties(obj, message) {
  var props = Object.keys(obj);
  if (props[0][0] == '_') props.shift();
  testLocalesOrder(props, message);
}
