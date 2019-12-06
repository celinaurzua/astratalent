import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';


class Header extends Component {
  render() {
    return (
      <div className="cointenerHeader">
          <p className="appName">Astra Talent</p>
          <Link to="">
          <button className="buttonLogOut">X</button>
          </Link>
      </div>
    );
  }
}

export default Header;