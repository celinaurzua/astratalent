import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testbye extends Component {
  render() {
    return (
      <div>
          <p>Gracias!!! </p>
          <Link to="/">
          <button>Log out</button>
          </Link>
      </div>
    );
  }
}

export default Testbye;