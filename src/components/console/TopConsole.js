
class TopConsole extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
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
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TopConsole.styles}</style>
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
    `
  }
}

customElements.define('top-console', TopConsole);