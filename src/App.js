import React, { Component } from 'react';
import './App.css';
import Content from './Content.js'
import Hero from './Hero.js'
import Team from './Team.js'
import data from  './resources/text.json'
// Local Images
import heroImg11 from './resources/web1/heroBanner1.jpeg'
import heroImg12 from './resources/web1/heroBanner2.jpeg'
import heroImg21 from './resources/web2/heroBanner1.jpeg'
import heroImg22 from './resources/web2/heroBanner2.jpeg'
import heroImg31 from './resources/web3/heroBanner1.jpeg'
import heroImg32 from './resources/web3/heroBanner2.jpeg'
import content11 from "./resources/web1/content1.jpeg"
import content12 from "./resources/web1/content2.jpeg"
import content13 from "./resources/web1/content3.jpeg"
import content14 from "./resources/web1/content4.jpeg"
import content15 from "./resources/web1/content5.jpeg"
import content16 from "./resources/web1/content6.jpeg"
import content17 from "./resources/web1/content7.jpeg"
import content18 from "./resources/web1/content8.jpeg"
import content19 from "./resources/web1/content9.jpeg"
import content21 from "./resources/web2/content1.jpeg"
import content22 from "./resources/web2/content2.jpeg"
import content23 from "./resources/web2/content3.jpeg"
import content24 from "./resources/web2/content4.jpeg"
import content25 from "./resources/web2/content5.jpeg"
import content26 from "./resources/web2/content6.jpeg"
import content27 from "./resources/web2/content7.jpeg"
import content28 from "./resources/web2/content8.jpeg"
import content29 from "./resources/web2/content9.jpeg"
import content31 from "./resources/web3/content1.jpeg"
import content32 from "./resources/web3/content2.jpeg"
import content33 from "./resources/web3/content3.jpeg"
import content34 from "./resources/web3/content4.jpeg"
import content35 from "./resources/web3/content5.jpeg"
import content36 from "./resources/web3/content6.jpeg"
import content37 from "./resources/web3/content7.jpeg"
import content38 from "./resources/web3/content8.jpeg"
import content39 from "./resources/web3/content9.jpeg"
import ppl1 from "./resources/people/person1.jpeg"
import ppl2 from "./resources/people/person2.jpeg"
import ppl3 from "./resources/people/person3.jpeg"
import ppl4 from "./resources/people/person4.jpeg"
import ppl5 from "./resources/people/person5.jpeg"
import ppl6 from "./resources/people/person6.jpeg"
import ppl7 from "./resources/people/person7.jpeg"
import ppl8 from "./resources/people/person8.jpeg"
import ppl9 from "./resources/people/person9.jpeg"
import ppl10 from "./resources/people/person10.jpeg"





export default class App extends Component<{}> {
  state = {
    // State
    web: 0,
    content: 0,
    images: [],
    text: [{key: "", val: ""}],
    ppl: [],
    pplText: [{key: "", val: ""}],
    hero: '',
    route: '',
    heroTitle: "",
    heroDesc: "",

    // Const
    web1Title:'Construction Company',
    web1Desc: ' The process of synthesizing and synthesizing iron was an expensive process so expensive',
    web2Title: "Pizza Resturant",
    web2Desc: "Romeo Crab is a snack being prepared by the chef",
    web3Title: "Nature Services",
    web3Desc: "Provided daily audits of visitors"
  };

  // inclusive
  between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

  betweenNUnique(min, max, n){
    if((max-min) > n){
      var arr = [];
      while(arr.length < n){
        var r = this.between(min, max);
        if(arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;
    } else{
      return [];
    }

  }

  componentWillUnmount() {
  }

  componentDidMount() {
    let webVal = this.between(1,3);
    let heroVal = this.between(1,2);
    let amountContent = this.between(3,4);
    let amountPpl = this.between(3,4);

    console.log(heroVal)
    let imgs = this.betweenNUnique(0, 8, amountContent);
    let textDesc = this.betweenNUnique(0,5, amountContent);
    let ppl = this.betweenNUnique(0,9, amountPpl);

    let route = ""
    let heroTitle = ""
    let heroDesc = ""
    let heroImg;
    let imgImp = []
    let imgDB = []
    let textImp = []
    let pplImp = []
    let pplDescImp = [{key: "President", val: data[0]["President"][webVal-1]}];

    switch (webVal) {
      case 1:
        route = "./resources/web1"
        heroTitle = this.state.web1Title
        heroDesc = this.state.web1Desc
        if(heroVal === 1){
          heroImg = heroImg11
        } else {
          heroImg = heroImg12
        }
        imgDB = [content11, content12, content13, content14, content15, content16, content17, content18, content19]
        break;
      case 2:
        route = "./resources/web2"
        heroTitle = this.state.web2Title
        heroDesc = this.state.web2Desc
        if(heroVal === 1){
          heroImg = heroImg21
        } else {
          heroImg = heroImg22
        }
        imgDB = [content21, content22, content23, content24, content25, content26, content27, content28, content29]
        break;
      case 3:
        route = "./resources/web3"
        heroTitle = this.state.web3Title
        heroDesc = this.state.web3Desc
        if(heroVal === 1){
          heroImg = heroImg31
        } else {
          heroImg = heroImg32
        }
        imgDB = [content31, content32, content33, content34, content35, content36, content37, content38, content39]
        break;
    
      default:
        route = "./resources/web1"
        heroTitle = this.state.web1Title
        heroDesc = this.state.web1Desc
        if(heroVal === 1){
          heroImg = heroImg11
        } else {
          heroImg = heroImg12
        }
        imgDB = [content11, content12, content13, content14, content15, content16, content17, content18, content19]
        break;
    }

    imgs.forEach( val => {
      imgImp.push(imgDB[val]);
    })
    
    let keys = Object.keys(data[webVal])
    textDesc.forEach( val => {
      textImp.push({key: keys[val], val: data[webVal][keys[val]]})
    })

    let pplDB = [ppl1, ppl2, ppl3, ppl4, ppl5, ppl6, ppl7, ppl8, ppl9, ppl10]
    let keysPpl = data[0].titles
    ppl.forEach( val => {
      pplImp.push(pplDB[val])
      pplDescImp.push({key: keysPpl[Math.floor(val/2)], val: data[0][keysPpl[Math.floor(val/2)]][webVal-1]})
    })

    


    this.setState((prevState, props) => {
      return {
        web: webVal,
        content: amountContent,
        images: imgImp,
        text: textImp,
        ppl: pplImp,
        pplText: pplDescImp,
        hero: heroImg,
        route: route,
        heroTitle: heroTitle,
        heroDesc: heroDesc,
      }
    })

  }

  componentWillMount() {
  }

  // ===========FUNCTIONS FOR PRODUCTION FRONT END DISPLAY===========


  // ======================
  // RENDER
  render() {
    let {content,images, text, ppl, pplText, hero, route, heroTitle, heroDesc} = this.state
    let contentArray = []
    if(content > 0){
      for(let i = 1; i < content; i++){
        let form = i%2
        let key = `content${i}`
        contentArray.push(
        <Content
          key={key}
          format={form}
          img={images[i]}
          title={text[i].key}
          desc={text[i].val}
          />)
      }
    }
    return (
      <div>
        <Hero title={heroTitle} desc={heroDesc} img={hero}/>
        <Content
          format={0}
          img={images[0]}
          title={text[0].key}
          desc={text[0].val}
          />
        <Team size={4} ppl={ppl} pplText={pplText}/>
        {contentArray}
      </div>
    );
  }
}
