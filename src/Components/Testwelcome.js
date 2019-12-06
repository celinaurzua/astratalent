import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../Styles/test.css';
import menuWecome from '../Images/menu-welcome.png';


class Testwelcome extends Component {

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