import { connect } from 'react-redux'
import PlaneLogo, { IProps } from '../../../components/PlaneLogo/PlaneLogo'
import { IState } from '../../../store/rootReducer'
import { getFetchingStatuses } from '../../../store/findTickets/selectors'

type TStateProps = IProps;

const mapStateToProps = (state: IState): TStateProps => ({
  animated: getFetchingStatuses(state).isFetching,
})

export default connect(mapStateToProps)(PlaneLogo)
