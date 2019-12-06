import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import menuFeedback from '../Images/menu-cuatro.png';

class Testfeedback extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="cointenerTest">
          <p className="title">Feedback</p>
          <img src={menuFeedback} alt="" />

          <div>
            <p></p>

            <Link to="testbye">
              <button>SEND FEEDBACK</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Testfeedback;