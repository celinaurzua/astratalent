import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';


class Testone extends Component {
  render() {
    return (
      <div className="cointenerContact">
        <Header/>
          <p>Test de Lógica</p>
          <Timer/>
          <Link to="testtwo">
          <button>START TEST 2</button>
          </Link>
      </div>
    );
  }
}

export default Testone;