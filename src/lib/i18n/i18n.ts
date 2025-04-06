import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import koKR from "./locales/ko-KR.json";
import enUS from "./locales/en-US.json";

i18n.use(initReactI18next).init({
  resources: {
    "ko-KR": {
      translation: koKR,
    },
    "en-US": {
      translation: enUS,
    },
  },
  lng: "ko-KR",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
