import localize from './localize';

type Langs =
  | 'en'
  | 'ar'
  | 'cz'
  | 'de'
  | 'es'
  | 'fr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt-BR'
  | 'ru'
  | 'sk'
  | 'sv'
  | 'th'
  | 'zh'
  | 'zh-TW';

declare const collection: Record<Langs, typeof localize>;

export default collection;
