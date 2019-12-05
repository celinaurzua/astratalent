import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testfeedback extends Component {
  render() {
    return (
      <div>
          <p>Feedback</p>
          <Link to="testbye">
          <button>SEND</button>
          </Link>
      </div>
    );
  }
}

export default Testfeedback;