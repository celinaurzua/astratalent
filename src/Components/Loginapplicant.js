import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Data from "./Data";
import Ilustration from "../Images/login-ilustration.png";
import '../Styles/logInApplicant.css';

class Loginapplicant extends Component {
  state = {
    emailInput: "",
    email: "",
    name: "",
    arr: ""
  };

  addEmail = event => {
    const value= event.target.value
    this.setState({
      emailInput: event.target.value
    });
    localStorage.setItem("email", value);
  };

  componentDidMount() {
    let arr = [];
    Data.data.map(element => {
      element.candidates.map(doc => {
        console.log(doc);
        arr.push(doc);
        localStorage.setItem("array", JSON.stringify(arr) );
      });
    });
    
    this.setState({ arr });
  }

  render() {
    console.log(localStorage);
    const { emailInput } = this.state;
    return (
      <div className="cointenerLogIn">
        <div>
        <img className="imgLogin" src={Ilustration} alt="" />
        <p className="title" >Write your email</p>
        <input className="inputTxt"
          type="text"
          value={emailInput}
          placeholder="Please add your email"
          onChange={this.addEmail}
        ></input>
        <br/>
        <Link to="/welcome">
          <button className="buttonLoging">Log in</button>
        </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Loginapplicant;
