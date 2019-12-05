import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testthree extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }

  render() {
    return (
      <div>
          <p>Test de Código</p>
          <Link to="testfeedback">
          <button onClick={() => this.AlertStartTest()}>FINISH</button>
          </Link>
      </div>
    );
  }
}

export default Testthree;