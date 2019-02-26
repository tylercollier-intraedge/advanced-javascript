import React, { Component } from 'react'
import axios from 'axios'

export class Cors extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      data: null,
      error: null
    }
  }

  componentDidMount() {
    const url = 'https://mail.google.com/sync/u/0/i/bv?hl=en&c=2887'
    axios.get(url, { waithCredentials: true })
      .then(response => this.setState({ data: response.data }))
      .catch(error => this.setState({ error }))
      .then(() => this.setState({ isLoading: false }))
  }

  render() {
    const { isLoading, data, error } = this.state
    
    return (
      <div>
        {isLoading
          ? 'Loading...'
          : data
            ? <div>
                Data: {data[16]}
              </div>
            : <div>
                An unexpected error occurred: {error.message}
              </div>
        }
      </div>
    )
  }
}

export default Cors
