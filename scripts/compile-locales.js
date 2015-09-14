'use strict';

var messages = require('../messages')
    , doT = require('dot')
    , beautify = require('js-beautify')
    , copy = require('ajv/lib/compile/util').copy
    , fs = require('fs')
    , path = require('path')

var localize = getLocalizeTemplate();

messages._locales.forEach(compileMessages);

function compileMessages(locale) {
    var localePath = path.join(__dirname, '..', 'localize', locale);
    try { fs.mkdirSync(localePath); } catch(e) {}
    var locMsgs = localeMessages(locale);
    var code = localize({ messages: locMsgs, locale: locale });
    code = beautify(code, { indent_size: 2 }) + '\n';
    var targetPath = path.join(localePath, 'index.js');
    fs.writeFileSync(targetPath, code);
}


function localeMessages(locale) {
    var locMsgs = []
      , localeDefs = getLocalDefs(messages._defs, locale);

    for (var keyword in messages) {
        if (keyword[0] == '_') continue;
        var keyMsgs = messages[keyword]
          , msg = keyMsgs[locale];
        if (!msg) throw new Error('No message for locale ' + locale + ' keyword ' + keyword);
        var keyDefs = keyMsgs._defs
        var defs = keyDefs
                    ? copy(keyDefs, copy(localeDefs))
                    : localeDefs;
        var msgFunc = doT.compile(msg, defs);
        locMsgs.push({ keyword: keyword, msgFunc: msgFunc });
    }

    locMsgs.sort(byKeyword);
    return locMsgs;
};


function getLocalDefs(defs, locale) {
  var localeDefs = {};
  for (var key in defs) {
    var def = defs[key];
    localeDefs[key] = typeof def == 'string' ? def : def[locale];
  }
  return localeDefs;
}


function byKeyword(a, b) {
  return a.keyword.localeCompare(b.keyword);
}


function getLocalizeTemplate() {
  var tmplStr = fs.readFileSync(path.join(__dirname, '..', 'localize', 'localize.jst'));
  return doT.compile(tmplStr);
}
