# ajv-i18n

Internationalised error messages for [Ajv](https://github.com/epoberezkin/ajv) - currently the fastest JSON-Schema validator

[![Build Status](https://travis-ci.org/epoberezkin/ajv-i18n.svg?branch=master)](https://travis-ci.org/epoberezkin/ajv-i18n)
[![npm version](https://badge.fury.io/js/ajv-i18n.svg)](http://badge.fury.io/js/ajv-i18n)
[![Coverage Status](https://coveralls.io/repos/github/epoberezkin/ajv-i18n/badge.svg?branch=master)](https://coveralls.io/github/epoberezkin/ajv-i18n?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/epoberezkin/ajv-i18n.svg)](https://greenkeeper.io/)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)


## Supported locales

|locale|language |contributor|draft-04|Ajv v5<sup>\*</sup>|draft-06|
|------|:-------:|:---------:|:------:|:------:|:------:|
|🇬🇧 en|English  | |✓|✓|✓|
|🇨🇿 cz|Czech    |[kiskovacs](https://github.com/kiskovacs)|✓|✓|✓|
|🇩🇪 de|German   |[jmtoball](https://github.com/jmtoball)|✓|✓|✓|
|🇪🇸 es|Spanish  |[jpablom](https://github.com/jpablom)|✓|✓|-|
|🇫🇷 fr|French   |[monlouisj](https://github.com/monlouisj)|✓|✓|-|
|🇭🇺 hu|Hungarian|[szilveszter9](https://github.com/szilveszter9)|✓|-|-|
|🇮🇹 it|Italian  |[jasoniangreen](https://github.com/jasoniangreen)|✓|-|-|
|🇯🇵 ja|Japanese |[gilgongo](https://github.com/gilgongo)|✓|-|-|
|🇳🇴 no|Norwegian|[mtramm](https://github.com/mtramm)|✓|✓|✓|
|🇵🇱 pl|Polish   |[danielzurawski](https://github.com/danielzurawski)|✓|✓|-|
|🇧🇷 pt-BR|Português - Brasil|[marcosrava](https://github.com/marcosrava)|✓|✓|-|
|🇷🇺 ru|Russian  | |✓|✓|✓|
|🇸🇰 sk|Slovak   |[kiskovacs](https://github.com/kiskovacs)|✓|✓|✓|
|🇸🇪 sv|Swedish  |[limmen](https://github.com/Limmen)|✓|✓|✓|
|🇨🇳 zh|Chinese  |[jinzhubaofu](https://github.com/jinzhubaofu)|✓|✓|-|

<sup>\*</sup> v5 is a special mode in Ajv version 4.x.x

Please contribute locales that you need to use if they are missing or incomplete.


## Install

Using npm:

```
npm install ajv-i18n
```

Using bower:

```
bower install ajv-i18n
cd bower_components/ajv-i18n
npm install && npm run bundle-all
```

## Usage

In node:

```javascript
var Ajv = require('ajv'); // version >= 2.0.0
var localize = require('ajv-i18n');

// option `i18n` is required for this package to work
var ajv = Ajv({ allErrors: true });
var validate = ajv.compile(schema);
var valid = validate(data);

if (!valid) {
    // ru for Russian
    localize.ru(validate.errors);
    // string with all errors and data paths
    console.log(ajv.errorsText(validate.errors, { separator: '\n' }));
}
```

To require only necessary locales in browser (with browserify):

```javascript
var localize_ru = require('ajv-i18n/localize/ru');
```

or

```javascript
var localize = {
    en: require('ajv-i18n/localize/en'),
    ru: require('ajv-i18n/localize/ru')
};
```

See [Ajv docs](https://github.com/epoberezkin/ajv) for more information.


## Tests

```
npm install
git submodule update --init
npm test
```


## Contributing

Functions that localize error messages are generated using doT templates in [messages](https://github.com/epoberezkin/ajv-i18n/tree/master/messages/index.js) and [localize.jst](https://github.com/epoberezkin/ajv-i18n/tree/master/localize/localize.jst) template. Templates are precompiled so doT is not a run-time dependency.

`npm run build` - compiles functions to [localize](https://github.com/epoberezkin/ajv/tree/master/localize) folder.


## Contributors of locales

[![danielzurawski](https://avatars3.githubusercontent.com/u/1625711?v=3&s=40)](https://github.com/danielzurawski "danielzurawski")
[![szilveszter9](https://avatars0.githubusercontent.com/u/7540866?v=3&s=40)](https://github.com/szilveszter9 "szilveszter9")
[![jmtoball](https://avatars0.githubusercontent.com/u/219950?v=3&s=40)](https://github.com/jmtoball "jmtoball")
[![gilgongo](https://avatars2.githubusercontent.com/u/4561747?v=3&s=40)](https://github.com/gilgongo "gilgongo")
[![jasoniangreen](https://avatars3.githubusercontent.com/u/3481367?v=3&s=40)](https://github.com/jasoniangreen "jasoniangreen")
[![jpablom](https://avatars0.githubusercontent.com/u/3935083?v=3&s=40)](https://github.com/jpablom "jpablom")
[![limmen](https://avatars2.githubusercontent.com/u/8254791?v=3&s=40)](https://github.com/Limmen "Limmen")
[![jinzhubaofu](https://avatars2.githubusercontent.com/u/811195?v=3&s=40)](https://github.com/jinzhubaofu "jinzhubaofu")
[![kiskovacs](https://avatars1.githubusercontent.com/u/2733311?v=3&s=40)](https://github.com/kiskovacs "kiskovacs")
[![monlouisj](https://avatars0.githubusercontent.com/u/5998380?v=3&s=40)](https://github.com/monlouisj "monlouisj")
[![marcosrava](https://avatars2.githubusercontent.com/u/243790?v=3&s=40)](https://github.com/marcosrava "marcosrava")
[![mtramm](https://avatars3.githubusercontent.com/u/3519541?v=3&s=40)](https://github.com/mtramm "mtramm")


## License

[MIT](https://github.com/epoberezkin/ajv-i18n/blob/master/LICENSE)
