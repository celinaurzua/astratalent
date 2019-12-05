import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';


class Testthree extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Test de Código</p>
          <Timer/>
          <Link to="testfeedback">
          <button>FINISH</button>
          </Link>
      </div>
    );
  }
}

export default Testthree;