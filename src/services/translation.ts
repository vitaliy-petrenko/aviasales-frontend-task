import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ruTranslation from '../translations/ru-RU'

class TranslationService {
  init(language: string) {
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources: {
          'ru-RU': {
            translation: ruTranslation
          },
        },
        lng: language,
        fallbackLng: 'ru-RU',

        interpolation: {
          escapeValue: false
        }
      })
  }
}

export default new TranslationService()
