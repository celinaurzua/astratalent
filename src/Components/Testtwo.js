import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Testtwo extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }

  render() {
    return (
      <div>
          <p>Test Teórico</p>
          <Link to="testthree">
          <button onClick={() => this.AlertStartTest()}>START TEST 3</button>
          </Link>
      </div>
    );
  }
}

export default Testtwo;