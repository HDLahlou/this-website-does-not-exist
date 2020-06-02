import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  // Below was testing linking through button componets
  render() {
      let img = "left"
      let desc = "right"
      let color = '#F5F5F5'
      if(this.props.format === 1){
        img = "right"
        desc = "left"
        color = "white"
      }
    return (
        <div class="container" style={{background: color}}>
            <div class={img}>
                <img class="contentImg" src={this.props.img} />
            </div>
            <div class={desc}>
              <h1 class="center">{this.props.title}</h1>
              <p class="center blockTxt">{this.props.desc}</p>
            </div>
        </div>
    );
  }
}

export default Content;
