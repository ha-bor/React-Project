import Pm from './../Components/Conversation/Pm'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  messegelist: state.conversations,
  text: state.text1,
  idPerson: state.idnum
})

export default connect(mapStateToProps)(Pm)
