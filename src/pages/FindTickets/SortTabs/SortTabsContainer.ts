import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { IState } from '../../../store/root'
import { getSortBy } from '../../../store/findTickets/selectors'
import SortTabs, { IProps } from './SortTabs'
import { sortBy } from '../../../store/findTickets/reducers'

type TStateProps = Pick<IProps, 'sortBy'>;
type TDispatchProps = Pick<IProps, 'selectSortBy'>

const mapStateToProps = (state: IState): TStateProps => ({
  sortBy: getSortBy(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  selectSortBy: bindActionCreators(sortBy.actions.select, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs)
