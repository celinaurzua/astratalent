import React from 'react';
import { Link } from 'react-router-dom';
//import firebase from '../Firebase';

export default class LoginHR extends React.Component {
  constructor (props) {
    super (props); 
  this.state = {
      emailCandidates: []
    };
  }
  
  render() {
    return this.state.emailCandidates.map((infoCandidates, index) => 
      <center key={index}>
         <p>{infoCandidates.name}</p>
         <div>
          <Link to="/rh">
          <button>Log in</button>
          </Link>
      </div>
      </center>
    )
  }
}

