import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


class Testtwo extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Test Teórico</p>
          <Timer/>
          <Link to="testthree">
          <button>START TEST 3</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testtwo;