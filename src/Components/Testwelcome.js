import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



class Testwelcome extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }


  render() {
    return (
      <div>
        <Header/>
          <p>Welcome</p>
          <Link to="testone">
          <button onClick={() => this.AlertStartTest()}>START TEST 1</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testwelcome;