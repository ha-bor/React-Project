import React from 'react'
import axios from 'axios'

export default class Pm extends React.Component {
  constructor () {
    super()
    this.state = {
      id: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      messageList: []
    }
  }

  getConversation () {
    let test={id:this.props.idPerson, token: this.state.token}
    console.log('id person', test)
    const fmes = new FormData()
    fmes.append('token', this.state.token)
    fmes.append('conversation_id', this.props.idPerson)
    fmes.append('size', 35)
    fmes.append('date', ((new Date().getTime() / 1000).toFixed(0)))
    axios.post('https://api.paywith.click/conversation/details/', fmes)
      .then((response) => {
        this.setState({ messageList: response.data.data.messages })
        console.log('rrrrr', this.state.messageList)
      })
      .catch(function (error) {
        console.log('rrrrrrrrrrr', error)
      })
  }

  componentDidMount () {
    setInterval(this.getConversation(), 3000)
  }

  render () {
    return (
      <div className='message-box'>
          <button onClick={()=> this.getConversation()}>refresh</button>
        {
          this.state.messageList.map((message, index) => {
            console.log('aaaa',message)
            if (message.sender.id == window.localStorage.getItem('id')) {
              return (
                <div key={index} className='sender'>
                  {message.text}
                </div>
              )
            } else {
              return (
                <div key={index} className='receiver'>
                  {message.text}
                </div>
              )
            }
          })
        }

      </div>
    )
  }
}
