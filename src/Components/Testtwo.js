import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timer from '../Components/Timer/Timer'
import Header from './Header';
import Footer from './Footer';


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
        <Header/>
          <p>Test Teórico</p>
          <button onClick={() => this.AlertStartTest()}>Iniciar Test</button>
          <Timer visible={this.state.visible} />
          <Link to="testthree">
          <button>START TEST 3</button>
          </Link>
          <Footer/>
      </div>
    );
  }
}

export default Testtwo;