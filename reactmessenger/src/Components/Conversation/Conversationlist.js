import React from 'react'
import Conversation from '../../Container/ConversationContainer'
import axios from 'axios'
import {setConv} from './../../Action/Conversation'

export default class Conversationlist extends React.Component {
  constructor () {
    super()
    this.state = {
      newconv: '',
      suggestion: [],
      id: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      conversationList: [],
      id1: window.localStorage.getItem('id1')
    }
  }

  componentDidMount () {
    const ftoken = new FormData()
    ftoken.append('token', this.state.token)
    axios.get('https://api.paywith.click/conversation/', { params: {
      token: this.state.token
    } })
      .then((response) => {
        this.setState({ conversationList: response.data.data.conversation_details })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  search (event) {
    const fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', event.target.value)
    fdata.append('size', 5)
    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        this.setState({ suggestion: response.data.data.users })
      })
  }

  makeConversation (personid) {
    const fmc = new FormData()
    fmc.append('token', this.state.token)
    fmc.append('user_id', personid)
    axios.post('https://api.paywith.click/conversation/', fmc)
      .then((response) => {
        console.log('makeConv', response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    // console.log('conversationlistt', this.state.conversationList)
    return (
      <div className='conversation-list'>
        <div>
          <input placeholder='search' onChange={(e) => this.search(e)} />
        </div>
        <div>
          {this.state.suggestion.map((item) => {
            return (
              <p onClick={() => this.makeConversation(item.id)}> {item.email} </p>
            )
          })}

        </div>
        { this.state.conversationList.map((item, index) => {
          return (
            item.users.map((userid) => {
              // console.log('userid', userid.id)
              if (userid.id != this.state.id) {
                console.log('helooo', userid)
                window.localStorage.setItem('conve_id', item.id)
                // if(index == 0) {
                //   this.props.dispatch(setConv(item.id))
                // }
                return (
                  <Conversation
                    key={index}
                    messageid={item.id}
                    name={userid.first_name}
                    lastname={userid.last_name}
                    lastmessage={userid.lastmessage}
                    unseen={userid.unseen}
                    email={userid.email} />
                )
              }
            })
          )
        })
        }
      </div>
    )
  }
}
