import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../Styles/test.css';
import menuWecome from '../Images/menu-welcome.png';


class Testwelcome extends Component {

  AlertStartTest() {
    alert("You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. You can answer this test only once. Are you sure you want to leave the test now?") 
   }

  render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Welcome</p>
          <img src={menuWecome} alt="" />

          <div>
            <p></p>

            <Link to="testone">
              
              <button className="buttonGreen" onClick={() => this.AlertStartTest()}>START TEST 1</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testwelcome;