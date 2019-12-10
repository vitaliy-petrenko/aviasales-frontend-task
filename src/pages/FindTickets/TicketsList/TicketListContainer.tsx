import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import TicketsList, { IProps } from './TicketsList'
import { IState } from '../../../store/root'
import { clearFindTickets, fetchTicketsRequest } from '../../../store/findTickets/actions'
import { getFetchingStatuses, getFinalTicketList } from '../../../store/findTickets/selectors'
import withData, { IWithData } from '../../../hoc/withData'

type TStateProps = IProps;
type TDispatchProps = Pick<IWithData, 'fetch' | 'reset'>

const mapStateToProps = (state: IState): TStateProps => ({
  statuses: getFetchingStatuses(state),
  tickets: getFinalTicketList(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  fetch: bindActionCreators(fetchTicketsRequest, dispatch),
  reset: bindActionCreators(clearFindTickets, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withData(TicketsList))
