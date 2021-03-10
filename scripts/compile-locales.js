'use strict';

var messages = require('../messages')
  , doT = require('dot')
  , beautify = require('js-beautify')
  , fs = require('fs')
  , path = require('path')
  , totalMissing = 0;

var localize = getLocalizeTemplate();

messages._locales.forEach(compileMessages);
console.log('Total missing messages:', totalMissing);

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
    , localeDefs = getLocalDefs(messages._defs, locale)
    , enDefs = getLocalDefs(messages._defs, 'en');

  for (var keyword in messages) {
    if (keyword[0] == '_') continue;
    var keyMsgs = messages[keyword]
      , msg = keyMsgs[locale]
      , keyDefs = keyMsgs._defs
      , defs;

    if (msg) {
      defs = localeDefs;
    } else {
      defs = enDefs;
      totalMissing++;
      msg = keyMsgs['en'];
      var errorMsg = 'message for locale "' + locale + '" keyword "' + keyword + '"';
      if (msg) {
        console.warn('Warning: Replaced with "en"', errorMsg);
      } else {
        console.error('Error: No', errorMsg);
        continue;
      }
    }

    if (keyDefs) defs = {...defs, ...keyDefs};

    var msgFunc = doT.compile(msg, defs);
    locMsgs.push({ keyword: keyword, msgFunc: msgFunc });
  }

  locMsgs.sort(byKeyword);
  return locMsgs;
}


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
