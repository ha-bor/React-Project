import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import validate from '../../validation/ValidateFunction'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      field: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }
  
  handleRequest () {
    console.log('stateee: ', this.state.field)
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.field.email,
      password: this.state.field.password
    })
      .then((response) => {
        console.log('stateee: ', this.state.field)
        console.log(response.data.data.profile.id)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
        this.props.history.push('/messenger/')
        
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleChange (event) {
    console.log('handelchang', this.state.field)
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
          />{
            this.state.errors.email !== null &&
            <span className='error'>{this.state.errors.email}</span>
          }
          <TextField
            id='standard-password-input'
            label='Password'
            type='password'
            name='password'
            autoComplete='current-password'
            margin='normal'
            onChange={(event) => this.handleChange(event)}
          />
          {
            this.state.errors.password !== null &&
            <span className='error'>{this.state.errors.password}</span>
          }

          <Button variant='contained' color='primary'
            onClick={() => this.handleRequest()}>
            LOGIN
          </Button>
        </div>
      </div>
    )
  }
}
