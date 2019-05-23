import React, { Component } from "react";
import "./Services.css";


export default class Profile extends Component {

  render() {
    return (
          <div>
<aside class="profile-card">
  
  <header>
    <a href="http://themeforest.net/user/surjithctly">
      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/oykun/128.jpg"/>
    </a>

    <h1>Johnathan Doe</h1>
    <h2>Freelance Designer</h2>
  </header>
  <div class="profile-bio">
    <p>Web designer with over 6 years experience in designing and developing outstanding products for web and mobile.</p>
  </div>
  <ul class="profile-social-links">
    <li>
      <a href="https://twitter.com/surjithctly">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
      </a>
    </li>
    <li>
      <a href="http://themeforest.net/surjithctly">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
      </a>
    </li>
    <li>
      <a href="https://codepen.io/surjithctly">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
      </a>
    </li>
  </ul>
  
</aside>
          </div>
    );
      }}