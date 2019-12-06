import React, { Component, Checkbox } from "react";
import { Link } from "react-router-dom";
import Timer from "../Components/Timer/Timer";
import Header from "./Header";
import Footer from "./Footer";
import menuTestOne from "../Images/menu-uno.png";
import Data from "./Data";

class Testone extends Component {
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
    console.log(Data.data)
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Test de lógica</p>
          <img src={menuTestOne} alt="" />

          <div>
            <p></p>
            <button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
            <Timer visible={this.state.visible} />
            {Data.data && Data.data.map(element => 
              element.logicalTest.map((el, id) => 
             <div>
             <p key={id}>{el.question} </p>
             <div>
             <input key={id} value={el.a[1]} type= "radio" name={el.question[0]}/>
             <label key={id}>{el.b[0]}</label>
             </div>
             <div>
             <input key={id} value={el.b[1]} type= "radio" name={el.question[0]}/>
             <label key={id}>{el.c[0]}</label>
             </div>
             <div>
             <input key={id} value={el.c[1]} type= "radio" name={el.question[0]}/>
             <label key={id}>{el.d[0]}</label>
             </div>
             </div>
             ))}
            <Link to="testtwo">
              <button>START TEST 2</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testone;
