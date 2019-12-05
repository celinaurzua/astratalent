import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Loginapplicant extends Component {
  render() {
    return (
      <div className="cointenerContact">
          <p>Log in Applicant</p>
          <Link to="/welcome">
          <button>Log in</button>
          </Link>
      </div>
    );
  }
}

export default Loginapplicant;