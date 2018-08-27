import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import Linkbar from './containers/Linkbar';
import ProductGrid from './containers/ProductGrid';
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {selected: "womens"}

  handleClick = (label) => {
    let selected = label.label.split(' ')[1]
    if (selected[selected.length-1] !== 's') {
      selected += 's'
    }
    console.log(selected)
    this.setState({ selected: selected })
    this.props.history.push(`${label.url}`)
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <Navbar />
        <Linkbar handleClick={this.handleClick}/>
        <h1>
          NEW ARRIVALS
        </h1>
        <br/>
        <ProductGrid selected={this.state.selected}/>
      </div>
    );
  }
}

export default withRouter(App);
