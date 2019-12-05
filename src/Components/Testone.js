import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


class Testone extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }

  render() {
    return (
      <div className="cointenerContact">
        <Header/>
          <p>Test de Lógica</p>
          <Timer/>
          <Link to="testtwo">
          <button onClick={() => this.AlertStartTest()}>START TEST 2</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testone;