import React, { Component } from 'react'
import "./Contacts.css";


export default class Contacts extends Component {
  render() {
    return (
      <div>
          <link rel="stylesheet" href="/stylesheets/contacts.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" />

          <div className="middle">
            <a className="btnCtn" href="https://pt-pt.facebook.com/theironhack/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btnCtn" href="https://twitter.com/ironhack">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btnCtn" href="https://www.instagram.com/ironhacklisb/">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btnCtn" href="https://www.ironhack.com/pt">
              <i className="fab fa-">WWW</i>
            </a>
          </div>
      </div>
    )
  }
}
