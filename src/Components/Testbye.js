import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Testbye extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Gracias!!! </p>
          <Link to="/">
          <button>Log out</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testbye;