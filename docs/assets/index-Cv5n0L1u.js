(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function g(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=g(t);fetch(t.href,e)}})();class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --button-background-size: 40px;
        --button-width: 30px;
        --font-size: 0.8rem;
      }

      .container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        justify-items: center;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
      }
    
      .logo{
        font-family: "Pretendo";
        position: relative;
        font-size: var(--font-size);
        color: var(--logo-color);
      }

      .logo-r{
        color: var(--logo-color);
        position: absolute;
        font-size: var(--font-size);
      }

      .buttons-container{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        column-gap: 5px;
      }

      .button-background{
        width: var(--button-background-size);
        height: var(--button-background-size);
        background-color: var(--background-color);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 
          3px 3px 4px rgba(0, 0, 0, 0.2),
          1px -1px 4px rgba(104, 104, 104, 0.8);
        position: relative;
        border: 1px ridge black;

        .button{
          width: var(--button-width);
          height: var(--button-width);
          border-radius: 50%;
          background-color: var(--button-color);
          box-shadow:
          inset 1px 2px 2px #1E0606;
          cursor: pointer;
        }

        .button::before {
          content: "";
          display: block;
          width: calc(var(--button-width) * 0.8);
          height: calc(var(--button-width)* 0.8);
          border-top: 2px solid #fff7;
          border-radius: 50%;
          position: absolute;
            top: 20%;
            left: 20%;
          transform: rotate(-40deg);
        }
      }

      .a-button::after,
      .b-button::after{
        font-family: "Pretendo";
        font-size: var(--font-size);
        position: absolute;
        color: var(--button-color);
        transform: translateY(200%) translateX(140%);
      }

      .a-button::after{
        content: "A";
      }
      
      .b-button::after{
        content: "B";
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <section class="container">
      <p><span class="logo">Nintendo</span><span class="logo-r">&#174;</span></p>
      <div class="buttons-container">
        <div class="button-background b-button">
          <button class="button"></button>
        </div>
        <div class="button-background a-button">
          <button class="button a-content"></button>
        </div>
      </div>
    </section>
    `}}customElements.define("right-buttons",i);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host{
        --button-size: 72px;
      }

      button {
        all: unset;
        display: inline-block;
        cursor: pointer;
      }

      .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .buttons{
        // margin-top: 10px;
        width: var(--button-size);
        height: var(--button-size);
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: gray;
        cursor: pointer;
      }

      .top-button,
      .right-button,
      .bottom-button,
      .left-button{
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
      }

      .top-button{
        grid-row: 1;
        grid-column: 2;
        border-width: 2px 2px 0 2px;
        border-style: solid;
        border-color: white;
        border-radius: 5px 5px 0 0;
      }

      .right-button{
        grid-row: 2;
        grid-column: 3;
        border-width: 2px 2px 2px 0;
        border-style: solid;
        border-color: white;
        border-radius: 0 5px 5px 0;
      }

      .bottom-button{
        grid-row: 3;
        grid-column: 2;
        border-width: 0 2px 2px 2px;
        border-style: solid;
        border-color: white;
        border-radius: 0 0 5px 5px;
      }
      
      .left-button{
        width: 100%;
        grid-row: 2;
        grid-column: 1;
        border-width: 2px 0 2px 2px;
        border-style: solid;
        border-color: white;
        border-radius: 5px 0 0 5px;
      }

      .center-button{
        width: 100%;
        height: 100%;
        grid-row: 2;
        grid-column: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .center-circle{
        width: 70%;
        height: 70%;
        margin-inline-start: 3px;
        background-color: black;
        border-radius: 50%;
        border: 2px groove gray;
        box-shadow: -2px -1px 4px white inset,
          2px 1px 7px black inset;
      }

      .top-button-movement{
        width: 88%;
        border-width: 3px 2px 0 2px;
        border-style: groove;
        border-color: gray;
        border-radius: 2px;
      }

      .top-button-movement:active{
        border-color: black;
      }
      
      .right-button-movement{
        width: 100%;
        height: 90%;
        border-width: 3px 2px 2px 0;
        border-style: groove;
        border-color: gray;
        border-radius: 2px;
      }

      .right-button-movement:active{
        border-color: black;
      }
      
      .bottom-button-movement{
        width: 100%;
        height: 90%;
        border-width: 0 2px 2px 2px;
        border-style: groove;
        border-color: gray;
        border-radius: 2px;
      }

      .bottom-button-movement:active{
        border-color: black;
      }

      .left-button-movement{
        margin-inline-start: 1px;
        width: 105%;
        border-width: 3px 0 2px 2px;
        border-style: groove;
        border-color: gray;
        border-radius: 2px;
      }

      .left-button-movement:active{
        border-color: black;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="container">
      <div class="buttons">
        <div class="top-button">
          <button class="top-button-movement">🡅</button>
        </div>
        <div class="right-button">
          <button class="right-button-movement">🡆</button>
        </div>
        <div class="center-button">
          <div class="center-circle"></div>
        </div>
        <div class="bottom-button">
          <button class="bottom-button-movement">🡇</button>
        </div>
        <div class="left-button">
          <button class="left-button-movement">🡄</button>
        </div>
      </div>
    </div>
    `}}customElements.define("left-buttons",n);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --line-decoration-height: 15.64px;
        --button-width: 28.6px;
        --button-height: 5px;
        --line-menu-height: 37px;
      }

      .menu-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    
      .line-decoration{
        background-color: var(--center-decoration-color);
        height: var(--line-decoration-height);
        width: 100%;
        border-radius: 5px;
        border: 1px solid var(--center-decoration-color);

        &:first-child{
          border-radius: 0 0 10px 10px;
        }
        
        &:last-child{
          border-radius: 10px 10px 0 0;
          height: 15px;
        }
      }

      .line-menu{
        height: var(--line-menu-height);
        width: 100%;
        background-color: var(--central-button-background);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .menu{
        height: 83%;
        width: 92%;
        border: 1px solid gray;
        border-radius: 4px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 
          2px 2px 4px #333 inset,
          -2px -2px 3px white inset;
      }

      .button{
        height: var(--button-height);
        width: var(--button-wodth);
        border-radius: 35%;
        background-color: var(--movement-button-color);
        box-shadow:
          0 2px 0 1px #575757,
          0 0 8px #575757 inset,
          4px 0 6px #575757 inset;
          cursor: pointer;
      }

      .text-decoration{
        width: 100%;
        height: 100%;
        color: var(--button-color);
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .text-menu{
        font-family: "Pretendo";
        font-weight: bold;
        font-size: .5rem;
        margin-block-start: 8%;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <section class="menu-container">
      <div class="line-decoration"></div>
      <div class="line-decoration"></div>
      <div class="line-decoration">
        <div class="text-decoration">
          <p class="text-menu">SELECT</p>
          <p class="text-menu">START</p>
        </div>
      </div>
      <div class="line-menu">
        <div class="menu">
          <button class="button"></button>
          <button class="button"></button>
        </div>
      </div>
      <div class="line-decoration"></div>
    </section>
    `}}customElements.define("menu-buttons",s);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --button-color: #c9221e;
        --central-background: #313131;
        --background-color: #cdccd2;
        --logo-color: #b24443;
        --movement-button-color: #020302;
        --center-decoration-color: #a3a49d;
        --central-button-background: #B2B2B2;

        // --width: 568px;
        // --width: 284px;
        --width: 379px;
        // --height: 243px;
        // --height: 122px;
        --height: 162px;
        
        position: relative;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background-color: var(--background-color);
        border-radius: 3px 3px 5px 5px;
        display: flex;
        justify-content: center;
      }
    
      .main-layout{
        width: 94.7%;
        height: 77.78%;
        background-color: var(--central-background);
        position: relative;
        margin-top: 6.5%;
        display: grid;
        grid-template-columns: 4fr 4fr 4fr 1fr;
        border-radius: 5px;
        box-shadow: 1px 1px 3px #222;
      }

      .top{
        position: absolute;
        top: -50px;
        perspective: 1000px;
        transform-style: preserve-3d;
      }

      .top-controller{
        background: linear-gradient(to top, #888, #555);
        width: var(--width);
        height: 50px;
        border-radius: 5px 5px 0 0;
        transform-origin: 50% 100%;
        transform: rotateX(80deg);
      }

      .top-controller::before {
        content: "";
        width: 30px;
        height: 30px;
        background-color: #444;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 28%;
        transform: translate(-50%, -50%);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <article class="container">
      <div class="top">
        <div class="top-controller">
        </div>
      </div>
      <main class="main-layout">
        <left-buttons></left-buttons>
        <menu-buttons></menu-buttons>
        <right-buttons></right-buttons>
      </main>
    </article>
    `}}customElements.define("nes-controller",a);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 5%;
      }

      .button-background{
        width: 30%;
        height: 27%;
        background-color: black;
        border-radius: 10%;
        display: flex; 
        justify-content: center;
        align-items: center;
        margin-block-start: 15%;
      }

      .button{
        width: 95%;
        height: 85%;
        background-color: var(--gray-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .4rem;
        font-family: "Pretendo";
        color: red;
        border-width: 2px 1px 1px 1px;
        border-style: solid;
        border-color: black;
        box-shadow: 1px 1px 2px black, 1px 1px 2px gray inset;
      }

      .button:active{
        transform: scale(.98)
      }

      .light{
        width: 5.5%;
        height: 12.2%;
        // background-color: red;
        // border: 1px solid black;
        margin-block-start: 15%;
        box-shadow: 0 0 3px black inset;
        animation: lightChange 6s ease-in infinite;
      }

      @keyframes lightChange {
        0%{ 
          background-color: black;
        }
        40%{
          background-color: red;
          box-shadow: 0 0 1px red;
          border-radius: 30%;
        }
        60%{
          background-color: red;
          box-shadow: 0 0 1px red;
          border-radius: 30%;
        }
        100%{ 
          background-color: black;
          
        }
      }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <article class="container">
      <div class="light"></div>
      <div class="button-background">
        <button class="button">POWER</button>
      </div>
      <div class="button-background">
        <button class="button">RESET</button>
      </div>
    </article>
    `}}customElements.define("control-panel",l);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
        align-items: center;
      }

      .ports{
        grid-row: 2;
        width: 95%;
        height: 85%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid black;
        border-radius: 10%;
        box-shadow: 1px 1px 2px black inset;
        position: relative;
        margin-block-start: 11px;
      }

      .numbers{
        width: 100%;
        height: 15%;
        position: absolute;
        bottom: 100%;
        border: 1px solid black;
        border-radius: 10%;
        box-shadow: 1px 1px 2px black, -1px 0px 2px black ;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: red;
        font-size: .7rem;
        font-weight: bold;
      }

      .port-1,
      .port-2{
        width: 30px;
        height: 50px;
        border-radius: 5px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .holes-background{
        width: 95%;
        height: 95%;
        background-color: #000;
        clip-path: polygon(0 0, 50% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10%;
      }

      .holes{
        width: 80%;
        height: 80%;
        background-color: var(--black-color);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 1fr);
        padding: 1px;
        gap: 2px;
        clip-path: polygon(0 0, 50% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
      }

      .hole-1,
      .hole-2,
      .hole-3,
      .hole-4,
      .hole-5,
      .hole-6,
      .hole-7{
        width: 80%;
        height: 80%;
        background-color: var(--black-color);
        border-radius: 99999px;
        box-shadow: -1px -1px 5px black inset, 1px 1px 3px black inset;
        border: 1px solid black;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <article class="container">
      <section class="ports">
        <div class="numbers">
          <p>1</p>
          <p>2</p>
        </div>
        <div class="port-1">
          <div class="holes-background">
            <div class="holes">
              <div class="hole-1"></div>
              <div></div>
              <div class="hole-2"></div>
              <div class="hole-3"></div>
              <div class="hole-4"></div>
              <div class="hole-5"></div>
              <div class="hole-6"></div>
              <div class="hole-7"></div>
            </div>
          </div>
        </div>
        <div class="port-2">
          <div class="holes-background">
            <div class="holes">
              <div class="hole-1"></div>
              <div></div>
              <div class="hole-2"></div>
              <div class="hole-3"></div>
              <div class="hole-4"></div>
              <div class="hole-5"></div>
              <div class="hole-6"></div>
              <div class="hole-7"></div>
            </div>
          </div>
        </div>
      </section>
    </article>
    `}}customElements.define("port-panel",d);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        // justify-content: space-around;
        font-family: "Pretendo";
        font-size: .6rem;
        color: red;
        padding-inline-start: 15px;
        margin: 0;
      }

      .title{
        font-size: .7rem;
        margin-block-start: 1.2rem;
        margin-block-end: 0;
      }

      .subtitle{
        font-size: .5rem;
        margin: 0;
      }

      .tm{
        font-size: .25rem;
        position: absolute;
        transform: translateY(-10%);
      }

      .grip-tab{
        width: 20%;
        height: 5%;
        position: absolute;
        bottom: -3%;
        left: 40%;
        border-radius: 40%;
        background-color: var(--white-color);
        box-shadow: 0 0 1px black;
      }

      .registred-symbol {
        position: absolute;
        font-size: 1rem;
        color: red;
        font-weight: bold;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <article class="container">
      <div class="text">
        <p class="title">Nintendo<span class="registred-symbol">&#174;</span></p>
        <p class="subtitle">ENTERTAINMENT SYSTEM<span class="tm">TM</span></p>
        </div>
      <div class="grip-tab"></div>
    </article>
    `}}customElements.define("cartridge-door",c);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        position: absolute;
        top: -139.4%;
        perspective: 400px;
        transform-style: preserve-3d;
      }

      .container {
        width: VAR(--width);
        height: var(--top-height);
        background-color: var(--white-color);
        margin-block-end: 1px;
        border-radius: 5px 5px 0 0;
        transform-origin: 50% 100%;
        transform: rotateX(75deg);
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        position: relative;
      }

      .line {
        width: calc( var(--width) * 0.2008);
        height: 100%;
        background-color: green;
        position: absolute;
        right: 12.24%;
      }

      .back-black {
        width: 100%;
        height: 20%;
        background-color: var(--black-color);
      }

      .front-black {
        width: 100%;
        height: 20%;
        background-color: var(--black-color);
        position: absolute;
        bottom: 0;
        border: 1px solid black;
        border-inline-end: 0;
      }

      .lines {
        width: 100%;
        height: 60%;
        background-color: var(--white-color);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        box-shadow: 0 0 4px black inset;
      }

      .decoration {
        width: 96%;
        height: 10%;
        border: 2px solid black;
        box-shadow: -1px -1px 1px black inset;
      }

      .cartridge-door {
        width: 54.7%;
        height: 20%;
        position: absolute;
        bottom: 0;
        left: 12.5%;
        border-width: 3px 2px 0 2px;
        border-style: solid;
        border-color: black;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <article class="container">
      <div class="cartridge-door"></div>
      <div class="line">
        <div class="back-black"></div>
        <div class="lines">
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration"></div>
          <div class="decoration"></div>
        </div>
        <div class="front-black"></div>
      </div>
    </article>
    `}}customElements.define("top-console",p);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --white-color: #cdccd2;
        --black-color: #202020;
        --gray-color: #555;

        // --width: 968px;
        // --height: 336px;
        --width: 484px;
        --height: 168px;
        --top-height: 234px;
        --total-height: 402px;

        position: relative;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background-color: var(--background-color);
        border-radius: 3px 3px 5px 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
      }

      .top-front,
      .bottom-front{
        width: 100%;
        height: calc( var(--height) / 2);
      }

      .top-front{
        background-color: var(--white-color);
        position: relative;
        z-index: 2;
        border-top: 1px solid #eee;
      }

      .bottom-front{
        background-color: var(--gray-color);
        clip-path: polygon( 0 0, 100% 0, 100% 20%, 95% 100%, 5% 100%, 0% 20%, 0 0);
        position: relative;
        z-index: 2;
      }

      .cable-hole{
        width: calc( var(--width) * 0.2);
        height: 99.5%;
        background-color: var(--black-color);
        z-index: 10;
        position: absolute;
        right: 12%;
        bottom: 0;
        border: 1px solid black;
        border-width: 0 1px 1px 1px;
        border-top: 1px solid #333;
      }

      .control-panel{
        width: 27%;
        height: 70%;
        position: absolute;
        left: 10%;
        box-shadow: 0 0 2px black, 0 -1px 1px black;
      }

      .cartridge-door{
        width: 54.8%;
        height: 75.5%;
        position: absolute;
        left: 12.5%;
        border-width: 0 2px 2px 2px;
        border-style: solid;
        border-color: black;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${b.styles}</style>
    <article class="container">
      <top-console></top-console>
      <div class="top-front">
        <div class="cartridge-door">
          <cartridge-door></cartridge-door>
        </div>
      </div>
      <div class="bottom-front">
        <div class="control-panel">
          <control-panel></control-panel>
        </div>
      </div>
      <div class="cable-hole">
        <port-panel></port-panel>
      </div>
    </article>
    `}}customElements.define("nes-console",b);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .controllers {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;

        margin-block-start: 80px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <article class="container">
      <nes-console></nes-console>
      <div class="controllers">
        <nes-controller></nes-controller>
        <nes-controller></nes-controller>
      </div>
    </article>
    `}}customElements.define("nintendo-entertainment-system",h);
