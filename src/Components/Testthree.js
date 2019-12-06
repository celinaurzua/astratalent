import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


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
        <Header/>
          <p>Test de Código</p>
          <button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
          <Timer visible={this.state.visible} />
          <Link to="testfeedback">
          <button>}>FINISH</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testthree;