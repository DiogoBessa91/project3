import React, { Component } from "react";
import "./Services.css";
import $ from 'jquery'
import Swiper from 'swiper';

export default class Profile extends Component {

  componentDidMount = () => {
    $(document).ready(function () {
      var mySwiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });
    })
  }

  render() {
    return (
      <div>
        <div className="blog-slider">
          <div className="blog-slider__wrp swiper-wrapper">
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">26 December 2019</span>
                <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                <div className="blog-slider__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?{" "}
                </div>
                <a href="#" className="blog-slider__button">
                  Editar
                </a>
              </div>
            </div>
            <div className="blog-slider__item swiper-slide">
              <div className="blog-slider__img">
                <img
                  src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="blog-slider__content">
                <span className="blog-slider__code">26 December 2019</span>
                <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                <div className="blog-slider__text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae voluptate repellendus magni illo ea animi?
                </div>
                {/* <a href="#" className="blog-slider__button">
                  READ MORE
                </a> */}
              </div>
            </div>

          </div>
          <div className="blog-slider__pagination" />
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css" rel="stylesheet" />

      </div>
    );
  }
}
