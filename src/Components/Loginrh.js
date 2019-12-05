import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Loginrh extends Component {
  render() {
    return (
      <div>
          <p>Log in RH</p>
          <Link to="/rh">
          <button>Log in</button>
          </Link>
      </div>
    );
  }
}

export default Loginrh;
