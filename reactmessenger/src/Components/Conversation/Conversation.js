import React from 'react'
import { getUserName } from '..//../Action/Conversation'

export default class Conversation extends React.Component {

  render () {
    console.log('poroops', this.props)
    return (
      <div className='conversation' onClick={() => this.props.dispatch(getUserName(this.props.name, this.props.lastname, this.props.email, this.props.messageid))}>
        <img className='profileimg' src='https://profiles.utdallas.edu/img/default.png' />
        <div>
          <div className='name-date'>
            <span>{this.props.name} {this.props.lastname}</span>
            <span> today </span>
          </div>
          <div className='lastmessage'>
            <span> {this.props.email} </span>
            <span className='unseen'>{this.props.unseen} </span>
          </div>
        </div>
      </div>
    )
  }
}
