'use strict';

module.exports = {
  // supported locales
  _locales: ['de', 'en', 'hu', 'it', 'ja', 'pl', 'ru' ],

  // shared defines
  _defs: {
    n: '{{var n = e.schema;}}',
    mPlural: { // plural for the words item (element) and character
      de: '{{? n!=1 }}e{{?}}',
      en: '{{? n!=1 }}s{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      pl: '{{? n==1 }}u{{??}}ów{{?}}',
      ru: '{{? n>=2 && n<=4 }}а{{?? n!=1 }}ов{{?}}'
    },
    propPlural: { // plural for the word property (attribute)
      de: '{{? n!=1 }}e{{?}}',
      en: '{{? n==1 }}y{{??}}ies{{?}}',
      hu: '{{? n!=1 }}i{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      pl: '{{? n==1 }}e{{??}}a{{?}}',
      ru: '{{? n==1 }}е{{?? n>=2 && n<=4 }}я{{??}}ей{{?}}'
    }
  },

  // error messages
  $ref: {
    de: 'kann die Referenz {{=e.params.escaped}} nicht auflösen',
    en: 'can\\\'t resolve reference {{=e.params.escaped}}',
    hu: 'nem sikerült feloldani a hivatkozást {{=e.params.escaped}}',
    it: 'non può risolvere il riferimento {{=e.params.escaped}}',
    pl: 'nie można znaleść schematu',
    ru: 'не найдена схема {{=e.params.escaped}}',
    ja: '{{=e.params.escaped}}のスキーマを見つけることができない'
  },
  additionalItems: {
    _defs: {
      n: '{{var n = e.schema.length;}}'
    },
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Element{{#def.mPlural}} enthalten',
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    ru: '{{#def.n}}должен иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}以上あってはいけない'
    // en: 'Additional items not allowed',
    // fr: 'Éléments additionnels non autorisés',
    // nb: 'Tillegselementer er ikke tillatt',
    // 'pt-PT': 'Não são permitidos itens adicionais',
    // 'sv-SE': 'Extra värden är inte tillåtna',
    // 'zh-CN': '不允许多余的元素'
  },
  additionalProperties: {
    de: 'sollte keine zusätzlichen Attribute haben',
    en: 'should not have additional properties',
    hu: 'nem lehetnek további elemei',
    it: 'non dovrebbe avere attributi aggiuntive',
    pl: 'nie powinien zawierać dodatkowych pól',
    ru: 'не должен иметь дополнительные поля',
    ja: '追加してはいけない'
    // en: 'Additional properties not allowed',
    // fr: 'Propriétés additionnelles non autorisées',
    // nb: 'Tilleggsvariabler er ikke tillatt',
    // 'pt-PT': 'Não são permitidas propriedades adicionais',
    // 'sv-SE': 'Extra parametrar är inte tillåtna',
    // 'zh-CN': '不允许多余的字段'
  },
  anyOf: {
    de: 'sollte einem der Schemata in "anyOf" entsprechen',
    en: 'should match some schema in "anyOf"',
    hu: 'meg kell feleljen legalább egy "anyOf" alaknak',
    it: 'deve corrispondere qualche schema in "anyOf"',
    pl: 'powinien pasować do wzoru z sekcji "anyOf"',
    ru: 'должен соответствовать одной их схем в "anyOf"',
    ja: '"anyOf"のスキーマとマッチしなくてはいけない'
    // en: 'Data does not match any schemas from "anyOf"',
    // fr: 'La donnée ne correspond à aucun schema de "anyOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "anyOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "anyOf"',
    // 'sv-SE': 'Värdet matchar inget av schemana "anyOf"',
    // 'zh-CN': '数据不符合以下任何一个模式 ("anyOf")'
  },
  dependencies: {
    _defs: {
      n: '{{var n = e.params.n;}}'
    },
    de: '{{#def.n}}sollte Attribut{{#def.propPlural}} {{=e.params.deps}} aufweisen, wenn Attribut {{=e.params.property}} gesetzt ist',
    en: '{{#def.n}}should have propert{{#def.propPlural}} {{=e.params.deps}} when property {{=e.params.property}} is present',
    hu: '{{#def.n}}-nak kell legyen{{? n>1 }}ek{{?}} a következő tulajdonsága{{#def.propPlural}}: {{=e.params.deps}}, ha van {{=e.params.property}} tulajdonsága',
    it: '{{#def.n}}dovrebbe avere attribut{{#def.propPlural}} {{=e.params.deps}} quando attributo {{=e.params.property}} è presente',
    pl: '{{#def.n}}powinien zawierać pol{{#def.propPlural}} {{=e.params.deps}} kiedy pole {{=e.params.property}} jest obecne',
    ru: '{{#def.n}}должен иметь пол{{? n==1 }}е{{??}}я{{?}} {{=e.params.deps}}, когда присутствует поле {{=e.params.property}}',
    ja: '{{=e.params.property}}がある場合、{{#def.n}}は{{=e.params.deps}}をつけなければいけない'
    // en: 'Dependency failed - key must exist: {missing} (due to key: {key})',
    // fr: 'Echec de dépendance - la clé doit exister: {missing} (du à la clé: {key})',
    // nb: 'Variabelen {missing} må være definert (på grunn av følgende variabel: {key})',
    // 'pt-PT': 'Uma dependência falhou - tem de existir uma chave: {missing} (devido à chave: {key})',
    // 'sv-SE': 'Saknar beroende - saknad nyckel: {missing} (beroende nyckel: {key})',
    // 'zh-CN': '依赖失败 - 缺少键 {missing} (来自键: {key})'
  },
  enum: {
    de: 'sollte einem der vorgegebenen Werte entsprechen',
    en: 'should be equal to one of predefined values',
    hu: 'egyenlő kell legyen valamely előre meghatározott értékkel',
    it: 'dovrebbe essere pari ad uno dei valori predefiniti',
    pl: 'powinien być równy do jednej z predefinowanej wartości',
    ru: 'должен быть равен одному из значений в "enum"',
    ja: '事前に定義された値のいずれかに等しくなければいけない'
    // en: 'No enum match for: {value}',
    // fr: 'Aucune valeur correspondante (enum) pour: {value}',
    // nb: 'Ingen samsvarende enum verdi for: {value}',
    // 'pt-PT': 'Nenhuma correspondência \'enum\' para: {value}',
    // 'sv-SE': 'Otillåtet värde: {value}',
    // 'zh-CN': '{value} 不是有效的枚举类型取值'
  },
  format: {
    de: 'sollte diesem Format entsprechen: "{{=e.params.escaped}}"',
    en: 'should match format "{{=e.params.escaped}}"',
    hu: 'meg kell feleljen a következő formátumnak: "{{=e.params.escaped}}"',
    it: 'deve corrispondere formato "{{=e.params.escaped}}"',
    pl: 'powinien zgadzać się z formatem "{{=e.params.escaped}}"',
    ru: 'должен соответствовать формату "{{=e.params.escaped}}"',
    ja: '"{{=e.params.escaped}}"形式に揃えなければいけない'
    // en: 'Format validation failed ({message})',
    // fr: 'Échec de validation du format ({message})',
    // nb: 'Formatteringen stemmer ikke ({message})',
    // 'pt-PT': 'A validação do formato falhou ({message})',
    // 'sv-SE': 'Misslyckad validering ({message})',
    // 'zh-CN': '格式校验失败 ({message})'
  },
  maximum: {
    de: 'sollte {{=e.params.condition}} sein',
    en: 'should be {{=e.params.condition}}',
    hu: 'kell legyen {{=e.params.condition}}',
    it: 'dovrebbe essere {{=e.params.condition}}',
    pl: 'powinien być {{=e.params.condition}}',
    ru: 'должен быть {{=e.params.condition}}',
    ja: '{{=e.params.condition}}でなければいけない'
    // en: 'Value {value} is greater than maximum {maximum}',
    // fr: 'La valeur {value} est supérieure au maximum {maximum}',
    // nb: 'Verdien {value} er større enn maksimalverdi {maximum}',
    // 'pt-PT': 'O valor {value} é maior que o máximo {maximum}',
    // 'sv-SE': 'Värdet {value} får inte vara större än {maximum}',
    // 'zh-CN': '数值 {value} is greater 大于最大值 {maximum}'
  },
  minimum: {
    de: 'sollte {{=e.params.condition}} sein',
    en: 'should be {{=e.params.condition}}',
    hu: 'kell legyen {{=e.params.condition}}',
    it: 'dovrebbe essere {{=e.params.condition}}',
    pl: 'powinien być {{=e.params.condition}}',
    ru: 'должен быть {{=e.params.condition}}',
    ja: '{{=e.params.condition}}でなければいけない'
    // en: 'Value {value} is less than minimum {minimum}',
    // fr: 'La valeur {value} est inférieure au minimum {minimum}',
    // nb: 'Verdien {value} er mindre enn minsteverdi {minimum}',
    // 'pt-PT': 'O valor {value} é menor que o mínimo {minimum}',
    // 'sv-SE': 'Värdet {value} får inte vara mindre än {minimum}',
    // 'zh-CN': '数值 {value} 小于最小值 {minimum}'
  },
  maxItems: {
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Element{{#def.mPlural}} haben',
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    ru: '{{#def.n}}должен иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上であってはいけない'
    // en: 'Array is too long ({length}), maximum {maximum}',
    // fr: 'Le tableau est trop long ({length}), maximum {maximum}',
    // nb: 'Listen er for lang ({length} elementer), maksimalt {maximum}',
    // 'pt-PT': 'A \'array\' é muito longa ({length}), máximo {maximum}',
    // 'sv-SE': 'Listan är för lång ({length}), ska högst vara {maximum}',
    // 'zh-CN': '数组长度太长 ({length}), 最大长度 {maximum}'
  },
  minItems: {
    de: '{{#def.n}}sollte nicht weniger als {{=n}} Element{{#def.mPlural}} haben',
    en: '{{#def.n}}should not have less than {{=n}} item{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere meno di {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć mniej niż {{=n}} element{{#def.mPlural}}',
    ru: '{{#def.n}}должен иметь не менее, чем {{=n}} элемент{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下であってはいけない'
    // en: 'Array is too short ({length}), minimum {minimum}',
    // fr: 'Le tableau est trop court ({length}), minimum {minimum}',
    // nb: 'Listen er for kort ({length} elementer), minst {minimum}',
    // 'pt-PT': 'A \'array\' é muito curta ({length}), mínimo {minimum}',
    // 'sv-SE': 'Listan är för kort ({length}), ska minst vara {minimum}',
    // 'zh-CN': '数组长度太短 ({length}), 最小长度 {minimum}'
  },
  maxLength: {
    de: '{{#def.n}}sollte nicht länger als {{=n}} Zeichen sein',
    en: '{{#def.n}}should not be longer than {{=n}} character{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet hosszabb, mint {{=n}} szimbólum',
    it: '{{#def.n}}non dovrebbe essere più lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    pl: '{{#def.n}}nie powinien być dłuższy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    ru: '{{#def.n}}должен быть не длиннее, чем {{=n}} символ{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}文字以上であってはいけない'
    // en: 'String is too long ({length} chars), maximum {maximum}',
    // fr: 'Le texte est trop long ({length} carac.), maximum {maximum}',
    // nb: 'Strengen er for lang ({length} tegn), maksimalt {maximum}',
    // 'pt-PT': 'A \'string\' é muito longa ({length} caracteres), máximo {maximum}',
    // 'sv-SE': 'Texten är för lång ({length} tecken), ska vara högst {maximum}',
    // 'zh-CN': '字符串太长 ({length} 个字符), 最多 {maximum} 个'
  },
  minLength: {
    de: '{{#def.n}}sollte nicht kürzer als {{=n}} Zeichen sein',
    en: '{{#def.n}}should not be shorter than {{=n}} character{{#def.mPlural}}',
    hu: '{{#def.n}}nem lehet rövidebb, mint {{=n}} szimbólum',
    it: '{{#def.n}}non dovrebbe essere meno lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    pl: '{{#def.n}}nie powinien być krótszy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    ru: '{{#def.n}}должен быть не короче, чем {{=n}} символ{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}文字以下であってはいけない'
    // en: 'String is too short ({length} chars), minimum {minimum}',
    // fr: 'Le texte est trop court ({length} carac.), minimum {minimum}',
    // nb: 'Strengen er for kort ({length} tegn), minst {minimum}',
    // 'pt-PT': 'A \'string\' é muito curta ({length} caracteres), mínimo {minimum}',
    // 'sv-SE': 'Texten är för kort ({length} tecken), ska vara minst {minimum} tecken',
    // 'zh-CN': '字符串太短 ({length} 个字符), 最少 {minimum} 个'
  },
  maxProperties: {
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Attribut{{#def.propPlural}} haben',
    en: '{{#def.n}}should not have more than {{=n}} propert{{#def.propPlural}}',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non dovrebbe avere più {{=n}} attribut{{#def.propPlural}}',
    pl: '{{#def.n}}nie powinien zawierać więcej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    ru: '{{#def.n}}должен иметь не более, чем {{=n}} пол{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上のプロパティを有してはいけない'
    // en: 'Too many properties defined ({propertyCount}), maximum {maximum}',
    // fr: 'Trop de propriétés définies ({propertyCount}), maximum {maximum}',
    // nb: 'For mange variabler definert ({propertyCount}), makismalt {maximum} er tillatt',
    // 'pt-PT': 'Muitas propriedades definidas ({propertyCount}), máximo {maximum}',
    // 'sv-SE': 'För många parametrar ({propertyCount}), får högst vara {maximum}',
    // 'zh-CN': '字段数过多 ({propertyCount}), 最多 {maximum} 个'
  },
  minProperties: {
    de: '{{#def.n}}sollte nicht weniger als {{=n}} Attribut{{#def.propPlural}} haben',
    en: '{{#def.n}}should not have less than {{=n}} propert{{#def.propPlural}}',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non dovrebbe avere meno {{=n}} attribut{{#def.propPlural}}',
    pl: '{{#def.n}}nie powinien zawierać mniej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    ru: '{{#def.n}}должен иметь не менее, чем {{=n}} пол{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下のプロパティを有してはいけない'
    // en: 'Too few properties defined ({propertyCount}), minimum {minimum}',
    // fr: 'Pas assez de propriétés définies ({propertyCount}), minimum {minimum}',
    // nb: 'For få variabler definert ({propertyCount}), minst {minimum} er forventet',
    // 'pt-PT': 'Poucas propriedades definidas ({propertyCount}), mínimo {minimum}',
    // 'sv-SE': 'För få parametrar ({propertyCount}), ska minst vara {minimum}',
    // 'zh-CN': '字段数过少 ({propertyCount}), 最少 {minimum} 个'
  },
  multipleOf: {
    de: 'sollte ein Vielfaches von {{=e.schema}} sein',
    en: 'should be a multiple of {{=e.schema}}',
    hu: 'a többszöröse kell legyen a következő számnak: {{=e.schema}}',
    it: 'dovrebbe essere un multiplo di {{=e.schema}}',
    pl: 'powinien być wielokrotnością {{=e.schema}}',
    ru: 'должен быть кратным {{=e.schema}}',
    ja: '{{=e.schema}}の倍数でなければいけない'
    // en: 'Value {value} is not a multiple of {multipleOf}',
    // fr: 'La valeur {value} n\'est pas un multiple de {multipleOf}',
    // nb: 'Verdien {value} er ikke et multiplum av {multipleOf}',
    // 'pt-PT': 'O valor {value} não é um múltiplo de {multipleOf}',
    // 'sv-SE': 'Värdet {value} är inte en multipel av {multipleOf}',
    // 'zh-CN': '数值 {value} 不是 {multipleOf} 的倍数'
  },
  not: {
    de: 'sollte dem in "not" angegebenen Schema widersprechen',
    en: 'should not be valid according to schema in "not"',
    hu: 'nem lehet érvényes a "not" alaknak megfelelően',
    it: 'non dovrebbe essere valida in base allo schema di "non"',
    pl: 'nie powinien pasować do wzoru z sekcji "not"',
    ru: 'должен не соответствовать схеме в "not"',
    ja: '"not"のスキーマに従って有効としてはいけない'
    // en: 'Data matches schema from "not"',
    // fr: 'La donnée correspond au schema de "not"',
    // nb: 'Data samsvarer med skjema fra "not"',
    // 'pt-PT': 'Os dados correspondem a um esquema de "not"',
    // 'sv-SE': 'Värdet matchar schemat från "not"',
    // 'zh-CN': '数据不应匹配以下模式 ("not")'
  },
  oneOf: {
    de: 'sollte genau einem der Schemata in "oneOf" entsprechen',
    en: 'should match exactly one schema in "oneOf"',
    hu: 'meg kell feleljen pontosan egy "anyOf" alaknak',
    it: 'dovrebbe corrispondere esattamente uno schema in "oneOf"',
    pl: 'powinien pasować do jednego wzoru z sekcji {{=e.schema}}',
    ru: 'должен соответствовать в точности одной схемe в "oneOf"',
    ja: '"oneOf"のスキーマと完全に一致しなくてはいけない'
    // en: 'Data does not match any schemas from "oneOf"',
    // fr: 'La donnée ne correspond à aucun schema de  "oneOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "oneOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "oneOf"',
    // 'sv-SE': 'Värdet matchar inget av schemana "oneOf"',
    // 'zh-CN': '数据不符合以下任何一个模式 ("oneOf")'
  },
  pattern: {
    de: 'sollte diesem Muster entsprechen: "{{=e.params.escaped}}"',
    en: 'should match pattern "{{=e.params.escaped}}"',
    hu: 'meg kell feleljen a következő mintának: "{{=e.params.escaped}}"',
    it: 'deve corrispondere al modello "{{=e.params.escaped}}"',
    pl: 'powinien zgadzać się ze wzorem "{{=e.params.escaped}}"',
    ru: 'должен соответствовать образцу "{{=e.params.escaped}}"',
    ja: '"{{=e.params.escaped}}"のパターンと一致しなければいけない'
    // en: 'String does not match pattern: {pattern}',
    // fr: 'Le texte ne correspond pas au motif: {pattern}',
    // nb: 'Strengen samsvarer ikke med regulært uttrykk: {pattern}',
    // 'pt-PT': 'A \'string\' não corresponde ao modelo: {pattern}',
    // 'sv-SE': 'Texten har fel format: {pattern}',
    // 'zh-CN': '字符串不匹配模式: {pattern}'
  },
  required: {
    de: 'sollte das erforderliche Attribut {{=e.params.missingProperty}} enthalten',
    en: 'should have required property {{=e.params.missingProperty}}',
    hu: 'kell legyen {{=e.params.missingProperty}} tulajdonsága',
    it: 'dovrebbe avere attributo richiesta {{=e.params.missingProperty}}',
    pl: 'powinien zawierać wymagane pole {{=e.params.missingProperty}}',
    ru: 'должен иметь обязательное поле {{=e.params.missingProperty}}',
    ja: '必要なプロパティ{{=e.params.missingProperty}}がなければいけない'
    // en: 'Missing required property: {key}',
    // fr: 'Propriété requise manquante: {key}',
    // nb: 'Mangler obligatorisk variabel: {key}',
    // 'pt-PT': 'Propriedade necessária em falta: {key}',
    // 'sv-SE': 'Egenskap saknas: {key}',
    // 'zh-CN': '缺少必要字段: {key}'
  },
  type: {
    de: 'sollte sein: {{=e.params.type}}',
    en: 'should be {{=e.params.type}}',
    hu: '{{=e.params.type}} kell legyen',
    it: 'dovrebbe essere {{=e.params.type}}',
    pl: 'powinien być {{=e.params.type}}',
    ru: 'должен быть {{=e.params.type}}',
    ja: '{{=e.params.type}}でなければいけない'
    // en: 'Invalid type: {type} (expected {expected})',
    // fr: 'Type invalide: {type} ({expected} attendu)',
    // nb: 'Ugyldig type: {type} (forventet {expected})',
    // 'pt-PT': 'Tipo inválido: {type} (esperava {expected})',
    // 'sv-SE': 'Otillåten typ: {type} (skall vara {expected})',
    // 'zh-CN': '当前类型 {type} 不符合期望的类型 {expected}'
  },
  uniqueItems: {
    de: 'sollte keine Duplikate enthalten (Elemente #{{=e.params.j}} und #{{=e.params.i}} sind gleich)',
    en: 'should not have duplicate items (items ## {{=e.params.j}} and {{=e.params.i}} are identical)',
    hu: 'nem lehetnek azonos elemei ({{=e.params.j}} és {{=e.params.i}} elemek azonosak)',
    it: 'non dovrebbe avere elementi duplicati (elementi ## {{=e.params.j}} e {{=e.params.i}} sono uguali)',
    pl: 'nie powinien zawierać elementów które się powtarzają (elementy {{=e.params.j}} i {{=e.params.i}} są identyczne)',
    ru: 'не должен иметь повторяющихся элементов (элементы {{=e.params.j}} и {{=e.params.i}} идентичны)',
    ja: '重複するアイテムがあってはいけない（{{=e.params.j}}と{{=e.params.i}}は同じである）'
    // en: 'Array items are not unique (indices {match1} and {match2})',
    // fr: 'Des éléments du tableau ne sont pas uniques (indices {match1} et {match2})',
    // nb: 'Elementene er ikke unike (indeks {match1} og {match2} er like)',
    // 'pt-PT': 'Os itens da \'array\' não são únicos (índices {match1} e {match2})',
    // 'sv-SE': 'Listvärden är inte unika (index {match1} och {match2})',
    // 'zh-CN': '数组元素不唯一 (下标 {match1} 和 {match2})'
  },
};
