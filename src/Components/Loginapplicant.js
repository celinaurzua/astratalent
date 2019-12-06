import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../Styles/logInApplicant.css';


class Loginapplicant extends Component {
  render() {
    return (
      <div className="cointenerContact">
          <p>Log in Applicant</p>
          <Link to="/welcome">
          <button className="buttonGreen">Log in</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Loginapplicant;