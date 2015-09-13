# ajv-i18n
Internationalised error messages for [Ajv](https://github.com/epoberezkin/ajv) - currently the fastest JSON-Schema validator


## Supported locales

At the moment these locales are supported: `en` and `ru`.

Please contribute those that you need to use.


## Install

```
npm install ajv-i18n
```


## Usage

In node:

```
var Ajv = require('ajv'); // version >= 1.4.0
var localize = require('ajv-i18n');

var ajv = Ajv({ allErrors: true, i18n: true });
var validate = ajv.compile(schema);
var valid = validate(data);

if (!valid) {
    // array of error objects with Russian messages
    var errors = localize.ru(validate.errors);
    // string with all errors and data paths
    console.log(ajv.errorsText(errors, { separator: '\n', })); 
}
```

To require only necessary locales in browser (with browserify):

```
var localize_ru = require('ajv-i18n/localize/ru');
```

or

```
var localize = {
    en: require('ajv-i18n/localize/en'),
    ru: require('ajv-i18n/localize/ru')
};
```

See [Ajv docs](https://github.com/epoberezkin/ajv) for more information.
