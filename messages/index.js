'use strict';

module.exports = {
  // supported locales
  _locales: ['en', 'ru', 'pl'],

  // shared defines
  _defs: {
    n: '{{var n = e.schema;}}',
    mPlural: { // plural for the words item and character
      en: '{{? n!=1 }}s{{?}}',
      ru: '{{? n>=2 && n<=4 }}а{{?? n!=1 }}ов{{?}}',
      pl: '{{? n==1 }}u{{??}}ów{{?}}'
    },
    propPlural: { // plural for the word property
      en: '{{? n==1 }}y{{??}}ies{{?}}',
      ru: '{{? n==1 }}е{{?? n>=2 && n<=4 }}я{{??}}ей{{?}}',
      pl: '{{? n==1 }}e{{??}}a{{?}}'
    }
  },

  // error messages
  $ref: {
    en: 'can\\\'t resolve reference {{=e.params.escaped}}',
    ru: 'не найдена схема {{=e.params.escaped}}',
    pl: 'nie można znaleść schematu'
  },
  additionalItems: {
    _defs: {
      n: '{{var n = e.schema.length;}}'
    },
    en: '{{#def.n}}should NOT have more than {{=n}} item{{#def.mPlural}}',
    ru: '{{#def.n}}должен иметь НЕ более, чем {{=n}} элемент{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    // en: 'Additional items not allowed',
    // de: 'Zusätzliche Einträge nicht erlaubt',
    // fr: 'Éléments additionnels non autorisés',
    // nb: 'Tillegselementer er ikke tillatt',
    // 'pl-PL': 'Dodatkowe elementy są niedozwolone',
    // 'pt-PT': 'Não são permitidos itens adicionais',
    // 'sv-SE': 'Extra värden är inte tillåtna',
    // 'zh-CN': '不允许多余的元素'
  },
  additionalProperties: {
    en: 'should NOT have additional properties',
    ru: 'не должен иметь дополнительные поля',
    pl: 'nie powinien zawierać dodatkowych pól'
    // en: 'Additional properties not allowed',
    // de: 'Zusätzliche Attribute nicht erlaubt',
    // fr: 'Propriétés additionnelles non autorisées',
    // nb: 'Tilleggsvariabler er ikke tillatt',
    // 'pl-PL': 'Dodatkowe pola są niedozwolone',
    // 'pt-PT': 'Não são permitidas propriedades adicionais',
    // 'sv-SE': 'Extra parametrar är inte tillåtna',
    // 'zh-CN': '不允许多余的字段'
  },
  anyOf: {
    en: 'should match some schema in "anyOf"',
    ru: 'должен соответствовать одной их схем в "anyOf"',
    pl: 'powinien pasować do wzoru z sekcji "anyOf"',
    // en: 'Data does not match any schemas from "anyOf"',
    // de: 'Daten stimmen nicht überein mit einem der Schemas von "anyOf"',
    // fr: 'La donnée ne correspond à aucun schema de "anyOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "anyOf"',
    // 'pl-PL': 'Dane nie pasują do żadnego wzoru z sekcji "anyOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "anyOf"',
    // 'sv-SE': 'Värdet matchar inget av schemana "anyOf"',
    // 'zh-CN': '数据不符合以下任何一个模式 ("anyOf")'
  },
  dependencies: {
    _defs: {
      n: '{{var n = e.params.n;}}'
    },
    en: '{{#def.n}}should have propert{{#def.propPlural}} {{=e.params.deps}} when property {{=e.params.property}} is present',
    ru: '{{#def.n}}должен иметь пол{{? n==1 }}е{{??}}я{{?}} {{=e.params.deps}}, когда присутствует поле {{=e.params.property}}',
    pl: '{{#def.n}}powinien zawierać pol{{#def.propPlural}} {{=e.params.deps}} kiedy pole {{=e.params.property}} jest obecne',
    // en: 'Dependency failed - key must exist: {missing} (due to key: {key})',
    // de: 'Abhängigkeit fehlt - Schlüssel nicht vorhanden: {missing} (wegen Schlüssel: {key})',
    // fr: 'Echec de dépendance - la clé doit exister: {missing} (du à la clé: {key})',
    // nb: 'Variabelen {missing} må være definert (på grunn av følgende variabel: {key})',
    // 'pl-PL': 'Błąd zależności - klucz musi istnieć: {missing} (wzgledem klucza: {key})',
    // 'pt-PT': 'Uma dependência falhou - tem de existir uma chave: {missing} (devido à chave: {key})',
    // 'sv-SE': 'Saknar beroende - saknad nyckel: {missing} (beroende nyckel: {key})',
    // 'zh-CN': '依赖失败 - 缺少键 {missing} (来自键: {key})'
  },
  enum: {
    en: 'should be equal to one of predefined values',
    ru: 'должен быть равен одному из значений в "enum"',
    pl: 'powinien być równy do jednej z predefinowanej wartości'
    // en: 'No enum match for: {value}',
    // de: 'Keine Übereinstimmung mit der Aufzählung (enum) für: {value}',
    // fr: 'Aucune valeur correspondante (enum) pour: {value}',
    // nb: 'Ingen samsvarende enum verdi for: {value}',
    // 'pl-PL': 'Żadna predefiniowana wartośc nie pasuje do: {value}',
    // 'pt-PT': 'Nenhuma correspondência \'enum\' para: {value}',
    // 'sv-SE': 'Otillåtet värde: {value}',
    // 'zh-CN': '{value} 不是有效的枚举类型取值'
  },
  format: {
    en: 'should match format "{{=e.params.escaped}}"',
    ru: 'должен соответствовать формату "{{=e.params.escaped}}"',
    pl: 'powinien zgadzać się z formatem "{{=e.params.escaped}}"'
    // en: 'Format validation failed ({message})',
    // fr: 'Échec de validation du format ({message})',
    // nb: 'Formatteringen stemmer ikke ({message})',
    // 'pl-PL': 'Błąd zgodności z formatem ({message})',
    // 'pt-PT': 'A validação do formato falhou ({message})',
    // 'sv-SE': 'Misslyckad validering ({message})',
    // 'zh-CN': '格式校验失败 ({message})'
  },
  maximum: {
    en: 'should be {{=e.params.condition}}',
    ru: 'должен быть {{=e.params.condition}}',
    pl: 'powinien być {{=e.params.condition}}',
    // en: 'Value {value} is greater than maximum {maximum}',
    // de: 'Wert {value} ist größer als das Maximum {maximum}',
    // fr: 'La valeur {value} est supérieure au maximum {maximum}',
    // nb: 'Verdien {value} er større enn maksimalverdi {maximum}',
    // 'pl-PL': 'Wartość {value} jest większa niż {maximum}',
    // 'pt-PT': 'O valor {value} é maior que o máximo {maximum}',
    // 'sv-SE': 'Värdet {value} får inte vara större än {maximum}',
    // 'zh-CN': '数值 {value} is greater 大于最大值 {maximum}'
  },
  minimum: {
    en: 'should be {{=e.params.condition}}',
    ru: 'должен быть {{=e.params.condition}}',
    pl: 'powinien być {{=e.params.condition}}',
    // en: 'Value {value} is less than minimum {minimum}',
    // de: 'Wert {value} ist kleiner als das Minimum {minimum}',
    // fr: 'La valeur {value} est inférieure au minimum {minimum}',
    // nb: 'Verdien {value} er mindre enn minsteverdi {minimum}',
    // 'pl-PL': 'Wartość {value} jest mniejsza niż {minimum}',
    // 'pt-PT': 'O valor {value} é menor que o mínimo {minimum}',
    // 'sv-SE': 'Värdet {value} får inte vara mindre än {minimum}',
    // 'zh-CN': '数值 {value} 小于最小值 {minimum}'
  },
  maxItems: {
    en: '{{#def.n}}should NOT have more than {{=n}} item{{#def.mPlural}}',
    ru: '{{#def.n}}должен иметь НЕ более, чем {{=n}} элемент{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}'
    // en: 'Array is too long ({length}), maximum {maximum}',
    // de: 'Array zu lang ({length}), maximum {maximum}',
    // fr: 'Le tableau est trop long ({length}), maximum {maximum}',
    // nb: 'Listen er for lang ({length} elementer), maksimalt {maximum}',
    // 'pl-PL': 'Tablica ma za dużo elementów ({length}), maximum {maximum}',
    // 'pt-PT': 'A \'array\' é muito longa ({length}), máximo {maximum}',
    // 'sv-SE': 'Listan är för lång ({length}), ska högst vara {maximum}',
    // 'zh-CN': '数组长度太长 ({length}), 最大长度 {maximum}'
  },
  minItems: {
    en: '{{#def.n}}should NOT have less than {{=n}} item{{#def.mPlural}}',
    ru: '{{#def.n}}должен иметь НЕ менее, чем {{=n}} элемент{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć mniej niż {{=n}} element{{#def.mPlural}}'
    // en: 'Array is too short ({length}), minimum {minimum}',
    // de: 'Array zu kurz ({length}), minimum {minimum}',
    // fr: 'Le tableau est trop court ({length}), minimum {minimum}',
    // nb: 'Listen er for kort ({length} elementer), minst {minimum}',
    // 'pl-PL': 'Tablica ma za mało elementów ({length}), minimum {minimum}',
    // 'pt-PT': 'A \'array\' é muito curta ({length}), mínimo {minimum}',
    // 'sv-SE': 'Listan är för kort ({length}), ska minst vara {minimum}',
    // 'zh-CN': '数组长度太短 ({length}), 最小长度 {minimum}'
  },
  maxLength: {
    en: '{{#def.n}}should NOT be longer than {{=n}} character{{#def.mPlural}}',
    ru: '{{#def.n}}должен быть НЕ длиннее, чем {{=n}} символ{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien być dłuższy niż {{=n}} znak{{? n!=1 }}ów{{?}}'
    // en: 'String is too long ({length} chars), maximum {maximum}',
    // de: 'Zeichenkette zu lang ({length} chars), maximum {maximum}',
    // fr: 'Le texte est trop long ({length} carac.), maximum {maximum}',
    // nb: 'Strengen er for lang ({length} tegn), maksimalt {maximum}',
    // 'pl-PL': 'Napis jest za długi ({length} )znaków, maksimum {maximum}',
    // 'pt-PT': 'A \'string\' é muito longa ({length} caracteres), máximo {maximum}',
    // 'sv-SE': 'Texten är för lång ({length} tecken), ska vara högst {maximum}',
    // 'zh-CN': '字符串太长 ({length} 个字符), 最多 {maximum} 个'
  },
  minLength: {
    en: '{{#def.n}}should not be shorter than {{=n}} character{{#def.mPlural}}',
    ru: '{{#def.n}}должен быть НЕ короче, чем {{=n}} символ{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien być krótszy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    // en: 'String is too short ({length} chars), minimum {minimum}',
    // de: 'Zeichenkette zu kurz ({length} chars), minimum {minimum}',
    // fr: 'Le texte est trop court ({length} carac.), minimum {minimum}',
    // nb: 'Strengen er for kort ({length} tegn), minst {minimum}',
    // 'pl-PL': 'Napis jest za krótki ({length} znaków), minimum {minimum}',
    // 'pt-PT': 'A \'string\' é muito curta ({length} caracteres), mínimo {minimum}',
    // 'sv-SE': 'Texten är för kort ({length} tecken), ska vara minst {minimum} tecken',
    // 'zh-CN': '字符串太短 ({length} 个字符), 最少 {minimum} 个'
  },
  maxProperties: {
    en: '{{#def.n}}should NOT have more than {{=n}} propert{{#def.propPlural}}',
    ru: '{{#def.n}}должен иметь НЕ более, чем {{=n}} пол{{#def.propPlural}}',
    pl: '{{#def.n}}nie powinien zawierać więcej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}'
    // en: 'Too many properties defined ({propertyCount}), maximum {maximum}',
    // de: 'Zu viele Attribute definiert ({propertyCount}), maximum {maximum}',
    // fr: 'Trop de propriétés définies ({propertyCount}), maximum {maximum}',
    // nb: 'For mange variabler definert ({propertyCount}), makismalt {maximum} er tillatt',
    // 'pl-PL': 'Za dużo zdefiniowanych pól ({propertyCount}), maksimum {maximum}',
    // 'pt-PT': 'Muitas propriedades definidas ({propertyCount}), máximo {maximum}',
    // 'sv-SE': 'För många parametrar ({propertyCount}), får högst vara {maximum}',
    // 'zh-CN': '字段数过多 ({propertyCount}), 最多 {maximum} 个'
  },
  minProperties: {
    en: '{{#def.n}}should NOT have less than {{=n}} propert{{#def.propPlural}}',
    ru: '{{#def.n}}должен иметь НЕ менее, чем {{=n}} пол{{#def.propPlural}}',
    pl: '{{#def.n}}nie powinien zawierać mniej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}'
    // en: 'Too few properties defined ({propertyCount}), minimum {minimum}',
    // de: 'Zu wenige Attribute definiert ({propertyCount}), minimum {minimum}',
    // fr: 'Pas assez de propriétés définies ({propertyCount}), minimum {minimum}',
    // nb: 'For få variabler definert ({propertyCount}), minst {minimum} er forventet',
    // 'pl-PL': 'Za mało zdefiniowanych pól ({propertyCount}), minimum {minimum}',
    // 'pt-PT': 'Poucas propriedades definidas ({propertyCount}), mínimo {minimum}',
    // 'sv-SE': 'För få parametrar ({propertyCount}), ska minst vara {minimum}',
    // 'zh-CN': '字段数过少 ({propertyCount}), 最少 {minimum} 个'
  },
  multipleOf: {
    en: 'should be multiple of {{=e.schema}}',
    ru: 'должен быть кратным {{=e.schema}}',
    pl: 'powinien być wielokrotnością {{=e.schema}}'
    // en: 'Value {value} is not a multiple of {multipleOf}',
    // de: 'Wert {value} ist kein Vielfaches von {multipleOf}',
    // fr: 'La valeur {value} n\'est pas un multiple de {multipleOf}',
    // nb: 'Verdien {value} er ikke et multiplum av {multipleOf}',
    // 'pl-PL': 'Wartość {value} nie jest wielokrotnością {multipleOf}',
    // 'pt-PT': 'O valor {value} não é um múltiplo de {multipleOf}',
    // 'sv-SE': 'Värdet {value} är inte en multipel av {multipleOf}',
    // 'zh-CN': '数值 {value} 不是 {multipleOf} 的倍数'
  },
  not: {
    en: 'should NOT be valid according to schema in "not"',
    ru: 'должен НЕ соответствовать схеме в "not"',
    pl: 'nie powinien pasować do wzoru z sekcji {{=e.schema}}'
    // en: 'Data matches schema from "not"',
    // de: 'Daten stimmen mit dem "not" Schema überein',
    // fr: 'La donnée correspond au schema de "not"',
    // nb: 'Data samsvarer med skjema fra "not"',
    // 'pl-PL': 'Dane pasują do wzoru z sekcji "not"',
    // 'pt-PT': 'Os dados correspondem a um esquema de "not"',
    // 'sv-SE': 'Värdet matchar schemat från "not"',
    // 'zh-CN': '数据不应匹配以下模式 ("not")'
  },
  oneOf: {
    en: 'should match exactly one schema in "oneOf"',
    ru: 'должен соответствовать в точности одной схемe в "oneOf"',
    pl: 'powinien pasować do jednego wzoru z sekcji {{=e.schema}}'
    // en: 'Data does not match any schemas from "oneOf"',
    // de: 'Daten stimmen nicht überein mit einem der Schemas von "oneOf"',
    // fr: 'La donnée ne correspond à aucun schema de  "oneOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "oneOf"',
    // 'pl-PL': 'Dane nie pasują do żadnego wzoru z sekcji "oneOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "oneOf"',
    // 'sv-SE': 'Värdet matchar inget av schemana "oneOf"',
    // 'zh-CN': '数据不符合以下任何一个模式 ("oneOf")'
  },
  pattern: {
    en: 'should match pattern "{{=e.params.escaped}}"',
    ru: 'должен соответствовать образцу "{{=e.params.escaped}}"',
    pl: 'powinien zgadzać się ze wzorem "{{=e.params.escaped}}"'
    // en: 'String does not match pattern: {pattern}',
    // de: 'Zeichenkette entspricht nicht dem Muster: {pattern}',
    // fr: 'Le texte ne correspond pas au motif: {pattern}',
    // nb: 'Strengen samsvarer ikke med regulært uttrykk: {pattern}',
    // 'pl-PL': 'Napis nie pasuje do wzoru: {pattern}',
    // 'pt-PT': 'A \'string\' não corresponde ao modelo: {pattern}',
    // 'sv-SE': 'Texten har fel format: {pattern}',
    // 'zh-CN': '字符串不匹配模式: {pattern}'
  },
  required: {
    en: 'should have required property {{=e.params.missingProperty}}',
    ru: 'должен иметь обязательное поле {{=e.params.missingProperty}}',
    pl: 'powinien zawierać wymagane pole {{=e.params.missingProperty}}'
    // en: 'Missing required property: {key}',
    // de: 'Notwendiges Attribut fehlt: {key}',
    // fr: 'Propriété requise manquante: {key}',
    // nb: 'Mangler obligatorisk variabel: {key}',
    // 'pl-PL': 'Brakuje wymaganego pola: {key}',
    // 'pt-PT': 'Propriedade necessária em falta: {key}',
    // 'sv-SE': 'Egenskap saknas: {key}',
    // 'zh-CN': '缺少必要字段: {key}'
  },
  type: {
    en: 'should be {{=e.params.type}}',
    ru: 'должен быть {{=e.params.type}}',
    pl: 'powinien być {{=e.params.type}}'
    // en: 'Invalid type: {type} (expected {expected})',
    // de: 'Ungültiger Typ: {type} (erwartet wurde: {expected})',
    // fr: 'Type invalide: {type} ({expected} attendu)',
    // nb: 'Ugyldig type: {type} (forventet {expected})',
    // 'pl-PL': 'Niepoprawny typ: {type} (spodziewany {expected})',
    // 'pt-PT': 'Tipo inválido: {type} (esperava {expected})',
    // 'sv-SE': 'Otillåten typ: {type} (skall vara {expected})',
    // 'zh-CN': '当前类型 {type} 不符合期望的类型 {expected}'
  },
  uniqueItems: {
    en: 'should NOT have duplicate items (items ## {{=e.params.j}} and {{=e.params.i}} are identical)',
    ru: 'не должен иметь повторяющихся элементов (элементы {{=e.params.j}} и {{=e.params.i}} идентичны)',
    pl: 'nie powinien zawierać elementów które się powtarzają (elementy {{=e.params.j}} i {{=e.params.i}} są identyczne)'
    // en: 'Array items are not unique (indices {match1} and {match2})',
    // de: 'Array Einträge nicht eindeutig (Index {match1} und {match2})',
    // fr: 'Des éléments du tableau ne sont pas uniques (indices {match1} et {match2})',
    // nb: 'Elementene er ikke unike (indeks {match1} og {match2} er like)',
    // 'pl-PL': 'Elementy tablicy nie są unikalne (indeks {match1} i {match2})',
    // 'pt-PT': 'Os itens da \'array\' não são únicos (índices {match1} e {match2})',
    // 'sv-SE': 'Listvärden är inte unika (index {match1} och {match2})',
    // 'zh-CN': '数组元素不唯一 (下标 {match1} 和 {match2})'
  },
};
