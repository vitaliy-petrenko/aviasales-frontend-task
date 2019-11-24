import 'moment/locale/ru'
import moment from 'moment'

class MomentService {
  setLocale(locale?: string) {
    moment.locale(locale)
  }
}

export default new MomentService()
