import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Testbye extends Component {
  render() {
    return (
      <div>
        <Header/>
          <p>Many thanks for your application! You'll receive news about the following steps in your procces very soon. Stay tuned</p>
          <Link to="/">

          <button>Log out</button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default Testbye;
