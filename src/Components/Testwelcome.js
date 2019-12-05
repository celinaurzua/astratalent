import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



class Testwelcome extends Component {

  AlertStartTest() {
    alert("You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. You can answer this test only once. Are you sure you want to leave the test now?") 
   }


  render() {
    return (
      <div>
        <Header/>
          <p>Welcome</p>
          <p></p>
          <input type="checkbox">Notice of Privace</input>
          <Link to="testone">
          <button onClick={() => this.AlertStartTest()}>START TEST 1</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testwelcome;