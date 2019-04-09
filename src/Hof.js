import React, { Component } from 'react'

export class Hof extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h1>HOF</h1>

        <div>Counter: {counter}</div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default Hof
