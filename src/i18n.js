import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import languagedetec
import translationEn from './local/en.json'
import translationAr from './local/ar.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar',

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
