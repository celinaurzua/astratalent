import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testwelcome extends Component {
  render() {
    return (
      <div>
          <p>Welcome</p>
          <Link to="testone">
          <button>START TEST 1</button>
          </Link>
      </div>
    );
  }
}

export default Testwelcome;