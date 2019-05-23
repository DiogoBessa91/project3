import React, { Component } from 'react'
import "./Events.css";


export default class Events extends Component {
  
  render() {

    return (
      <div>

<div className="boxesContainer">

  <div className="cardBox">
    <div className="card">
      <div className="front">
        <h3>Card One</h3>
        <img src="./images/fox.jpeg" width="100%"></img>
      </div>
      <div className="back">
        <h3>Back Side One</h3>
        <p>Content in card one</p>
        <a href="#">Button 1</a>
      </div>
    </div>
  </div>


</div>
      </div>
    )
  }
}
