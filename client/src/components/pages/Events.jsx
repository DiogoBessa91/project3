import React, { Component } from 'react'
import $ from 'jquery'
import "./Events.css";


export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    $('.flip').hover(function(){
      $(this).find('.card').toggleClass('flipped');

});
  };
  
  render() {

    return (
      <div>
        <div className="eventTitle">
        <h1>Eventos</h1>
        </div>
        <div class="container">
          <div class="row">
          <div class="col-sm-3">
            <div class="flip">
              <div class="card"> 
                <div class="face front"> 
                  <div class="inner">   
                    <img src="https://ingasteren.nl/wp-content/uploads/2018/06/BBQ-450x300.jpg" />
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" >Know More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
