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
            <span class="box-logo">1</span>
          </div>

          <p class="info">HTML5 | JADE | Bootstrap </p>
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
            <span class="box-logo">2</span>
          </div>	
          <p class="info">css3 | sass | sass compass </p>			
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
            <span class="box-logo">3</span>
          </div>

          <p class="info">jQuery Ui</p>
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
            <span class="box-logo">4</span>
          </div>
            <p class="info">svg</p>
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
            <span class="box-logo">5</span>
          </div>
				          <p class="info">Landing page design | Mock Up card | Ретушь фото </p>
			        </div>	
			
		      </div>
          </div>
	    </div>
    );
  }
}
