import React, { Component } from 'react';

import '../css/navbar.css';
import Likes from './Likes';


class NavBar extends Component {

  render() {

    const { handleToggleLikes } = this.props

    return (
      <header>
        <nav className="nav">
          <Likes {...this.props} handleToggleLikes={handleToggleLikes}/>
        </nav>
      </header>
    )
  }
}

export default NavBar