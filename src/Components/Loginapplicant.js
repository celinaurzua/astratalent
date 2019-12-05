import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


class Loginapplicant extends Component {
  render() {
    return (
      <div className="cointenerContact">
          <p>Log in Applicant</p>
          <Link to="/welcome">
          <button>Log in</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Loginapplicant;