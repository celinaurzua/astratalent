import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testone extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }

  render() {
    return (
      <div>
          <p>Test de Lógica</p>
          <Link to="testtwo">
          <button onClick={() => this.AlertStartTest()}>START TEST 2</button>
          </Link>
      </div>
    );
  }
}

export default Testone;