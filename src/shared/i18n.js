import { initReactI18next } from "react-i18next";
import i18n from 'i18next';

import common_es from "../lang/es.json";
import common_en from "../lang/en.json";

// the translations
const resources = {
  es: {
    translation: common_es
  },
  en: {
    translation: common_en
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;