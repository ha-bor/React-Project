import Header from '../Components/Conversation/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  name: state.firstname,
  lastname: state.lastname,
  email: state.useremail

})
export default connect(mapStateToProps)(Header)
