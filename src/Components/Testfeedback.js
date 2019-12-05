import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


class Testfeedback extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Feedback</p>
          <Link to="testbye">
          <button>SEND</button>
          </Link>
      </div>
    );
  }
}

export default Testfeedback;