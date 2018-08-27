import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <Menu text style={{width:"100%"}}>
        <Menu.Item>
          <Icon name="search" />
          SEARCH
        </Menu.Item>
        <Menu.Item>
          <img
            src={require("../jclogo.png")}
            style={{ height: "70px", width:"100px", marginLeft: "400px", cursor: "pointer" }}
            onClick={()=>this.props.history.push('/')}
            alt="jcrew logo"
          />
        </Menu.Item>
        <Menu.Menu position="right" >
          <Menu.Item>
            Stores
          </Menu.Item>
          <Menu.Item>
            Sign in
          </Menu.Item>
          <Menu.Item>
            <Icon name="shopping bag" />
            Bag
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(Navbar);