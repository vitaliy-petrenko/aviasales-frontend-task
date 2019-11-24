import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import SortTabs, { IProps } from './SortTabs'
import { IState } from '../../../store/rootReducer'
import { getSortBy } from '../../../store/findTickets/selectors'
import { TAppAnyAction } from '../../../store/types'
import { selectSortBy } from '../../../store/findTickets/actions'

type TStateProps = Pick<IProps, 'sortBy'>;
type TDispatchProps = Pick<IProps, 'selectSortBy'>

const mapStateToProps = (state: IState): TStateProps => ({
  sortBy: getSortBy(state)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, {}, TAppAnyAction>): TDispatchProps => ({
  selectSortBy: bindActionCreators(selectSortBy, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SortTabs)
