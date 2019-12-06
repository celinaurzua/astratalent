import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';
import menuTestTwo from '../Images/menu-dos.png';


class Testtwo extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }

   render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Test de técnico</p>
          <img src={menuTestTwo} alt="" />
          <div>
            <p></p>
            <Link to="testthree">
              <button onClick={() => this.AlertStartTest()}>START TEST 2</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testtwo;