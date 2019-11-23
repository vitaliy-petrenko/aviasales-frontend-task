import { IState } from './rootReducer'
import TranslationService from '../services/translation'
import { getLanguage } from './common/selectors'

const initLanguage = (state: IState) => {
  TranslationService.init(getLanguage(state))
}

const init = (state: IState) => {
  initLanguage(state)
}

export default init
