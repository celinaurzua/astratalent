import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboardrh extends Component {
  render() {
    return (
      <div>
          <p>Dashboard RH</p>
          <Link to="statistics">
          <button>Dashboard Statistics</button>
          </Link>
      </div>
    );
  }
}

export default Dashboardrh;