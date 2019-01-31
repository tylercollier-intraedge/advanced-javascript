import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './Header'
import References from './References'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route path="/" exact render={() => (
          <div>
            <div>Click a nav link</div>
          </div>
        )} />
        <Route path="/references" component={References} />
      </div>
    );
  }
}

export default App;
