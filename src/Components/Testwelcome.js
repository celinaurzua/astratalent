import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


class Testwelcome extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Welcome</p>
          <Link to="testone">
          <button>START TEST 1</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testwelcome;