import React from 'react'
import Messagebox from './Messagebox'

export default class Header extends React.Component {
  render () {
    console.log('proops', this.props)
    return (
      <div className='header'>
        <span>{this.props.name} </span>
        <span> {this.props.lastname}</span>
        <span> {this.props.email}</span>


      </div>
    )
  }
}
