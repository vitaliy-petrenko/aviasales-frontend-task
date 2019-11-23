import { connect } from 'react-redux'
import Price from './Price'
import { getCurrency } from '../../../../store/common/selectors'
import { IState } from '../../../../store/rootReducer'

const mapStateToProps = (state: IState) => ({
  currency: getCurrency(state)
})

export default connect(mapStateToProps)(Price)
