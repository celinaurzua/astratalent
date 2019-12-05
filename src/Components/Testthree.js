import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


class Testthree extends Component {

  AlertStartTest() {
    alert("XXXXX") 
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