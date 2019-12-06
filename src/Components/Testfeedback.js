import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import menuFeedback from "../Images/menu-cuatro.png";

class Testfeedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Feedback</p>
          <img src={menuFeedback} alt="" />

          <div>
            <p>
              1. Do you think that the content of the tests correspond to the
              position you are applying for?
            </p>
            <div>
              <input value="Totally agree" type="radio" name="feedback" />
              <label>Totally agree</label>
            </div>
            <div>
              <input value="So so" type="radio" name="feedback" />
              <label>So so</label>
            </div>
            <div>
              <input value="Totally disagree" type="radio" name="feedback" />
              <label>Totally disagree</label>
            </div>
          </div>
          <p>
            2. Is there anything you would like to highlight or improve in this
            process?
          </p>
          <div>
            <input
              style={{ width: "30rem", height: "15rem" }}
              type="textarea"
            />
          </div>
          <Link to="testbye">
            <button>SEND FEEDBACK</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testfeedback;
