"use strict"

/**
 * When adding new locales, please maintain alphabetic ordering.
 * "en" should remain in the first position.
 * Tests will fail otherwise.
 */

module.exports = {
  // supported locales
  _locales: [
    "en",
    "ca",
    "cs",
    "de",
    "es",
    "fa",
    "fi",
    "fr",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "nb",
    "nl",
    "pl",
    "pt-BR",
    "ru",
    "sk",
    "sv",
    "th",
    "zh",
    "zh-TW",
  ],

  // shared defines
  _defs: {},

  // error messages
  _defaultMessage: {
    en: 'must pass "{{=e.keyword}}" keyword validation',
    ca: 'ha de passar la validació de la clau "{{=e.keyword}}"',
    cs: 'musí vyhovět "{{=e.keyword}}" validaci',
    de: 'muss die Validierung "{{=e.keyword}}" bestehen',
    es: 'debe pasar la validación de palabra clave "{{=e.keyword}}"',
    fa: '"{{=e.keyword}}" باید معتبر باشد',
    fi: 'täytyy läpäistä "{{=e.keyword}}" avainsanatarkistus',
    fr: 'doit être valide selon le critère "{{=e.keyword}}"',
    id: 'harus lulus validasi kata kunci "{{=e.keyword}}"',
    it: 'deve essere valido secondo il criterio "{{=e.keyword}}"',
    ko: '"{{=e.keyword}}"키워드 검사를 통과해야 합니다',
    nb: "må samsvare med valideringen for {{=e.keyword}}",
    nl: 'moet sleutelwoord validatie "{{=e.keyword}}" doorstaan',
    pl: 'powinien przejść walidację "{{=e.keyword}}"',
    "pt-BR": 'deve passar a validação da keyword "{{=e.keyword}}"',
    ru: 'должно соответствовать правилу "{{=e.keyword}}"',
    sk: 'musí splniť "{{=e.keyword}}" validáciu',
    sv: 'bör passera "{{=e.keyword}}" nyckelord validering',
    th: 'ต้องผ่านคีย์เวิร์ด "{{=e.keyword}}"',
    zh: '应当通过 "{{=e.keyword}} 关键词校验"',
    "zh-TW": '應該通過 "{{=e.keyword}} 關鍵詞檢驗"',
  },

  _type: {
    _defs: {
      t: "{{var t = e.params.type; var n = e.params.nullable ? '/null' : '';}}",
    },
    en: "{{#def.t}}must be {{=t+n}}",
    ca: "{{#def.t}}ha de ser del tipus {{=t+n}}",
    cs: "{{#def.t}}musí být {{=t+n}}",
    de: "{{#def.t}}muss sein: {{=t+n}}",
    es: "{{#def.t}}debe ser {{=t+n}}",
    fa: "{{#def.t}}باید {{=t+n}} باشد",
    fi: "{{#def.t}}täytyy olla {{=t+n}}",
    fr: "{{#def.t}}doit être de type {{=t+n}}",
    hu: "{{#def.t}}{{=t+n}} kell legyen",
    id: "{{#def.t}}harus berupa {{=t+n}}",
    it: "{{#def.t}}deve essere di tipo {{=t+n}}",
    ja: "{{#def.t}}{{=t+n}}でなければいけない",
    ko: "{{#def.t}}{{=t+n}}이여야 합니다",
    nb: '{{#def.t}}må være {{? t == "number" }}et tall{{?? t == "integer"}}et heltall{{?? t == "string"}}en streng{{?? t == "boolean"}}ja eller nei{{??}}{{=t}}{{?}}{{=n}}',
    nl: '{{#def.t}}moet een {{? t == "number" }}nummer{{?? t == "integer"}}geheel getal{{?? t == "string"}}tekenreeks{{?? t == "boolean"}}ja of nee waarde{{?}}{{=n}} ({{=t}}) bevatten',
    pl: "{{#def.t}}powinien być {{=t+n}}",
    "pt-BR":
      '{{#def.t}}deve ser {{? t == "number" }}um número{{?? t == "integer"}}um número inteiro{{?? t == "string"}}um texto{{?? t == "boolean"}}um booleano{{??}}{{=t}}{{?}}{{=n}}',
    ru: "{{#def.t}}должно быть {{=t+n}}",
    sk: "{{#def.t}}musí byť {{=t+n}}",
    sv: "{{#def.t}}borde vara {{=t+n}}",
    th: "{{#def.t}}ต้องเป็น {{=t+n}}",
    zh: "{{#def.t}}应当是 {{=t+n}} 类型",
    "zh-TW": "{{#def.t}}應該是 {{=t+n}} 類型",
  },

  type: {
    _keywords: ["elements", "values"],
    _type: true,
  },

  properties: {
    _type: true,
    additional: {
      en: "must NOT have additional properties",
      ca: "no ha de tenir propietats addicionals",
      cs: "nemůže mít další položky",
      de: "darf keine zusätzlichen Attribute haben",
      es: "no debe tener propiedades adicionales",
      fa: "نباید مورد اضافی داشته باشه",
      fi: "ei saa sisältää ylimääräisiä ominaisuuksia",
      fr: "ne doit pas contenir de propriétés additionnelles",
      hu: "nem lehetnek további elemei",
      id: "tidak boleh memiliki properti tambahan",
      it: "non deve avere attributi addizionali",
      ja: "追加してはいけない",
      ko: "추가적인 속성은 허용되지 않습니다",
      nb: "kan ikke ha flere egenskaper",
      nl: "mag geen extra eigenschappen bevatten",
      pl: "nie powinien zawierać dodatkowych pól",
      "pt-BR": "não deve ter propriedades adicionais",
      ru: "не должно иметь дополнительных полей",
      sk: "nemôže obsahovať ďalšie položky",
      sv: "borde inte ha fler egenskaper",
      th: "ต้องไม่มี property อื่นๆ นอกเหนีอจากที่กำหนดไว้",
      zh: "不允许有额外的属性",
      "zh-TW": "不可以有額外的屬性",
    },
    missing: {
      en: "must have property {{=e.params.missingProperty}}",
      ca: "ha de tenir la propietat requerida {{=e.params.missingProperty}}",
      cs: "musí obsahovat požadovanou položku {{=e.params.missingProperty}}",
      de: "muss das erforderliche Attribut {{=e.params.missingProperty}} enthalten",
      es: "debe tener la propiedad requerida {{=e.params.missingProperty}}",
      fa: "باید مورد {{=e.params.missingProperty}} را دارا باشد",
      fi: "täytyy sisältää ominaisuus {{=e.params.missingProperty}}",
      fr: "requiert la propriété {{=e.params.missingProperty}}",
      hu: "kell legyen {{=e.params.missingProperty}} tulajdonsága",
      id: "harus memiliki properti {{=e.params.missingProperty}}",
      it: "deve avere l'attributo obbligatorio {{=e.params.missingProperty}}",
      ja: "必要なプロパティ{{=e.params.missingProperty}}がなければいけない",
      ko: "{{=e.params.missingProperty}} 속성은 필수입니다",
      nb: "må ha den påkrevde egenskapen {{=e.params.missingProperty}}",
      nl: "moet de eigenschap {{=e.params.missingProperty}} bevatten",
      pl: "powinien zawierać wymagane pole {{=e.params.missingProperty}}",
      "pt-BR": "deve ter a propriedade obrigatória {{=e.params.missingProperty}}",
      ru: "должно иметь обязательное поле {{=e.params.missingProperty}}",
      sk: "musí obsahovať požadovanú položku {{=e.params.missingProperty}}",
      sv: "borde ha den nödvändiga egenskapen {{=e.params.missingProperty}}",
      th: "ต้องมี property {{=e.params.missingProperty}} ด้วย",
      zh: "应当有必需属性 {{=e.params.missingProperty}}",
      "zh-TW": "應該有必須屬性 {{=e.params.missingProperty}}",
    },
  },

  discriminator: {
    _type: true,
    tag: {
      en: 'tag "{{=e.params.tag}}" must be string',
      de: 'der Tag "{{=e.params.tag}}" muss eine Zeichenkette sein',
      fa: 'تگ "{{=e.params.tag}}" باید رشته باشد',
      fi: 'tunniste "{{=e.params.tag}}" täytyy olla merkkijono',
      it: 'il tag "{{=e.params.tag}}" deve essere di tipo stringa',
      ko: '"{{=e.params.tag}}"태그는 문자열이여야 합니다',
      nl: 'tag "{{=e.params.tag}}" moet een tekenreeks zijn',
      "pt-BR": 'a tag "{{=e.params.tag}}" deve ser uma string',
      ru: 'поле "{{=e.params.tag}}" должно быть строкой',
      th: 'tag "{{=e.params.tag}}" ต้องเป็น string',
      zh: '标签 "{{=e.params.tag}}" 的类型必须为字符串',
      "zh-TW": '標籤 "{{=e.params.tag}}" 的類型必須是字串',
    },
    mapping: {
      en: 'value of tag "{{=e.params.tag}}" must be in mapping',
      de: 'der Wert vom Tag "{{=e.params.tag}}" muss im Mapping enthalten sein',
      fa: 'مقدار تگ "{{=e.params.tag}}"  باید در الگو موجود باشد',
      fi: 'tunnisteen arvon "{{=e.params.tag}}" on oltava kartoituksessa',
      it: 'il valore del tag "{{=e.params.tag}}" deve essere nei mapping',
      ko: '"{{=e.params.tag}}"태그의 값은 반드시 매핑에 있어야합니다.',
      nl: 'de waarde van het veld "{{= e.params.tag}}" moet voorkomen in de mapping',
      "pt-BR": 'o valor da tag "{{=e.params.tag}}" deve estar no mapping',
      ru: 'значение поля "{{=e.params.tag}}" должно быть ключом одной из схем',
      th: 'ต้องมีค่าของ tag "{{=e.params.tag}}" ใน mapping',
      zh: '标签 "{{=e.params.tag}}" 的值必须在 mapping 之中',
      "zh-TW": '標籤 "{{=e.params.tag}}" 必須在 mapping 其中之一',
    },
  },

  enum: {
    en: "must be equal to one of the allowed values",
    ca: "ha de ser igual a un dels valors predefinits",
    cs: "musí být rovno jedné hodnotě z výčtu",
    de: "muss einem der vorgegebenen Werte entsprechen",
    es: "deber ser igual a uno de los valores predefinidos",
    fa: "باید برابر با یکی از مقادیر مجاز باشد",
    fi: "täytyy olla yhtä kuin jokin sallituista arvoista",
    fr: "doit être égal à une des valeurs prédéfinies",
    hu: "egyenlő kell legyen valamely előre meghatározott értékkel",
    id: "harus sama dengan salah satu dari nilai yang telah ditentukan",
    it: "dovrebbe essere uguale ad uno dei valori predefiniti",
    ja: "事前に定義された値のいずれかに等しくなければいけない",
    ko: "미리 정의된 값중 하나여야 합니다",
    nb: "må være lik en av de forhåndsdefinerte verdiene",
    nl: "moet overeenkomen met één van de voorgedefinieerde waarden",
    pl: "powinien być równy jednej z predefiniowanych wartości",
    "pt-BR": "deve ser igual a um dos valores permitidos",
    ru: "должно быть равно одному из разрешенных значений",
    sk: "musí byť jedna z definovaných hodnôt",
    sv: "borde vara ekvivalent med en av dess fördefinierade värden",
    th: "ต้องตรงกับหนึ่งในค่าที่กำหนดไว้",
    zh: "应当是预设定的枚举值之一",
    "zh-TW": "應該要在預設的值之中",
  },

  union: {
    en: 'must match a schema in "union"',
    ca: 'ha de coincidir amb algun esquema definit a "union"',
    cs: 'musí vyhovět alespoň jednomu schématu v "union"',
    de: 'muss einem der Schemata in "union" entsprechen',
    es: 'debe coincidir con algún esquema en "union"',
    fa: 'باید با یکی از الگوهای "union" مطابق باشد',
    fi: 'täytyy vastata "union" skeemaa',
    fr: 'doit correspondre à un schéma de "union"',
    hu: 'meg kell feleljen legalább egy "union" alaknak',
    id: 'harus cocok dengan beberapa skema pada "union"',
    it: 'deve corrispondere ad uno schema in "union"',
    ja: '"union"のスキーマとマッチしなくてはいけない',
    ko: '"union"의 스키마와 일치해야 합니다',
    nb: 'må samsvare med et schema i "union"',
    nl: 'moet overeenkomen met een schema in "union"',
    pl: 'powinien pasować do wzoru z sekcji "union"',
    "pt-BR": 'os dados não correspondem a nenhum schema de "union"',
    ru: 'должно соответствовать одной их схем в "union"',
    sk: 'musí splňovať aspoň jednu zo schém v "union"',
    sv: 'borde matcha något schema i "union"',
    th: 'ต้องตรงกับหนึ่งใน schema ที่กำหนดไว้ใน "union"',
    zh: "数据应为 union 所指定的其中一个",
    "zh-TW": "不符合 union 指定的模式",
  },
}
