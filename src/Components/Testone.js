import React, { Component} from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer/Timer";
import Header from "./Header";
import Footer from "./Footer";
import menuTestOne from "../Images/menu-uno.png";
import Data from "./Data";
import '../Styles/test.css';


class Testone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }


  AlertStartTest = () => {
    alert(
      "You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. Are you sure you want to leave the test now?"
    );
    this.setState({
      visible: true
    });
  };

  render() {
    console.log(Data.data)
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Logic Test</p>
          <img src={menuTestOne} alt="" />
          <div>

            <div style={this.state.visible ? { visibility: "hidden" } : {}}>
              <p className="instructionText">Make sure you have a good internet connection and be in a quiet place to answer the test.You can answer this test only once. If you decide to leave, the test will be blocked and you will not be able to continue answering questions. Happy coding :)</p>
              <button className="buttonGreen" onClick={() => this.AlertStartTest()}>Start</button>
            </div>

            <div style={this.state.visible ? { visibility: "visible" } : {}} className="startTest">
              <Timer visible={this.state.visible} />
              {Data.data && Data.data.map(element =>
                element.logicalTest.map((el, id) =>
                  <div className="textQuestions">
                    <p key={id}>{el.question} </p>
                    <div>
                      <input key={id} value={el.a[1]} type="radio" name={el.question[0]} />
                      <label key={id}>{el.b[0]}</label>
                    </div>
                    <div>
                      <input key={id} value={el.b[1]} type="radio" name={el.question[0]} />
                      <label key={id}>{el.c[0]}</label>
                    </div>
                    <div>
                      <input key={id} value={el.c[1]} type="radio" name={el.question[0]} />
                      <label key={id}>{el.d[0]}</label>
                    </div>
                  </div>
                ))}
              <Link to="testtwo">
                <button className="buttonGreen">Finish</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}  

export default Testone;
