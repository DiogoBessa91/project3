import React, { Component } from 'react';
import api from '../../api';
import './Login.css'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (

      <div class="wrapper fadeInDown">
  <div id="formContent">

    <h2 class="active"> Signup </h2>


    <form>
      <input type="text" id="login" class="fadeIn second" value={this.state.username} name="username" onChange={this.handleInputChange}  placeholder="login" />
      <input type="text" id="password" class="fadeIn third" value={this.state.password} name="password" onChange={this.handleInputChange} placeholder="password" />
      <input type="submit" class="fadeIn fourth" value="Signup" onClick={(e) => this.handleClick(e)} />
    </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}



    <div id="formFooter">
      <a class="underlineHover" href="/Login">Already have an acount?</a>
    </div>

  </div>
</div>








    );
  }
}