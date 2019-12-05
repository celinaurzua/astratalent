import React, { Component } from 'react';


export default class LoginHR extends React.Component {
    state = {
      email: [],
    };

  render() {
    return (
      <div>
          <p>Log in RH</p>
          <button>Log in</button>
      </div>
    );
  }
}

