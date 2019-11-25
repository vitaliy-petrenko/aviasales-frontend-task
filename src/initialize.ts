import { IState } from './store/rootReducer'
import translationService from './services/translation'
import momentService from './services/moment'
import { getLocale } from './store/common/selectors'

const initLocale = (state: IState) => {
  const locale = getLocale(state)
  translationService.init(getLocale(state))
  momentService.setLocale(locale)
}

const init = (state: IState) => {
  initLocale(state)
}

export default init
