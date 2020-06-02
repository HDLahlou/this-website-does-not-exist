import React, { Component } from 'react';
import './App.css';

class Team extends Component {
  // Below was testing linking through button componets
  render() {
    let totalWidth = 80;
    let sectionWidth = totalWidth/this.props.size;
    let fourthWidth = sectionWidth/4;
    let imgWidth = sectionWidth-fourthWidth + '%';
    let content = []
    let desc = [];
    if(this.props.pplText[0].key !== ""){
        for(let i = 0; i < this.props.size; i++){
            let key1 = i + 'img'
            let key2 = i + 'desc'
            content.push(
                <img  key={key1} width={imgWidth} class="ppl pplImg" src={this.props.ppl[i]}/>
            )
            desc.push(
                <div key={key2} class="ppl" style={{ width: imgWidth}} >
                    <h2 class="pplTitle">{this.props.pplText[i].key}</h2>
                    <p class="pplDesc">{this.props.pplText[i].val}</p>
                </div>
            )
        }
    }
    return (
        <div class='container'>
            <div class="peopleFlex">
                {content}
            </div>
            <div class="peopleFlex">
                {desc}
            </div>
        </div>
    );
  }
}


export default Team;
