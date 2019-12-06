import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboardrh extends Component {
  render() {
    return (
      <div>
          <p>Dashboard Statistics</p>
          <Link to="/rh">
          <button>Back</button>
          </Link>
      </div>
    );
  }
}

export default Dashboardrh; 