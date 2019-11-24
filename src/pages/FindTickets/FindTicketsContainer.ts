import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import FindTickets, { IProps } from './FindTickets'
import { IState } from '../../store/rootReducer'
import { clearTickets, fetchTickets } from '../../store/findTickets/actions'
import { TAppAnyAction } from '../../store/types'
import { getFetchingStatuses, getFinalTicketList } from '../../store/findTickets/selectors'

type TStateProps = Pick<IProps, 'fetchingStatuses' | 'tickets'>;
type TDispatchProps = Pick<IProps, 'fetchTickets' | 'clearTickets'>

const mapStateToProps = (state: IState): TStateProps => ({
  fetchingStatuses: getFetchingStatuses(state),
  tickets: getFinalTicketList(state),
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  fetchTickets: bindActionCreators(fetchTickets, dispatch),
  clearTickets: bindActionCreators(clearTickets, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(FindTickets)
