// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./app/dictionaries/en.json";
import jaTranslations from "./app/dictionaries/ja.json";

i18n.use(initReactI18next).init({
  // resourcesを先に書くのが一般的です
  resources: {
    en: {
      translation: enTranslations, // 'translation' というデフォルトのネームスペースに設定
    },
    ja: {
      translation: jaTranslations, // こちらも同様
    },
  },
  fallbackLng: "en", // サポートされていない言語でアクセスされた場合のフォールバック
  supportedLngs: ["en", "ja"],

  // ReactはデフォルトでXSSから保護されているため、この設定が推奨されます
  interpolation: {
    escapeValue: false,
  },

  // 開発中にコンソールで詳細を確認したい場合はtrueにする
  // debug: true,
});

export default i18n;
