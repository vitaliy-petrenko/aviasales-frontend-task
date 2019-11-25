import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import TicketsList, { IProps } from './TicketsList'
import { IState } from '../../../store/rootReducer'
import { clearFindTickets, fetchTickets } from '../../../store/findTickets/actions'
import { TAppAnyAction } from '../../../store/types'
import { getFetchingStatuses, getFinalTicketList } from '../../../store/findTickets/selectors'
import withData from '../../../hoc'
import { IWithData } from '../../../hoc/withData'

type TStateProps = IProps;
type TDispatchProps = Pick<IWithData, 'fetch' | 'reset'>

const mapStateToProps = (state: IState): TStateProps => ({
  statuses: getFetchingStatuses(state),
  tickets: getFinalTicketList(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  fetch: bindActionCreators(fetchTickets, dispatch),
  reset: bindActionCreators(clearFindTickets, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withData(TicketsList))
