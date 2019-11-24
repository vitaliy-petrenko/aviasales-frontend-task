import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Sidebar, { IProps } from './Sidebar'
import { IState } from '../../../store/rootReducer'
import { getFilters } from '../../../store/findTickets/selectors'
import { TAppAnyAction } from '../../../store/types'
import { toggleTransfersOption } from '../../../store/findTickets/actions'

type TStateProps = Pick<IProps, 'filters'>;
type TDispatchProps = Pick<IProps, 'toggleTransfersOption'>

const mapStateToProps = (state: IState): TStateProps => ({
  filters: getFilters(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  toggleTransfersOption: bindActionCreators(toggleTransfersOption, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
