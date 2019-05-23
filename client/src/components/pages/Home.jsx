import React, { Component } from 'react';
import './Home.css'

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {                
    return (
      <div class="wrap">
        <div class="wrap-inner">
		      <div class="container-box">		    
			
        <div class="box" id="b1">
          <div class="wall-1"></div>
          <div class="wall-2"></div>
          <div class="wall-3"></div>
          <div class="wall-4"> </div>
          <div class="wall-5">
            <span class="box-logo">1</span>
          </div>
          <div class="wall-6">
            <span class="box-logo">A</span>
          </div>

          {/* <p class="info"></p> */}
        </div>			
				
        <div class="box" id="b2">
          <div class="wall-1"></div>
          <div class="wall-2"></div>
          <div class="wall-3"></div>
          <div class="wall-4">

          </div>
          <div class="wall-5">
            <span class="box-logo pers">2</span>
          </div>
          <div class="wall-6">
            <span class="box-logo">B</span>
          </div>	
          {/* <p class="info"></p>			 */}
        </div>

        <div class="box" id="b3">
          <div class="wall-1"></div>
          <div class="wall-2"></div>
          <div class="wall-3"></div>
          <div class="wall-4">

          </div>
          <div class="wall-5">
            <span class="box-logo">3</span>
          </div>
          <div class="wall-6">
            <span class="box-logo">C</span>
          </div>

          {/* <p class="info"></p> */}
        </div>		

			        <div class="box" id="b4">
          <div class="wall-1"></div>
          <div class="wall-2"></div>
          <div class="wall-3"></div>
          <div class="wall-4"></div>
          <div class="wall-5">
            <span class="box-logo">4</span>
          </div>
          <div class="wall-6">
            <span class="box-logo">D</span>
          </div>
            {/* <p class="info"></p> */}
        </div>

			        <div class="box" id="b5">
          <div class="wall-1"></div>
          <div class="wall-2"></div>
          <div class="wall-3"></div>
          <div class="wall-4"></div>
          <div class="wall-5">
            <span class="box-logo">5</span>
          </div>
          <div class="wall-6">
            <span class="box-logo">E</span>
          </div>
				          {/* <p class="info"></p> */}
			        </div>	
			
		      </div>
          </div>
	    </div>
    );
  }
}
