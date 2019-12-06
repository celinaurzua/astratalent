import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';
import menuTestTwo from '../Images/menu-dos.png';


class Testtwo extends Component {
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
          <p className="title">Test de técnico</p>
          <img src={menuTestTwo} alt="" />
          <div>
            <p></p>
                <button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
          <Timer visible={this.state.visible} />
            <Link to="testthree">
              <button>START TEST 2</button>
            </Link>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default Testtwo;