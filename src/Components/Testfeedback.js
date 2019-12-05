import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Testfeedback extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Feedback</p>
          <Link to="testbye">
          <button>SEND</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testfeedback;