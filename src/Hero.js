import React, { Component } from 'react';
import './App.css';

class Hero extends Component {
  // Below was testing linking through button componets

  render() {
    return (
      <div class="heroBanner">
        <img
          class="heroImg"
          src={this.props.img}
        />
        <div class="hero-text">
          <h1>{this.props.title}</h1>
          <p>{this.props.desc}</p>
          <button>Learn More</button>
        </div>
      </div>
      );
  }
}


export default Hero;
