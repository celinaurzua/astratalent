import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Testbye extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Congratulations! You have finished this test section.</p>{" "}
        <p>Wait for communication for the next part of the process.</p>
        <Link to="/">
          <button>Log out</button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default Testbye;
