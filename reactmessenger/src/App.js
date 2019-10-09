import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Messenger from './Components/Conversation/Messenger'
import Login from './Components/Login/Login'
import Signup from './Components/Login/Signup'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './Reducer/Conversation'

const store = createStore(conversation)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/messenger/' component={Messenger} />
          <Route path='/sginup/' component={Signup} />
        </Router>
      </Provider>
    )
  }
}
