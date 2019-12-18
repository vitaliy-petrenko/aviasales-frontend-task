import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { IState } from '../../../store/root'
import { getFilters } from '../../../store/findTickets/selectors'
import Sidebar, { IProps } from './Sidebar'
import { transfers } from '../../../store/findTickets/reducers'

type TStateProps = Pick<IProps, 'filters'>;
type TDispatchProps = Pick<IProps, 'setSelectedTransfersOptions'>

const mapStateToProps = (state: IState): TStateProps => ({
  filters: getFilters(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  setSelectedTransfersOptions: bindActionCreators(transfers.actions.setSelected, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
