import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Linkbar extends Component {
  state = {labels:[]}

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/https://www.jcrew.com/data/v1/US/navigation")
      .then(response => response.json())
      .then(json => {
        let labels = json.nav[0].navGroups[0].navItems
        this.setState({labels:labels})
      })
  }     

  render() {
    return (
      <Menu borderless widths="10">
        {this.state.labels.length > 0
          ? this.state.labels.map(label=>{
            return (
              <Menu.Item
                link
                onClick={() => this.props.handleClick(label)}
                style={{margin:"6px"}} 
                key={label.url}
              >
                {label.label.split(' ')[1]}
              </Menu.Item>
            )
          })
          : null
        }
      </Menu>
    )
  }
}


export default withRouter(Linkbar);