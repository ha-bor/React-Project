import React from 'react'
import Conversationlist from './Conversationlist'
import Chatscreen from './Chatscreen'
import ConvListContainer from './../../Container/ConvListContainer'

export default class Messenger extends React.Component {
  render () {
    return (
      <div className='fullscreen'>
        <div className='chat'>
          <Conversationlist />
          <Chatscreen />
        </div>
      </div>
    )
  }
}
