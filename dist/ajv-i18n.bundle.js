require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = function localize_de(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'kann die Referenz ' + (e.params.ref) + ' nicht auflösen';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht mehr als ' + (n) + ' Element';
        if (n != 1) {
          out += 'e';
        }
        out += ' enthalten';
        break;
      case 'additionalProperties':
        out = 'sollte keine zusätzlichen Attribute haben';
        break;
      case 'anyOf':
        out = 'sollte einem der Schemata in "anyOf" entsprechen';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'sollte Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' ' + (e.params.deps) + ' aufweisen, wenn Attribut ' + (e.params.property) + ' gesetzt ist';
        break;
      case 'enum':
        out = 'sollte einem der vorgegebenen Werte entsprechen';
        break;
      case 'format':
        out = 'sollte diesem Format entsprechen: "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'sollte ' + (cond) + ' sein';
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht mehr als ' + (n) + ' Element';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht länger als ' + (n) + ' Zeichen sein';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht mehr als ' + (n) + ' Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'sollte ' + (cond) + ' sein';
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht weniger als ' + (n) + ' Element';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht kürzer als ' + (n) + ' Zeichen sein';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'sollte nicht weniger als ' + (n) + ' Attribut';
        if (n != 1) {
          out += 'e';
        }
        out += ' haben';
        break;
      case 'multipleOf':
        out = 'sollte ein Vielfaches von ' + (e.params.multipleOf) + ' sein';
        break;
      case 'not':
        out = 'sollte dem in "not" angegebenen Schema widersprechen';
        break;
      case 'oneOf':
        out = 'sollte genau einem der Schemata in "oneOf" entsprechen';
        break;
      case 'pattern':
        out = 'sollte diesem Muster entsprechen: "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'sollte das erforderliche Attribut ' + (e.params.missingProperty) + ' enthalten';
        break;
      case 'type':
        out = 'sollte sein: ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'sollte keine Duplikate enthalten (Elemente #' + (e.params.j) + ' und #' + (e.params.i) + ' sind gleich)';
        break;
    }
    e.message = out;
  }
};

},{}],2:[function(require,module,exports){
'use strict';
module.exports = function localize_en(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'can\\\'t resolve reference ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'should not have more than ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'additionalProperties':
        out = 'should not have additional properties';
        break;
      case 'anyOf':
        out = 'should match some schema in "anyOf"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'should have propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        out += ' ' + (e.params.deps) + ' when property ' + (e.params.property) + ' is present';
        break;
      case 'enum':
        out = 'should be equal to one of predefined values';
        break;
      case 'format':
        out = 'should match format "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'should not have more than ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'should not be longer than ' + (n) + ' character';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'should not have more than ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'should be ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'should not have less than ' + (n) + ' item';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'should not be shorter than ' + (n) + ' character';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'should not have less than ' + (n) + ' propert';
        if (n == 1) {
          out += 'y';
        } else {
          out += 'ies';
        }
        break;
      case 'multipleOf':
        out = 'should be a multiple of ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'should not be valid according to schema in "not"';
        break;
      case 'oneOf':
        out = 'should match exactly one schema in "oneOf"';
        break;
      case 'pattern':
        out = 'should match pattern "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'should have required property ' + (e.params.missingProperty);
        break;
      case 'type':
        out = 'should be ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'should not have duplicate items (items ## ' + (e.params.j) + ' and ' + (e.params.i) + ' are identical)';
        break;
    }
    e.message = out;
  }
};

},{}],3:[function(require,module,exports){
'use strict';
module.exports = function localize_es(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'no se puede resolver la referencia ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'no debe tener más de ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'additionalProperties':
        out = 'no debe tener propiedades adicionales';
        break;
      case 'anyOf':
        out = 'debe coincidir con algún esquema en "anyOf"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'debe contener la';
        if (n != 1) {
          out += 's';
        }
        out += ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        out += ' ' + (e.params.deps) + ' cuando la propiedad ' + (e.params.property) + ' se encuentra presente';
        break;
      case 'enum':
        out = 'deber ser igual a uno de los valores predefinidos';
        break;
      case 'format':
        out = 'debe coincidir con el formato "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'debe ser ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener más de ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener más de ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener más de ' + (n) + ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'debe ser ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener menos de ' + (n) + ' elemento';
        if (n != 1) {
          out += 's';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener menos de ' + (n) + ' caracter';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'no debe contener menos de ' + (n) + ' propiedad';
        if (n != 1) {
          out += 'es';
        }
        break;
      case 'multipleOf':
        out = 'debe ser múltiplo de ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'no debe ser válido según el esquema en "not"';
        break;
      case 'oneOf':
        out = 'debe coincidir con un solo esquema en "oneOf"';
        break;
      case 'pattern':
        out = 'debe coincidir con el patron "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'debe tener la propiedad requerida ' + (e.params.missingProperty);
        break;
      case 'type':
        out = 'debe ser ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'no debe contener elementos duplicados, (los elementos ## ' + (e.params.j) + ' y ' + (e.params.i) + ' son idénticos)';
        break;
    }
    e.message = out;
  }
};

},{}],4:[function(require,module,exports){
'use strict';
module.exports = function localize_hu(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'nem sikerült feloldani a hivatkozást ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet több, mint ' + (n) + ' eleme';
        break;
      case 'additionalProperties':
        out = 'nem lehetnek további elemei';
        break;
      case 'anyOf':
        out = 'meg kell feleljen legalább egy "anyOf" alaknak';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += '-nak kell legyen';
        if (n > 1) {
          out += 'ek';
        }
        out += ' a következő tulajdonsága';
        if (n != 1) {
          out += 'i';
        }
        out += ': ' + (e.params.deps) + ', ha van ' + (e.params.property) + ' tulajdonsága';
        break;
      case 'enum':
        out = 'egyenlő kell legyen valamely előre meghatározott értékkel';
        break;
      case 'format':
        out = 'meg kell feleljen a következő formátumnak: "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'kell legyen ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet több, mint ' + (n) + ' eleme';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet hosszabb, mint ' + (n) + ' szimbólum';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet több, mint ' + (n) + ' tulajdonsága';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'kell legyen ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet kevesebb, mint ' + (n) + ' eleme';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet rövidebb, mint ' + (n) + ' szimbólum';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'nem lehet kevesebb, mint ' + (n) + ' tulajdonsága';
        break;
      case 'multipleOf':
        out = 'a többszöröse kell legyen a következő számnak: ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'nem lehet érvényes a "not" alaknak megfelelően';
        break;
      case 'oneOf':
        out = 'meg kell feleljen pontosan egy "anyOf" alaknak';
        break;
      case 'pattern':
        out = 'meg kell feleljen a következő mintának: "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'kell legyen ' + (e.params.missingProperty) + ' tulajdonsága';
        break;
      case 'type':
        out = '' + (e.params.type) + ' kell legyen';
        break;
      case 'uniqueItems':
        out = 'nem lehetnek azonos elemei (' + (e.params.j) + ' és ' + (e.params.i) + ' elemek azonosak)';
        break;
    }
    e.message = out;
  }
};

},{}],5:[function(require,module,exports){
'use strict';
module.exports = function localize_it(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'non può risolvere il riferimento ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere più di ' + (n) + ' element';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'additionalProperties':
        out = 'non dovrebbe avere attributi aggiuntive';
        break;
      case 'anyOf':
        out = 'deve corrispondere qualche schema in "anyOf"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'dovrebbe avere attribut';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        out += ' ' + (e.params.deps) + ' quando attributo ' + (e.params.property) + ' è presente';
        break;
      case 'enum':
        out = 'dovrebbe essere pari ad uno dei valori predefiniti';
        break;
      case 'format':
        out = 'deve corrispondere formato "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'dovrebbe essere ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere più di ' + (n) + ' element';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe essere più lungo di ' + (n) + ' caratter';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'i';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere più ' + (n) + ' attribut';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'dovrebbe essere ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere meno di ' + (n) + ' element';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe essere meno lungo di ' + (n) + ' caratter';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'i';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'non dovrebbe avere meno ' + (n) + ' attribut';
        if (n == 1) {
          out += 'o';
        } else {
          out += 'i';
        }
        break;
      case 'multipleOf':
        out = 'dovrebbe essere un multiplo di ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'non dovrebbe essere valida in base allo schema di "non"';
        break;
      case 'oneOf':
        out = 'dovrebbe corrispondere esattamente uno schema in "oneOf"';
        break;
      case 'pattern':
        out = 'deve corrispondere al modello "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'dovrebbe avere attributo richiesta ' + (e.params.missingProperty);
        break;
      case 'type':
        out = 'dovrebbe essere ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'non dovrebbe avere elementi duplicati (elementi ## ' + (e.params.j) + ' e ' + (e.params.i) + ' sono uguali)';
        break;
    }
    e.message = out;
  }
};

},{}],6:[function(require,module,exports){
'use strict';
module.exports = function localize_ja(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = '' + (e.params.ref) + 'のスキーマを見つけることができない';
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '以上あってはいけない';
        break;
      case 'additionalProperties':
        out = '追加してはいけない';
        break;
      case 'anyOf':
        out = '"anyOf"のスキーマとマッチしなくてはいけない';
        break;
      case 'dependencies':
        out = '' + (e.params.property) + 'がある場合、';
        var n = e.params.depsCount;
        out += 'は' + (e.params.deps) + 'をつけなければいけない';
        break;
      case 'enum':
        out = '事前に定義された値のいずれかに等しくなければいけない';
        break;
      case 'format':
        out = '"' + (e.params.format) + '"形式に揃えなければいけない';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += (cond) + 'でなければいけない';
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以上であってはいけない';
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '文字以上であってはいけない';
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以上のプロパティを有してはいけない';
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += (cond) + 'でなければいけない';
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以下であってはいけない';
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '文字以下であってはいけない';
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'は' + (n) + '個以下のプロパティを有してはいけない';
        break;
      case 'multipleOf':
        out = '' + (e.params.multipleOf) + 'の倍数でなければいけない';
        break;
      case 'not':
        out = '"not"のスキーマに従って有効としてはいけない';
        break;
      case 'oneOf':
        out = '"oneOf"のスキーマと完全に一致しなくてはいけない';
        break;
      case 'pattern':
        out = '"' + (e.params.pattern) + '"のパターンと一致しなければいけない';
        break;
      case 'required':
        out = '必要なプロパティ' + (e.params.missingProperty) + 'がなければいけない';
        break;
      case 'type':
        out = '' + (e.params.type) + 'でなければいけない';
        break;
      case 'uniqueItems':
        out = '重複するアイテムがあってはいけない（' + (e.params.j) + 'と' + (e.params.i) + 'は同じである）';
        break;
    }
    e.message = out;
  }
};

},{}],7:[function(require,module,exports){
'use strict';
module.exports = function localize_pl(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'nie można znaleść schematu ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien mieć więcej niż ' + (n) + ' element';
        if (n == 1) {
          out += 'u';
        } else {
          out += 'ów';
        }
        break;
      case 'additionalProperties':
        out = 'nie powinien zawierać dodatkowych pól';
        break;
      case 'anyOf':
        out = 'powinien pasować do wzoru z sekcji "anyOf"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'powinien zawierać pol';
        if (n == 1) {
          out += 'e';
        } else {
          out += 'a';
        }
        out += ' ' + (e.params.deps) + ' kiedy pole ' + (e.params.property) + ' jest obecne';
        break;
      case 'enum':
        out = 'powinien być równy do jednej z predefinowanej wartości';
        break;
      case 'format':
        out = 'powinien zgadzać się z formatem "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'powinien być ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien mieć więcej niż ' + (n) + ' element';
        if (n == 1) {
          out += 'u';
        } else {
          out += 'ów';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien być dłuższy niż ' + (n) + ' znak';
        if (n != 1) {
          out += 'ów';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien zawierać więcej niż ' + (n) + ' ';
        if (n == 1) {
          out += 'pole';
        } else {
          out += 'pól';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'powinien być ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien mieć mniej niż ' + (n) + ' element';
        if (n == 1) {
          out += 'u';
        } else {
          out += 'ów';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien być krótszy niż ' + (n) + ' znak';
        if (n != 1) {
          out += 'ów';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'nie powinien zawierać mniej niż ' + (n) + ' ';
        if (n == 1) {
          out += 'pole';
        } else {
          out += 'pól';
        }
        break;
      case 'multipleOf':
        out = 'powinien być wielokrotnością ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'nie powinien pasować do wzoru z sekcji "not"';
        break;
      case 'oneOf':
        out = 'powinien pasować do jednego wzoru z sekcji "oneOf"';
        break;
      case 'pattern':
        out = 'powinien zgadzać się ze wzorem "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'powinien zawierać wymagane pole ' + (e.params.missingProperty);
        break;
      case 'type':
        out = 'powinien być ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'nie powinien zawierać elementów które się powtarzają (elementy ' + (e.params.j) + ' i ' + (e.params.i) + ' są identyczne)';
        break;
    }
    e.message = out;
  }
};

},{}],8:[function(require,module,exports){
'use strict';
module.exports = function localize_ru(errors) {
  if (!(errors && errors.length)) return;
  for (var i = 0; i < errors.length; i++) {
    var e = errors[i];
    var out;
    switch (e.keyword) {
      case '$ref':
        out = 'не найдена схема ' + (e.params.ref);
        break;
      case 'additionalItems':
        out = '';
        var n = e.params.limit;
        out += 'должен иметь не более, чем ' + (n) + ' элемент';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'additionalProperties':
        out = 'не должен иметь дополнительные поля';
        break;
      case 'anyOf':
        out = 'должен соответствовать одной их схем в "anyOf"';
        break;
      case 'dependencies':
        out = '';
        var n = e.params.depsCount;
        out += 'должен иметь пол';
        if (n == 1) {
          out += 'е';
        } else {
          out += 'я';
        }
        out += ' ' + (e.params.deps) + ', когда присутствует поле ' + (e.params.property);
        break;
      case 'enum':
        out = 'должен быть равен одному из значений в "enum"';
        break;
      case 'format':
        out = 'должен соответствовать формату "' + (e.params.format) + '"';
        break;
      case 'maximum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'должен быть ' + (cond);
        break;
      case 'maxItems':
        out = '';
        var n = e.params.limit;
        out += 'должен иметь не более, чем ' + (n) + ' элемент';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'maxLength':
        out = '';
        var n = e.params.limit;
        out += 'должен быть не длиннее, чем ' + (n) + ' символ';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'maxProperties':
        out = '';
        var n = e.params.limit;
        out += 'должен иметь не более, чем ' + (n) + ' пол';
        if (n == 1) {
          out += 'е';
        } else if (n >= 2 && n <= 4) {
          out += 'я';
        } else {
          out += 'ей';
        }
        break;
      case 'minimum':
        out = '';
        var cond = e.params.comparison + " " + e.params.limit;
        out += 'должен быть ' + (cond);
        break;
      case 'minItems':
        out = '';
        var n = e.params.limit;
        out += 'должен иметь не менее, чем ' + (n) + ' элемент';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'minLength':
        out = '';
        var n = e.params.limit;
        out += 'должен быть не короче, чем ' + (n) + ' символ';
        if (n >= 2 && n <= 4) {
          out += 'а';
        } else if (n != 1) {
          out += 'ов';
        }
        break;
      case 'minProperties':
        out = '';
        var n = e.params.limit;
        out += 'должен иметь не менее, чем ' + (n) + ' пол';
        if (n == 1) {
          out += 'е';
        } else if (n >= 2 && n <= 4) {
          out += 'я';
        } else {
          out += 'ей';
        }
        break;
      case 'multipleOf':
        out = 'должен быть кратным ' + (e.params.multipleOf);
        break;
      case 'not':
        out = 'должен не соответствовать схеме в "not"';
        break;
      case 'oneOf':
        out = 'должен соответствовать в точности одной схемe в "oneOf"';
        break;
      case 'pattern':
        out = 'должен соответствовать образцу "' + (e.params.pattern) + '"';
        break;
      case 'required':
        out = 'должен иметь обязательное поле ' + (e.params.missingProperty);
        break;
      case 'type':
        out = 'должен быть ' + (e.params.type);
        break;
      case 'uniqueItems':
        out = 'не должен иметь повторяющихся элементов (элементы ' + (e.params.j) + ' и ' + (e.params.i) + ' идентичны)';
        break;
    }
    e.message = out;
  }
};

},{}],"/localize/index":[function(require,module,exports){
'use strict';

module.exports = {
    de: require('./de'),
    en: require('./en'),
    hu: require('./hu'),
    it: require('./it'),
    ja: require('./ja'),
    pl: require('./pl'),
    ru: require('./ru'),
    es: require('./es')
};

},{"./de":1,"./en":2,"./es":3,"./hu":4,"./it":5,"./ja":6,"./pl":7,"./ru":8}]},{},[]);
