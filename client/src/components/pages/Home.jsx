import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div className="Home">
      <img src="/images/fundacao.png" width="60%" height="60%"/>
      <br/>
      <div className="Homebtn"> 
      <Button outline color="warning" href="/Login">Login</Button>
      <Button outline color="warning" href="/Signup">Signup</Button>
      </div>
      </div>
    );
  }
}
