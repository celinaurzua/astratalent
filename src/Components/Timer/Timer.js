import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  visible =this.props.visible

  render() {
    const {hours, minutes, seconds } = this.state
    return (
      <div>
        <h1>{hours}:{ minutes }:{ seconds }</h1>
      </div>
    )
  }
  
  UNSAFE_componentWillReceiveProps=(visible)=> {
    if(visible){
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state
      if (seconds < 60) {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1
        }))
      }
      if (seconds === 60) {
        if (minutes === 60) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes + 1,
            seconds: 0
          }))
        }
      }
    }, 1000)
  } 
}
}
