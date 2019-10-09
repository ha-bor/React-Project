import { connect } from 'react-redux'
import Conversation from '../Components/Conversation/Conversation'


const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})
export default connect(mapDispatchToProps)(Conversation)