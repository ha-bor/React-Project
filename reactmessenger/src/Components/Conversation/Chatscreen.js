import React from 'react'
import Messagebox from './Messagebox'
import HeaderContainer from '../../Container/HeaderContainer'
// import Footer from './Footer'
import FooterContainer from './../../Container/FooterContainer'

export default class Chatscreen extends React.Component {
  render () {
    return (
      <div className='chat-screen'>
        <HeaderContainer />
        <Messagebox />
        <FooterContainer />
      </div>
    )
  }
}
