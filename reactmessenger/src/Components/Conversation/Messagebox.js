import React from 'react'
// import Pm from './Pm'
import PmContainer from './../../Container/PmContainer'

export default class Messagebox extends React.Component {
 
  constructor () {
    super()
    this.state = {
      messagelist: [
        {
          text: 'salam',
          date: '3/2',
          sender: 1,
          receiver: 3
        },
        {
          text: 'khoobiii',
          date: '3/2',
          sender: 3,
          receiver: 1
        }

      ]
    }
  }

  render () {
    return (
      <PmContainer />       
    )
  }
}
