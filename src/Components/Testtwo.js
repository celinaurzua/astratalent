import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testtwo extends Component {
  render() {
    return (
      <div>
          <p>Test Teórico</p>
          <Link to="testthree">
          <button>START TEST 3</button>
          </Link>
      </div>
    );
  }
}

export default Testtwo;