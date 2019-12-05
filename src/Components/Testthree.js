import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


class Testthree extends Component {

  AlertStartTest() {
    alert("You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. You can answer this test only once. Are you sure you want to leave the test now?") 
   }

  render() {
    return (
      <div>
        <Header/>
          <p>Test de Código</p>
          <Timer/>
          <Link to="testfeedback">
          <button onClick={() => this.AlertStartTest()}>FINISH</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testthree;