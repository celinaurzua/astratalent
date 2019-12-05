import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class LoginHR extends React.Component {
    state = {
      emailCandidates: [],
    };


  render() {
    return (
      <div>
          <p>Log in RH</p>
          <Link to="/rh">
          <button>Log in</button>
          </Link>
      </div>
    );
  }
}

