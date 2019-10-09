import { connect } from 'react-redux'
import Conversationlist from '../Components/Conversation/Conversationlist'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})
export default connect(mapDispatchToProps)(Conversationlist)
