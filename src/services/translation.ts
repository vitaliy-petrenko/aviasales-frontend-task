import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ruTranslation from '../translations/ru-RU'

export const translationsInitialize = (language: string) => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        'ru-RU': {
          translation: ruTranslation
        },
      },
      lng: 'ru-RU',
      fallbackLng: 'ru-RU',

      interpolation: {
        escapeValue: false
      }
    })
}

export const setLanguage = (language: string) => {
  // todo
}
