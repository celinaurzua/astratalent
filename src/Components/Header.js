import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';


class Header extends Component {
  render() {
    return (
      <div className="cointenerHeader">
          <p className="appName">Astra Talent</p>
          <Link to="">
          <a className="buttonLogOut"><i className="fas fa-times fa-2x"></i></a>
          </Link>
      </div>
    );
  }
}

export default Header;