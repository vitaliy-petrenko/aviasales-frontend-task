import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { IState } from '../../../store/rootReducer'
import { getFilters } from '../../../store/findTickets/selectors'
import { setSelectedTransfersOptions } from '../../../store/findTickets/actions'
import Sidebar, { IProps } from './Sidebar'

type TStateProps = Pick<IProps, 'filters'>;
type TDispatchProps = Pick<IProps, 'setSelectedTransfersOptions'>

const mapStateToProps = (state: IState): TStateProps => ({
  filters: getFilters(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  setSelectedTransfersOptions: bindActionCreators(setSelectedTransfersOptions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
