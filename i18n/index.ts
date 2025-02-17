import i18n, { type Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

import ZH from './locales/zh.json'
import EN from './locales/en.json'

export const resources = {
  zh: {
    translation: ZH,
    name: '中文',
  },
  en: {
    name: 'English',
    translation: EN,
  },
} as Resource

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  interpolation: {
    escapeValue: false,
  },
})

export const i18nConfig = i18n

export default i18n
