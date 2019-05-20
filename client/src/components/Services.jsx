import React, { Component } from "react";
import "./card.scss";
import $ from "jquery";

export default class Services extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    $("ul.cards").on("click", function() {
      $(this).toggleClass("transition");
    });

    $("ul.card-stacks").on("click", function() {
      $(this).toggleClass("transition");
    });
  };

  render() {
    return (
      <div className="services">
        <ul class="card-stacks">
          <li class="title">
            <h2>Serviços</h2>
          </li>
          <li class="stack stack-1">
            <ul class="cards-down">
              <li class="card card-1">
                <img src="http://lorempixel.com/401/250/city" />
                <div class="content">
                  <h1>Card 1 Title</h1>
                  <p>Stack 1</p>
                </div>
              </li>
              <li class="card card-2">
                <img src="http://lorempixel.com/401/250/food" />
                <div class="content">
                  <h1>Card 2 Title</h1>
                  <p>Stack 1</p>
                </div>
              </li>
              <li class="card card-3">
                <img src="http://lorempixel.com/401/250/animals" />
                <div class="content">
                  <h1>Card 3 Title</h1>
                  <p>Stack 1</p>
                </div>
              </li>
            </ul>
          </li>
          <li class="stack stack-2">
            <ul class="cards-down">
              <li class="card card-1">
                <img src="http://lorempixel.com/402/250/city" />
                <div class="content">
                  <h1>Card 1 Title</h1>
                  <p>Stack 2</p>
                </div>
              </li>
              <li class="card card-2">
                <img src="http://lorempixel.com/402/250/food" />
                <div class="content">
                  <h1>Card 2 Title</h1>
                  <p>Stack 2</p>
                </div>
              </li>
              <li class="card card-3">
                <img src="http://lorempixel.com/402/250/animals" />
                <div class="content">
                  <h1>Card 3 Title</h1>
                  <p>Stack 2</p>
                </div>
              </li>
            </ul>
          </li>
          <li class="stack stack-3">
            <ul class="cards-down">
              <li class="card card-1">
                <img src="http://lorempixel.com/403/250/city" />
                <div class="content">
                  <h1>Card 1 Title</h1>
                  <p>Stack 3</p>
                </div>
              </li>
              <li class="card card-2">
                <img src="http://lorempixel.com/403/250/food" />
                <div class="content">
                  <h1>Card 2 Title</h1>
                  <p>Stack 3</p>
                </div>
              </li>
              <li class="card card-3">
                <img src="http://lorempixel.com/403/250/animals" />
                <div class="content">
                  <h1>Card 3 Title</h1>
                  <p>Stack 3</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
