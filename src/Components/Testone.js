import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';
import menuTestOne from '../Images/menu-uno.png';


class Testone extends Component {
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
          <p className="title">Test de lógica</p>
          <img src={menuTestOne} alt="" />

          <div>
            <p></p>
<button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
<Timer visible={this.state.visible} />
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