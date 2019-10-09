import Footer from '../Components/Conversation/Footer'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

const mapStateToProps = (state) => ({
  textt: state.text,
  idperson: state.idnum,
  sent: state.text1
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)