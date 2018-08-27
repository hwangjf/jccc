import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

class Product extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      shotType: "m"
    }
  }

  handleMouseOver = () => {
    this.setState({shotType:"d1"})
  }

  handleMouseOut = () => {
    this.setState({ shotType: "m" })
  }

  render() {
    let url = `https://www.jcrew.com/s7-img-facade/${this.props.productCode}_${this.props.colors[0].colorCode}_${this.state.shotType}`
    return (
      <Card onClick={()=>this.props.handleClick(this.props)} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>
        {this.props.productCode.length > 0
          ? (<Image style={{ height:"199px", width:"199px"}} src={url} />)
          : null
        }
        
        <Card.Description>
          {this.props.productDescription}
        </Card.Description>
      </Card>
    )
  }
}

export default withRouter(Product);