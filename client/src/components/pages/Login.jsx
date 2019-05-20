import React, { Component } from 'react';
import api from '../../api';
import './Login.css'


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
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
    api.login(this.state.username, this.state.password)
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

    <h2 class="active"> Login </h2>


    <form>
      <input type="text" id="login" class="fadeIn second" value={this.state.username} name="username" onChange={this.handleInputChange}  placeholder="login" />
      <input type="text" id="password" class="fadeIn third" value={this.state.password} name="password" onChange={this.handleInputChange} placeholder="password" />
      <input type="submit" class="fadeIn fourth" value="Login" onClick={(e) => this.handleClick(e)} />
    </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}



    <div id="formFooter">
      <a class="underlineHover" href="/Login">Forgot your password?</a>
    </div>

  </div>
</div>
    );
  }
}
