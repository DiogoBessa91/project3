import React, { Component } from "react";
import "./Profile.css";

import $ from "jquery";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nbOfLikes: 0
    };
    this.colors = ['purple','blue','green','yellow','orange','red']

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount = () => {
    $(document).ready(function() {
      $(".menu-container").hover(
        function() {
          $(".profile-actions").slideDown("fast");
          $(".list-icon").addClass("active");
        },
        function() {
          $(".profile-actions").slideUp("fast");
          $(".list-icon").removeClass("active");
        }
      );
      $(".profile-card").mouseleave(function() {
        $(".profile-actions").slideUp("fast");
        $(".profile-info").slideUp("fast");
        $(".profile-map").slideUp("fast");
      });

      $(".profile-avatar").hover(
        function() {
          $(".profile-links").fadeIn("fast");
        },
        function() {
          $(".profile-links").hide();
        }
      );
      $(".read-more").click(function() {
        $(".profile-map").slideUp("fast");
        $(".profile-info").slideToggle("fast");
        return false;
      });
      $(".view-map").click(function() {
        $(".profile-info").slideUp("fast");
        $(".profile-map").slideToggle("fast");
        return false;
      });
    });
  };

 


handleClick() {
  this.setState(prevState => ({
    nbOfLikes: prevState.nbOfLikes+1
  }));
}
  render() {
    return (
      <div className="profile-card">
        <div className="profile-cover">
          <div className="profile-avatar">
            <div className="btns-container">
              <div className="profile-links">
                <a className="read-more" href="#">
                  <img src="https://dl.dropboxusercontent.com/s/62dfoo9h44o58lw/more.png" />
                </a>
                <a className="view-map" href="#">
                  <img src="https://dl.dropboxusercontent.com/s/9ofmihok0h64lvn/location.png" />
                </a>
              </div>
            </div>
            <a href="#">
              <img
                src="/images/fox.jpeg"
                alt="Anis M"
              />
            </a>
          </div>
          <div className="profile-details">
            <h1>Anis M</h1>
            <h6>@anismashku</h6>
          </div>
        </div>
        <div className="profile-info" style={{display: "none"}}>
          <h1>About Me</h1>
          <div className="info-area">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </div>
          <div className="clear" />
        </div>
        <div className="profile-map" style={{display: "none"}} >
          <iframe
            width={"100%"}
            height={"150"}
            frameborder={"0"}
            scrolling={"no"}
            marginheight= {0}
            marginwidth= {0}
            src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Saveology+New+York&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=40.052282,86.572266&amp;t=h&amp;ie=UTF8&amp;hq=Saveology&amp;hnear=New+York&amp;ll=40.552027,-74.420902&amp;spn=0.357117,0.912844&amp;iwloc=near&amp;output=embed"
          />
          <div className="clear" />
          </div>
          <br/>
          <button className="btn btn-danger"
        onClick={this.handleClick}
        style={{
          backgroundColor: this.colors,
          color: 'white',
        }}>
        {this.state.nbOfLikes}
        {' '}
        Like{this.state.nbOfLikes !== 1 && 's'}
      </button>
          </div>
    );
      }}