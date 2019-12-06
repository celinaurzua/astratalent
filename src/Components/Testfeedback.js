import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import menuFeedback from "../Images/menu-cuatro.png";
class Testfeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  goodbye = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Feedback</p>
          <img src={menuFeedback} alt="" />

          <div  
            style={
              this.state.visible ? { display: "none" } : { display: "block" }
            }
          >

          <div className="instructionText" >  
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
            <p>
              2. Is there anything you would like to highlight or improve in
              this process?
            </p>
            <div>
              <input
                style={{ width: "30rem", height: "15rem" }}
                type="textarea"
              />
            </div>
            </div>  
            <button className="buttonGreen" onClick={() => this.goodbye()}>SEND FEEDBACK</button>
          </div>
        </div>
        <div
          className="cointenerTest"
          style={
            this.state.visible ? { display: "block" } : { display: "none" }
          }
        >
          <p className="instructionText">
          Dear Candidate, thank you for participating in our test process. We strive to ensure our candidates have an awesome experience, so we'd love to hear your thoughts on the test you attended.Your feedback is confidential and will only be used to improve internal processes.
          Thanks for your input :) 
          </p>
          <p className="instructionText">
            Many thanks for your application! You'll receive news about the
            following steps in your procces very soon. Stay tuned
          </p>
          <Link to="/">
            <button className="buttonGreen">Finish</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Testfeedback;
