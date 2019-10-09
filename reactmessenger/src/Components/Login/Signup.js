import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import validate from '../../validation/ValidateFunction'
import { Link } from 'react-router-dom'
export default class Signup extends React.Component {
  constructor () {
    super()

    this.state = {
    
        email: '',
        password: '',
        retypepassword: ''
      
    }
  }

  handleChange (event) {
    let name = event.target.name
    let changeFields = this.state.field
    changeFields[name] = event.target.value
    this.setState({ field: changeFields })
  }

  handleError () {
    let errors= {
      email: validate('email', this.state.field.email),
      password: validate('password', this.state.field.password)
    }
    console.log('errrrorrr', errors)
    this.setState({ errors })
  }

  render () {
    console.log('this', this.state)
    return (
      <div className='container'>
        <div className='loginpage'>
            WELCOME
          <TextField
            id='standard-password-input'
            label='Email'
            type='email'
            name='email'
            autoComplete='current-password'
            margin='normal'
            onChange={(event) => this.handleChange(event)}
          />
          <TextField
            id='standard-password-input'
            label='Password'
            type='password'
            name='password'
            autoComplete='current-password'
            margin='normal'
            onChange={(event) => this.handleChange(event)}
          />
         
          <TextField
            id='standard-password-input'
            label='Password'
            type='password'
            name='retypepassword'
            autoComplete='current-password'
            margin='normal'
            onChange={(event) => this.handleChange(event)}
          />
       

          <Button variant='contained' color='primary'
            onClick={() => this.handleError()}>
              <Link to= "/messenger">LOGIN</Link>
          </Button>
        </div>
      </div>
    )
  }
}
