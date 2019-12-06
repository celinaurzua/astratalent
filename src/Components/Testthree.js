import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';
import menuTree from '../Images/menu-tres.png';


class Testthree extends Component {

  AlertStartTest() {
    alert("XXXXX") 
   }

   render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Test de código</p>
          <img src={menuTree} alt="" />
          <div>
            <p></p>


            <Link to="testfeedback">
              <button onClick={() => this.AlertStartTest()}>FINISH</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testthree;