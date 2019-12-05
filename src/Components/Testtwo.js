import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


class Testtwo extends Component {

  AlertStartTest() {
    alert("You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. You can answer this test only once. Are you sure you want to leave the test now?") 
   }

  render() {
    return (
      <div>
        <Header/>
          <p>Test Teórico</p>
          <Timer/>
          <Link to="testthree">
          <button onClick={() => this.AlertStartTest()}>START TEST 3</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testtwo;