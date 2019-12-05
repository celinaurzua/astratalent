import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>
          <p>HEADER</p>
          <Link to="">
          <button>Close</button>
          </Link>
      </div>
    );
  }
}

export default Header;