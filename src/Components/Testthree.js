import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';
import menuTree from '../Images/menu-tres.png';


class Testthree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
    }
  }

  AlertStartTest=()=> {
    alert("XXXXX")
    this.setState({
      visible:true,
    })
   }

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