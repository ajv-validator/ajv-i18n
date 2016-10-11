'use strict';

module.exports = {
  // supported locales
  _locales: ['de', 'en', 'hu', 'it', 'ja', 'pl', 'ru', 'es', 'sv', 'zh-CN'],

  // shared defines
  _defs: {
    n: '{{var n = e.params.limit;}}',
    mPlural: { // plural for the words item (element) and character
      en: '{{? n!=1 }}s{{?}}',
      de: '{{? n!=1 }}e{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      pl: '{{? n==1 }}u{{??}}ów{{?}}',
      ru: '{{? n>=2 && n<=4 }}а{{?? n!=1 }}ов{{?}}',
      es: '{{? n!=1 }}s{{?}}', //only item (element)
      sv: '{{? n!=1 }}er{{?}}'
    },
    propPlural: { // plural for the word property (attribute)
      en: '{{? n==1 }}y{{??}}ies{{?}}',
      de: '{{? n!=1 }}e{{?}}',
      hu: '{{? n!=1 }}i{{?}}',
      it: '{{? n==1 }}o{{??}}i{{?}}',
      pl: '{{? n==1 }}e{{??}}a{{?}}',
      ru: '{{? n==1 }}е{{?? n>=2 && n<=4 }}я{{??}}ей{{?}}',
      es: '{{? n!=1 }}es{{?}}',
      sv: '{{? n!=1 }}er{{?}}'
    }
  },

  // error messages
  $ref: {
    en: 'can\\\'t resolve reference {{=e.params.ref}}',
    de: 'kann die Referenz {{=e.params.ref}} nicht auflösen',
    hu: 'nem sikerült feloldani a hivatkozást {{=e.params.ref}}',
    it: 'non può risolvere il riferimento {{=e.params.ref}}',
    pl: 'nie można znaleść schematu {{=e.params.ref}}',
    ru: 'не найдена схема {{=e.params.ref}}',
    ja: '{{=e.params.ref}}のスキーマを見つけることができない',
    es: 'no se puede resolver la referencia {{=e.params.ref}}',
    sv: 'kan inte lösa referens {{=e.params.ref}}',
    'zh-CN': '无法找到引用{{=e.params.ref}}'
  },
  additionalItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Element{{#def.mPlural}} enthalten',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}以上あってはいけない',
    es: '{{#def.n}}no debe tener más de {{=n}} elemento{{#def.mPlural}}',
    sv: '{{#def.n}}borde ha fler än {{=n}} sak{{#def.mPlural}}',
    'zh-CN': '{{#def.n}}不允许超过{{=n}}个元素'
    // en: 'Additional items not allowed',
    // fr: 'Éléments additionnels non autorisés',
    // nb: 'Tillegselementer er ikke tillatt',
    // 'pt-PT': 'Não são permitidos itens adicionais',
    // 'sv-SE': 'Extra värden är inte tillåtna',
  },
  additionalProperties: {
    en: 'should not have additional properties',
    de: 'sollte keine zusätzlichen Attribute haben',
    hu: 'nem lehetnek további elemei',
    it: 'non dovrebbe avere attributi aggiuntive',
    pl: 'nie powinien zawierać dodatkowych pól',
    ru: 'не должно иметь дополнительные поля',
    ja: '追加してはいけない',
    es: 'no debe tener propiedades adicionales',
    sv: 'borde inte ha fler egenskaper',
    'zh-CN': '不允许有额外的属性'
    // en: 'Additional properties not allowed',
    // fr: 'Propriétés additionnelles non autorisées',
    // nb: 'Tilleggsvariabler er ikke tillatt',
    // 'pt-PT': 'Não são permitidas propriedades adicionais',
    // 'sv-SE': 'Extra parametrar är inte tillåtna',
    // 'zh-CN': '不允许多余的字段'
  },
  anyOf: {
    en: 'should match some schema in "anyOf"',
    de: 'sollte einem der Schemata in "anyOf" entsprechen',
    hu: 'meg kell feleljen legalább egy "anyOf" alaknak',
    it: 'deve corrispondere qualche schema in "anyOf"',
    pl: 'powinien pasować do wzoru z sekcji "anyOf"',
    ru: 'должно соответствовать одной их схем в "anyOf"',
    ja: '"anyOf"のスキーマとマッチしなくてはいけない',
    es: 'debe coincidir con algún esquema en "anyOf"',
    sv: 'borde matcha något schema i "anyOf"',
    'zh-CN': '数据应为 anyOf 所指定的其中一个'
    // en: 'Data does not match any schemas from "anyOf"',
    // fr: 'La donnée ne correspond à aucun schema de "anyOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "anyOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "anyOf"',
    // 'sv-SE': 'Värdet matchar inget av schemana "anyOf"',
    // 'zh-CN': '数据不符合以下任何一个模式 ("anyOf")'
  },
  dependencies: {
    _defs: {
      n: '{{var n = e.params.depsCount;}}'
    },
    en: '{{#def.n}}should have propert{{#def.propPlural}} {{=e.params.deps}} when property {{=e.params.property}} is present',
    de: '{{#def.n}}sollte Attribut{{#def.propPlural}} {{=e.params.deps}} aufweisen, wenn Attribut {{=e.params.property}} gesetzt ist',
    hu: '{{#def.n}}-nak kell legyen{{? n>1 }}ek{{?}} a következő tulajdonsága{{#def.propPlural}}: {{=e.params.deps}}, ha van {{=e.params.property}} tulajdonsága',
    it: '{{#def.n}}dovrebbe avere attribut{{#def.propPlural}} {{=e.params.deps}} quando attributo {{=e.params.property}} è presente',
    pl: '{{#def.n}}powinien zawierać pol{{#def.propPlural}} {{=e.params.deps}} kiedy pole {{=e.params.property}} jest obecne',
    ru: '{{#def.n}}должно иметь пол{{? n==1 }}е{{??}}я{{?}} {{=e.params.deps}}, когда присутствует поле {{=e.params.property}}',
    ja: '{{=e.params.property}}がある場合、{{#def.n}}は{{=e.params.deps}}をつけなければいけない',
    es: '{{#def.n}}debe contener la{{#def.mPlural}} propiedad{{#def.propPlural}} {{=e.params.deps}} cuando la propiedad {{=e.params.property}} se encuentra presente',
    sv: '{{#def.n}}borde ha egenskap{{#def.propPlural}} {{=e.params.deps}} när egenskap {{=e.params.property}} finns tillgängligt',
    'zh-CN': '{{#def.n}}应当拥有属性{{=e.params.property}}的依赖属性{{=e.params.deps}}'
    // en: 'Dependency failed - key must exist: {missing} (due to key: {key})',
    // fr: 'Echec de dépendance - la clé doit exister: {missing} (du à la clé: {key})',
    // nb: 'Variabelen {missing} må være definert (på grunn av følgende variabel: {key})',
    // 'pt-PT': 'Uma dependência falhou - tem de existir uma chave: {missing} (devido à chave: {key})',
    // 'sv-SE': 'Saknar beroende - saknad nyckel: {missing} (beroende nyckel: {key})',
    // 'zh-CN': '依赖失败 - 缺少键 {missing} (来自键: {key})'
  },
  enum: {
    en: 'should be equal to one of predefined values',
    de: 'sollte einem der vorgegebenen Werte entsprechen',
    hu: 'egyenlő kell legyen valamely előre meghatározott értékkel',
    it: 'dovrebbe essere pari ad uno dei valori predefiniti',
    pl: 'powinien być równy jednej z predefiniowanych wartości',
    ru: 'должно быть равен одному из значений в "enum"',
    ja: '事前に定義された値のいずれかに等しくなければいけない',
    es: 'deber ser igual a uno de los valores predefinidos',
    sv: 'borde vara ekvivalent med en av dess fördefinierade värden',
    'zh-CN': '应当是预设定的枚举值之一'
    // en: 'No enum match for: {value}',
    // fr: 'Aucune valeur correspondante (enum) pour: {value}',
    // nb: 'Ingen samsvarende enum verdi for: {value}',
    // 'pt-PT': 'Nenhuma correspondência \'enum\' para: {value}',
    // 'sv-SE': 'Otillåtet värde: {value}',
    // 'zh-CN': '{value} 不是有效的枚举类型取值'
  },
  format: {
    en: 'should match format "{{=e.params.format}}"',
    de: 'sollte diesem Format entsprechen: "{{=e.params.format}}"',
    hu: 'meg kell feleljen a következő formátumnak: "{{=e.params.format}}"',
    it: 'deve corrispondere formato "{{=e.params.format}}"',
    pl: 'powinien zgadzać się z formatem "{{=e.params.format}}"',
    ru: 'должно соответствовать формату "{{=e.params.format}}"',
    ja: '"{{=e.params.format}}"形式に揃えなければいけない',
    es: 'debe coincidir con el formato "{{=e.params.format}}"',
    sv: 'borde matcha formatet "{{=e.params.format}}"',
    'zh-CN': '应当匹配格式 "{{=e.params.format}}"'
    // en: 'Format validation failed ({message})',
    // fr: 'Échec de validation du format ({message})',
    // nb: 'Formatteringen stemmer ikke ({message})',
    // 'pt-PT': 'A validação do formato falhou ({message})',
    // 'sv-SE': 'Misslyckad validering ({message})',
    // 'zh-CN': '格式校验失败 ({message})'
  },
  maximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    de: '{{#def.c}}sollte {{=cond}} sein',
    hu: '{{#def.c}}kell legyen {{=cond}}',
    it: '{{#def.c}}dovrebbe essere {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    ja: '{{#def.c}}{{=cond}}でなければいけない',
    es: '{{#def.c}}debe ser {{=cond}}',
    sv: '{{#def.c}}borde vara {{=cond}}',
    'zh-CN': '{{#def.c}}应当为 {{=cond}}'
    // en: 'Value {value} is greater than maximum {maximum}',
    // fr: 'La valeur {value} est supérieure au maximum {maximum}',
    // nb: 'Verdien {value} er større enn maksimalverdi {maximum}',
    // 'pt-PT': 'O valor {value} é maior que o máximo {maximum}',
    // 'sv-SE': 'Värdet {value} får inte vara större än {maximum}',
    // 'zh-CN': '数值 {value} is greater 大于最大值 {maximum}'
  },
  minimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    de: '{{#def.c}}sollte {{=cond}} sein',
    hu: '{{#def.c}}kell legyen {{=cond}}',
    it: '{{#def.c}}dovrebbe essere {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    ja: '{{#def.c}}{{=cond}}でなければいけない',
    es: '{{#def.c}}debe ser {{=cond}}',
    sv: '{{#def.c}}borde vara {{=cond}}',
    'zh-CN': '{{#def.c}}应当为 {{=cond}}'

    // en: 'Value {value} is less than minimum {minimum}',
    // fr: 'La valeur {value} est inférieure au minimum {minimum}',
    // nb: 'Verdien {value} er mindre enn minsteverdi {minimum}',
    // 'pt-PT': 'O valor {value} é menor que o mínimo {minimum}',
    // 'sv-SE': 'Värdet {value} får inte vara mindre än {minimum}',
  },
  // exclusiveMaximum: {

  // },
  // exclusiveMinimum: {

  // },
  maxItems: {
    en: '{{#def.n}}should not have more than {{=n}} item{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Element{{#def.mPlural}} haben',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere più di {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć więcej niż {{=n}} element{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} элемент{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上であってはいけない',
    es: '{{#def.n}}no debe contener más de {{=n}} elemento{{#def.mPlural}}',
    sv: '{{#def.n}}borde inte ha fler än {{=n}} sak{{#def.mPlural}}',
    'zh-CN': '{{#def.n}}不应多于 {{=n}} 个项'
    // en: 'Array is too long ({length}), maximum {maximum}',
    // fr: 'Le tableau est trop long ({length}), maximum {maximum}',
    // nb: 'Listen er for lang ({length} elementer), maksimalt {maximum}',
    // 'pt-PT': 'A \'array\' é muito longa ({length}), máximo {maximum}',
    // 'sv-SE': 'Listan är för lång ({length}), ska högst vara {maximum}',
  },
  minItems: {
    en: '{{#def.n}}should not have less than {{=n}} item{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht weniger als {{=n}} Element{{#def.mPlural}} haben',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} eleme',
    it: '{{#def.n}}non dovrebbe avere meno di {{=n}} element{{#def.mPlural}}',
    pl: '{{#def.n}}nie powinien mieć mniej niż {{=n}} element{{#def.mPlural}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} элемент{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下であってはいけない',
    es: '{{#def.n}}no debe contener menos de {{=n}} elemento{{#def.mPlural}}',
    sv: '{{#def.n}}borde inte ha färre än {{=n}} sak{{#def.mPlural}}',
    'zh-CN': '{{#def.n}}不应少于 {{=n}} 个项'
    // en: 'Array is too short ({length}), minimum {minimum}',
    // fr: 'Le tableau est trop court ({length}), minimum {minimum}',
    // nb: 'Listen er for kort ({length} elementer), minst {minimum}',
    // 'pt-PT': 'A \'array\' é muito curta ({length}), mínimo {minimum}',
    // 'sv-SE': 'Listan är för kort ({length}), ska minst vara {minimum}',
  },
  maxLength: {
    en: '{{#def.n}}should not be longer than {{=n}} character{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht länger als {{=n}} Zeichen sein',
    hu: '{{#def.n}}nem lehet hosszabb, mint {{=n}} szimbólum',
    it: '{{#def.n}}non dovrebbe essere più lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    pl: '{{#def.n}}nie powinien być dłuższy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    ru: '{{#def.n}}должно быть не длиннее, чем {{=n}} символ{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}文字以上であってはいけない',
    es: '{{#def.n}}no debe contener más de {{=n}} caracter{{? n!=1 }}es{{?}}',
    sv: '{{#def.n}}borde inte vara längre än {{=n}} tecken',
    'zh-CN': '{{#def.n}}不应多于 {{=n}} 个字符'
    // en: 'String is too long ({length} chars), maximum {maximum}',
    // fr: 'Le texte est trop long ({length} carac.), maximum {maximum}',
    // nb: 'Strengen er for lang ({length} tegn), maksimalt {maximum}',
    // 'pt-PT': 'A \'string\' é muito longa ({length} caracteres), máximo {maximum}',
    // 'sv-SE': 'Texten är för lång ({length} tecken), ska vara högst {maximum}',
  },
  minLength: {
    en: '{{#def.n}}should not be shorter than {{=n}} character{{#def.mPlural}}',
    de: '{{#def.n}}sollte nicht kürzer als {{=n}} Zeichen sein',
    hu: '{{#def.n}}nem lehet rövidebb, mint {{=n}} szimbólum',
    it: '{{#def.n}}non dovrebbe essere meno lungo di {{=n}} caratter{{? n==1 }}e{{??}}i{{?}}',
    pl: '{{#def.n}}nie powinien być krótszy niż {{=n}} znak{{? n!=1 }}ów{{?}}',
    ru: '{{#def.n}}должно быть не короче, чем {{=n}} символ{{#def.mPlural}}',
    ja: '{{#def.n}}は{{=n}}文字以下であってはいけない',
    es: '{{#def.n}}no debe contener menos de {{=n}} caracter{{? n!=1 }}es{{?}}',
    sv: '{{#def.n}}borde inte vara kortare än {{=n}} tecken',
    'zh-CN': '{{#def.n}}不应少于 {{=n}} 个字符'
    // en: 'String is too short ({length} chars), minimum {minimum}',
    // fr: 'Le texte est trop court ({length} carac.), minimum {minimum}',
    // nb: 'Strengen er for kort ({length} tegn), minst {minimum}',
    // 'pt-PT': 'A \'string\' é muito curta ({length} caracteres), mínimo {minimum}',
    // 'sv-SE': 'Texten är för kort ({length} tecken), ska vara minst {minimum} tecken',
  },
  maxProperties: {
    en: '{{#def.n}}should not have more than {{=n}} propert{{#def.propPlural}}',
    de: '{{#def.n}}sollte nicht mehr als {{=n}} Attribut{{#def.propPlural}} haben',
    hu: '{{#def.n}}nem lehet több, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non dovrebbe avere più {{=n}} attribut{{#def.propPlural}}',
    pl: '{{#def.n}}nie powinien zawierać więcej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    ru: '{{#def.n}}должно иметь не более, чем {{=n}} пол{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以上のプロパティを有してはいけない',
    es: '{{#def.n}}no debe contener más de {{=n}} propiedad{{#def.propPlural}}',
    sv: '{{#def.n}}borde inte ha fler än {{=n}} egenskap{{#def.propPlural}}',
    'zh-CN': '{{#def.n}}不应有多于 {{=n}} 个属性'
    // en: 'Too many properties defined ({propertyCount}), maximum {maximum}',
    // fr: 'Trop de propriétés définies ({propertyCount}), maximum {maximum}',
    // nb: 'For mange variabler definert ({propertyCount}), makismalt {maximum} er tillatt',
    // 'pt-PT': 'Muitas propriedades definidas ({propertyCount}), máximo {maximum}',
    // 'sv-SE': 'För många parametrar ({propertyCount}), får högst vara {maximum}',
  },
  minProperties: {
    en: '{{#def.n}}should not have less than {{=n}} propert{{#def.propPlural}}',
    de: '{{#def.n}}sollte nicht weniger als {{=n}} Attribut{{#def.propPlural}} haben',
    hu: '{{#def.n}}nem lehet kevesebb, mint {{=n}} tulajdonsága',
    it: '{{#def.n}}non dovrebbe avere meno {{=n}} attribut{{#def.propPlural}}',
    pl: '{{#def.n}}nie powinien zawierać mniej niż {{=n}} {{? n==1 }}pole{{??}}pól{{?}}',
    ru: '{{#def.n}}должно иметь не менее, чем {{=n}} пол{{#def.propPlural}}',
    ja: '{{#def.n}}は{{=n}}個以下のプロパティを有してはいけない',
    es: '{{#def.n}}no debe contener menos de {{=n}} propiedad{{#def.propPlural}}',
    sv: '{{#def.n}}borde inte ha färre än {{=n}} egenskap{{#def.propPlural}}',
    'zh-CN': '{{#def.n}}不应有少于 {{=n}} 个属性'
    // en: 'Too few properties defined ({propertyCount}), minimum {minimum}',
    // fr: 'Pas assez de propriétés définies ({propertyCount}), minimum {minimum}',
    // nb: 'For få variabler definert ({propertyCount}), minst {minimum} er forventet',
    // 'pt-PT': 'Poucas propriedades definidas ({propertyCount}), mínimo {minimum}',
    // 'sv-SE': 'För få parametrar ({propertyCount}), ska minst vara {minimum}',
  },
  multipleOf: {
    en: 'should be a multiple of {{=e.params.multipleOf}}',
    de: 'sollte ein Vielfaches von {{=e.params.multipleOf}} sein',
    hu: 'a többszöröse kell legyen a következő számnak: {{=e.params.multipleOf}}',
    it: 'dovrebbe essere un multiplo di {{=e.params.multipleOf}}',
    pl: 'powinien być wielokrotnością {{=e.params.multipleOf}}',
    ru: 'должно быть кратным {{=e.params.multipleOf}}',
    ja: '{{=e.params.multipleOf}}の倍数でなければいけない',
    es: 'debe ser múltiplo de {{=e.params.multipleOf}}',
    sv: 'borde vara en multipel av {{=e.params.multipleOf}}',
    'zh-CN': '应当是 {{=e.params.multipleOf}} 的整数倍'
    // en: 'Value {value} is not a multiple of {multipleOf}',
    // fr: 'La valeur {value} n\'est pas un multiple de {multipleOf}',
    // nb: 'Verdien {value} er ikke et multiplum av {multipleOf}',
    // 'pt-PT': 'O valor {value} não é um múltiplo de {multipleOf}',
    // 'sv-SE': 'Värdet {value} är inte en multipel av {multipleOf}',
  },
  not: {
    en: 'should not be valid according to schema in "not"',
    de: 'sollte dem in "not" angegebenen Schema widersprechen',
    hu: 'nem lehet érvényes a "not" alaknak megfelelően',
    it: 'non dovrebbe essere valida in base allo schema di "non"',
    pl: 'nie powinien pasować do wzoru z sekcji "not"',
    ru: 'должно не соответствовать схеме в "not"',
    ja: '"not"のスキーマに従って有効としてはいけない',
    es: 'no debe ser válido según el esquema en "not"',
    sv: 'borde inte vara giltigt enligt schema i "not"',
    'zh-CN': '不应当匹配 "not" schema'

    // en: 'Data matches schema from "not"',
    // fr: 'La donnée correspond au schema de "not"',
    // nb: 'Data samsvarer med skjema fra "not"',
    // 'pt-PT': 'Os dados correspondem a um esquema de "not"',
    // 'sv-SE': 'Värdet matchar schemat från "not"',
    // 'zh-CN': '数据不应匹配以下模式 ("not")'
  },
  oneOf: {
    en: 'should match exactly one schema in "oneOf"',
    de: 'sollte genau einem der Schemata in "oneOf" entsprechen',
    hu: 'meg kell feleljen pontosan egy "anyOf" alaknak',
    it: 'dovrebbe corrispondere esattamente uno schema in "oneOf"',
    pl: 'powinien pasować do jednego wzoru z sekcji "oneOf"',
    ru: 'должно соответствовать в точности одной схемe в "oneOf"',
    ja: '"oneOf"のスキーマと完全に一致しなくてはいけない',
    es: 'debe coincidir con un solo esquema en "oneOf"',
    sv: 'borde matcha exakt ett schema i "oneOf"',
    'zh-CN': '只能匹配一个 "oneOf" 中的 schema'

    // en: 'Data does not match any schemas from "oneOf"',
    // fr: 'La donnée ne correspond à aucun schema de  "oneOf"',
    // nb: 'Data samsvarer ikke med noe skjema fra "oneOf"',
    // 'pt-PT': 'Os dados não correspondem a nenhum esquema de "oneOf"',
    // 'sv-SE': 'Värdet matchar inget av schemana "oneOf"',
  },
  pattern: {
    en: 'should match pattern "{{=e.params.pattern}}"',
    de: 'sollte diesem Muster entsprechen: "{{=e.params.pattern}}"',
    hu: 'meg kell feleljen a következő mintának: "{{=e.params.pattern}}"',
    it: 'deve corrispondere al modello "{{=e.params.pattern}}"',
    pl: 'powinien zgadzać się ze wzorem "{{=e.params.pattern}}"',
    ru: 'должно соответствовать образцу "{{=e.params.pattern}}"',
    ja: '"{{=e.params.pattern}}"のパターンと一致しなければいけない',
    es: 'debe coincidir con el patron "{{=e.params.pattern}}"',
    sv: 'borde matcha mönstret "{{=e.params.pattern}}"',
    'zh-CN': '应当匹配模式 "{{=e.params.pattern}}"'

    // en: 'String does not match pattern: {pattern}',
    // fr: 'Le texte ne correspond pas au motif: {pattern}',
    // nb: 'Strengen samsvarer ikke med regulært uttrykk: {pattern}',
    // 'pt-PT': 'A \'string\' não corresponde ao modelo: {pattern}',
    // 'sv-SE': 'Texten har fel format: {pattern}',
    // 'zh-CN': '字符串不匹配模式: {pattern}'
  },
  required: {
    en: 'should have required property {{=e.params.missingProperty}}',
    de: 'sollte das erforderliche Attribut {{=e.params.missingProperty}} enthalten',
    hu: 'kell legyen {{=e.params.missingProperty}} tulajdonsága',
    it: 'dovrebbe avere attributo richiesta {{=e.params.missingProperty}}',
    pl: 'powinien zawierać wymagane pole {{=e.params.missingProperty}}',
    ru: 'должно иметь обязательное поле {{=e.params.missingProperty}}',
    ja: '必要なプロパティ{{=e.params.missingProperty}}がなければいけない',
    es: 'debe tener la propiedad requerida {{=e.params.missingProperty}}',
    sv: 'borde ha den nödvändiga egenskapen {{=e.params.missingProperty}}',
    'zh-CN': '应当有必需属性 {{=e.params.missingProperty}}'

    // es: 'la propiedad {{=e.params.missingProperty}} es requerida'
    // en: 'Missing required property: {key}',
    // fr: 'Propriété requise manquante: {key}',
    // nb: 'Mangler obligatorisk variabel: {key}',
    // 'pt-PT': 'Propriedade necessária em falta: {key}',
    // 'sv-SE': 'Egenskap saknas: {key}',
  },
  type: {
    en: 'should be {{=e.params.type}}',
    de: 'sollte sein: {{=e.params.type}}',
    hu: '{{=e.params.type}} kell legyen',
    it: 'dovrebbe essere {{=e.params.type}}',
    pl: 'powinien być {{=e.params.type}}',
    ru: 'должно быть {{=e.params.type}}',
    ja: '{{=e.params.type}}でなければいけない',
    es: 'debe ser {{=e.params.type}}',
    sv: 'borde vara {{=e.params.type}}',
    'zh-CN': '应当是 {{=e.params.type}} 类型'

    // en: 'Invalid type: {type} (expected {expected})',
    // fr: 'Type invalide: {type} ({expected} attendu)',
    // nb: 'Ugyldig type: {type} (forventet {expected})',
    // 'pt-PT': 'Tipo inválido: {type} (esperava {expected})',
    // 'sv-SE': 'Otillåten typ: {type} (skall vara {expected})',
  },
  uniqueItems: {
    en: 'should not have duplicate items (items ## {{=e.params.j}} and {{=e.params.i}} are identical)',
    de: 'sollte keine Duplikate enthalten (Elemente #{{=e.params.j}} und #{{=e.params.i}} sind gleich)',
    hu: 'nem lehetnek azonos elemei ({{=e.params.j}} és {{=e.params.i}} elemek azonosak)',
    it: 'non dovrebbe avere elementi duplicati (elementi ## {{=e.params.j}} e {{=e.params.i}} sono uguali)',
    pl: 'nie powinien zawierać elementów które się powtarzają (elementy {{=e.params.j}} i {{=e.params.i}} są identyczne)',
    ru: 'не должно иметь повторяющихся элементов (элементы {{=e.params.j}} и {{=e.params.i}} идентичны)',
    ja: '重複するアイテムがあってはいけない（{{=e.params.j}}と{{=e.params.i}}は同じである）',
    es: 'no debe contener elementos duplicados, (los elementos ## {{=e.params.j}} y {{=e.params.i}} son idénticos)',
    sv: 'borde inte ha duplicerade saker (sakerna ## {{=e.params.j}} och {{=e.params.i}} är identiska)',
    'zh-CN': '不应当含有重复项 (第 {{=e.params.j}} 项与第 {{=e.params.i}} 项是重复的)'

    // en: 'Array items are not unique (indices {match1} and {match2})',
    // fr: 'Des éléments du tableau ne sont pas uniques (indices {match1} et {match2})',
    // nb: 'Elementene er ikke unike (indeks {match1} og {match2} er like)',
    // 'pt-PT': 'Os itens da \'array\' não são únicos (índices {match1} e {match2})',
    // 'sv-SE': 'Listvärden är inte unika (index {match1} och {match2})'
  },
  custom: {
    en: 'should pass "{{=e.keyword}}" keyword validation',
    ru: 'должно соответствовать правилу "{{=e.keyword}}"',
    pl: 'powinien przejść walidację "{{=e.keyword}}"',
    es: 'debe pasar la validación de palabra clave "{{=e.keyword}}"',
    sv: 'bör passera "{{=e.keyword}}" nyckelord validering',
    'zh-CN': '应当通过 "{{=e.keyword}} 关键词校验"'
  },
  patternGroups: {
    en: '{{#def.n}}should have {{=e.params.reason}} {{=n}} propert{{#def.propPlural}} matching pattern "{{=e.params.pattern}}"',
    ru: '{{#def.n}}должно иметь {{=e.params.reason}} {{=n}} пол{{#def.propPlural}}, соответствующих образцу "{{=e.params.pattern}}"',
    pl: '{{#def.n}}powinien mieć {{=e.params.reason}} {{=n}} pol{{#def.propPlural}} pasujące do wzorca "{{=e.params.pattern}}"',
    es: '{{#def.n}}debe tener {{=e.params.reason}} {{=n}} propiedad{{#def.propPlural}} coincidente{{#def.mPlural}} con el patrón "{{=e.params.pattern}}"',
    sv: '{{#def.n}}bör ha {{=e.params.reason}} {{=n}} egenskap{{#def.propPlural}} som matchar mönstret "{{=e.params.pattern}}"',
    'zh-CN': '{{#def.n}}应当有 {{=n}} 个 {{=e.params.reason}} 属性满足模式 {{=e.params.pattern}}'
  },
  patternRequired: {
    en: 'should have property matching pattern "{{=e.params.missingPattern}}"',
    ru: 'должно иметь поле, соответствующее образцу "{{=e.params.missingPattern}}"',
    pl: 'powinien mieć pole pasujące do wzorca "{{=e.params.missingPattern}}"',
    es: 'la propiedad debe coincidir con el patrón "{{=e.params.missingPattern}}"',
    sv: 'bör ha en egenskap som matchar mönstret "{{=e.params.missingPattern}}"',
    'zh-CN': '应当有属性匹配模式 {{=e.params.missingPattern}}'
  },
  switch: {
    en: 'should pass \"switch\" keyword validation, case {{=e.params.caseIndex}} fails',
    ru: 'должно соответствовать правилу {{=e.params.caseIndex}} в "switch"',
    pl: 'powinien przejść walidacje pola \"switch\", przypadek {{=e.params.caseIndex}} zawiódł',
    es: 'debe pasar la validación \"switch\" de palabra clave, el caso {{=e.params.caseIndex}} falló',
    sv: 'bör passera \"switch\" nyckelord validering, fallet {{=e.params.caseIndex}} misslyckas',
    'zh-CN': '由于 {{=e.params.caseIndex}} 失败，未通过 "switch" 校验, '
  },
  constant: {
    en: 'should be equal to constant',
    ru: 'должно быть равно заданному значению',
    pl: 'powinien być równy stałej',
    es: 'debe ser igual a la constante',
    sv: 'bör vara en konstant',
    'zh-CN': '应当等于常量'
  },
  formatMaximum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    es: '{{#def.c}}debe ser {{=cond}}',
    sv: '{{#def.c}}bör vara {{=cond}}',
    'zh-CN': '{{#def.c}}应当是 {{=cond}}'
  },
  formatMinimum: {
    _defs: {
      c: '{{var cond = e.params.comparison + " " + e.params.limit;}}'
    },
    en: '{{#def.c}}should be {{=cond}}',
    ru: '{{#def.c}}должно быть {{=cond}}',
    pl: '{{#def.c}}powinien być {{=cond}}',
    es: '{{#def.c}}debe ser {{=cond}}',
    sv: '{{#def.c}}bör vara {{=cond}}',
    'zh-CN': '{{#def.c}}应当是 {{=cond}}'
  },
  formatExclusiveMaximum : {
    en: 'formatExclusiveMaximum should be boolean',
    ru: 'formatExclusiveMaximum должно быть boolean',
    pl: 'formatExclusiveMaximum powinien być boolean',
    es: 'formatExclusiveMaximum debe ser booleano',
    sv: 'formatExclusiveMaximum bör vara en boolean',
    'zh-CN': 'formatExclusiveMaximum 应当是布尔值'
  },
  formatExclusiveMinimum : {
    en: 'formatExclusiveMinimum should be boolean',
    ru: 'formatExclusiveMinimum должно быть boolean',
    pl: 'formatExclusiveMinimum powinień być boolean',
    es: 'formatExclusiveMinimum debe ser booleano',
    sv: 'formatExclusiveMaximum bör vara en boolean',
    'zh-CN': 'formatExclusiveMinimum 应当是布尔值'
  }
};
