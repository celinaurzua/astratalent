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
          <p className="instructionText"> Make sure you have a good internet connection and be in a quiet place to answer the test.You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. Happy coding :) </p>
            <Link to="testone">
              <button className="buttonGreen">Start</button>

            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testwelcome;  