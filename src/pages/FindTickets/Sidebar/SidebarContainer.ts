import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Sidebar, { IProps } from './Sidebar'
import { IState } from '../../../store/rootReducer'
import { getFilters } from '../../../store/findTickets/selectors'
import { TAppAnyAction } from '../../../store/types'
import { setSelectedOptions } from '../../../store/findTickets/actions'

type TStateProps = Pick<IProps, 'filters'>;
type TDispatchProps = Pick<IProps, 'setSelectedOptions'>

const mapStateToProps = (state: IState): TStateProps => ({
  filters: getFilters(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  setSelectedOptions: bindActionCreators(setSelectedOptions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
