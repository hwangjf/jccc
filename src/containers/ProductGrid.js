import React, { Component } from 'react'
import { Grid, Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import Product from '../components/Product'

class ProductGrid extends Component {
  state = {
    products: [],
    productCode: ""
  }

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.jcrew.com/data/v1/US/category/${this.props.selected}_feature/newarrivals`)
      .then(response=>response.json())
      .then(data => {
        let arr = [...this.state.products]
        data.productList.forEach(p=>{
          p.products.forEach(product=>arr.push(product))
        })
        this.setState({products:arr})
      })
  }

  componentDidUpdate(prevProps) {
    if(this.props.selected !== prevProps.selected) {
      fetch(`https://cors-anywhere.herokuapp.com/https://www.jcrew.com/data/v1/US/category/${this.props.selected}_feature/newarrivals`)
        .then(response => response.json())
        .then(data => {
          let arr = [...this.state.products]
          data.productList.forEach(p => {
            p.products.forEach(product => arr.push(product))
          })
          this.setState({ products: arr })
        })
    }
  }

  handleClick = (props) => {

    this.setState({productCode: props.productCode})
    this.props.history.push(`${props.productCode}`)
  }

  render() {
    return (
      <Grid columns={3}>
        <Grid.Column width={3}></Grid.Column>

        <Grid.Column stretched width={10}>
          
          <Card.Group itemsPerRow={3} >
            {this.state.products.length > 0 
              ? this.state.products.slice(0,6).map(product=>{
                return <Product key={product.productId} {...product} handleClick={this.handleClick}/>
                })
              : null
            }
          </Card.Group>

        </Grid.Column >

        <Grid.Column width={3}></Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(ProductGrid);