import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Testwelcome extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }


  render() {
    return (
      <div>
          <p>Welcome</p>
          <Link to="testone">
          <button onClick={() => this.AlertStartTest()}>START TEST 1</button>
          </Link>
      </div>
    );
  }
}

export default Testwelcome;