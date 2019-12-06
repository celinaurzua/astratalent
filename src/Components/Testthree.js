import React, { Component } from "react";
import { Link } from "react-router-dom";
import Timer from "../Components/Timer/Timer";
import Header from "./Header";
import Footer from "./Footer";
import menuTree from "../Images/menu-tres.png";
import Data from "./Data";
import ReactAce from 'react-ace-editor';

class Testthree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  AlertStartTest = () => {
    alert(
      "You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. You can answer this test only once. Are you sure you want to leave the test now?"
    );
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Test de código</p>
          <img src={menuTree} alt="" />
          <div>
            <p></p>
            <button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
            <Timer visible={this.state.visible} />
            {Data.data &&
              Data.data.map(element =>
                element.codeTest.map((el, id) => (
                  <div>
                    <p>{el.code}</p>
                    <ReactAce
        mode="javascript"
        theme="solarized_dark"
        setReadOnly= {false}
        onChange={this.onChange}
        setValue={el.example}
        tabSize={2}
        // value={el.example}
        style={{ width:'60rem', height: '400px' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
                  </div>
                ))
              )}
            <Link to="testfeedback">
              <button>FINISH</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testthree;
