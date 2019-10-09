import React from 'react'
import { getMessage } from '../../Action/Conversation'
import Button from '@material-ui/core/Button'
import axios from 'axios'


export default class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      id: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token')
    }
  }


  messageHandler (e) {
    this.setState({ text: e.target.value }, () => {
      console.log('mhand', this.state.text)
    })
  }

  handleSend () {
    this.props.dispatch(getMessage(this.state.text))
    console.log('aaaa', this.state.text)
    this.setState({ text: '' })
    const fsend = new FormData()
    fsend.append('token', this.state.token)
    fsend.append('conversation_id', this.props.idperson)
    fsend.append('text', this.state.text)
    axios.post('https://api.paywith.click/conversation/create/', fsend)
      .then((response) => {
        console.log('done')
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <div className='footer' >
        <input type=' text' name='chatInput' className='inputChat' value={this.state.text} placeholder='typing...' onChange={(event) => this.messageHandler(event)} />

        <Button variant='contained' className='sendBut' onClick={() => {
          window.localStorage.setItem('isSent', 1)
          this.handleSend()
 }}>
        Send
        </Button>
      </div >
    )
  }
}
