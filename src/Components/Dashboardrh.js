import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/HR.css";
import Header from "./Header";

class Dashboardrh extends Component {
  render() {
    return (
      <div>
        <Header />
        <p className="title">Welcome!</p>
        <div className="containerForm">
          <p className="nameApplicant">Add a new applicant</p>
          <p>Name</p>
          <input
            className="inputsForm"
            type="text"
            placeholder="Introduce applicant name"
          ></input>
          <p>E-mail</p>
          <input
            className="inputsForm"
            type="text"
            placeholder="Introduce applicant email"
          ></input>
          <p>Phone Number</p>
          <input
            className="inputsForm"
            type="text"
            placeholder="Introduce applicant phone"
          ></input>
          <p>Vacant</p>
          <select className="inputsForm" type="text">
            <option value="block">Possition level</option>
            <option value="Junior">Junior</option>
            <option value="Medium">Medium</option>
            <option value="Senior">Senior</option>
          </select>
          <button className="buttonAdd">+</button>
        </div>

        <div className="containerTalent">
          <div>
            <p className="nameApplicant">Julia Montiel</p>
          </div>
          <div className="order">
            <div className="test">
              <p className="testGreen">1</p>
              <p>Test 1</p>
            </div>
            <div className="test">
              <p className="testGreen">2</p>
              <p>Test 2</p>
            </div>
            <div className="test">
              <p className="testGreen">3</p>
              <p>Test 3</p>
            </div>
          </div>
          <div className="orderButtons">
            <Link to="statistics" className="">
              <button className="buttonsStadistics">Stadistics</button>
            </Link>
            <Link>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="containerTalent">
          <div>
            <p>Emma Flores</p>
          </div>
          <div className="order">
            <div className="test">
              <p className="testRed">1</p>
              <p>Test 1</p>
            </div>
            <div className="test">
              <p className="testGreen">2</p>
              <p>Test 2</p>
            </div>
            <div className="test">
              <p className="testGreen">3</p>
              <p>Test 3</p>
            </div>
          </div>
          <div className="orderButtons">
            <Link to="statistics" className="">
              <button className="buttonsStadistics">Stadistics</button>
            </Link>
            <Link>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="containerTalent">
          <div>
            <p>Miranda Carrillo</p>
          </div>
          <div className="order">
            <div className="test">
              <p className="testYellow">1</p>
              <p>Test 1</p>
            </div>
            <div className="test">
              <p className="testYellow">2</p>
              <p>Test 2</p>
            </div>
            <div className="test">
              <p className="testRed">3</p>
              <p>Test 3</p>
            </div>
          </div>
          <div className="orderButtons">
            <Link to="statistics" className="">
              <button className="buttonsStadistics">Stadistics</button>
            </Link>
            <Link>
              <span>
                <i class="fas fa-star"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboardrh;
