# ajv-i18n
Internationalised error messages for [Ajv](https://github.com/epoberezkin/ajv) - currently the fastest JSON-Schema validator


## Supported locales

At the moment these locales are supported: `en`, `hu`, `pl` and `ru`.

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

// option `i18n` is required for this package to work
var ajv = Ajv({ allErrors: true, i18n: true });
var validate = ajv.compile(schema);
var valid = validate(data);

if (!valid) {
    // array of error objects with Russian messages
    var errors = localize.ru(validate.errors);
    // string with all errors and data paths
    console.log(ajv.errorsText(errors, { separator: '\n' }));
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


## Tests

```
npm install
git submodule update --init
npm test
```


## Contributing

Functions that localize error messages are generated using doT templates in [messages](https://github.com/epoberezkin/ajv-i18n/tree/master/messages/index.js) and [localize.jst](https://github.com/epoberezkin/ajv-i18n/tree/master/localize/localize.jst) template. Templates are precompiled so doT is not a run-time dependency.

`npm run build` - compiles functions to [localize](https://github.com/epoberezkin/ajv/tree/master/localize) folder.


## License

[MIT](https://github.com/epoberezkin/ajv-i18n/blob/master/LICENSE)
