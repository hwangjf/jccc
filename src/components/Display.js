import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Display extends Component {
  state = {

  }

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.jcrew.com/data/v1/US/products/${this.props.productCode}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default withRouter(Display);