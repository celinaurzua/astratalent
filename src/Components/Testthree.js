import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testthree extends Component {
  render() {
    return (
      <div>
          <p>Test de Código</p>
          <Link to="testfeedback">
          <button>FINISH</button>
          </Link>
      </div>
    );
  }
}

export default Testthree;