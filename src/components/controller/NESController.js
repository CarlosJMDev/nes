import './RightButtons';
import './LeftButtons';
import './MenuButtons';

class NESController extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
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
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NESController.styles}</style>
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
    `
  }
}

customElements.define('nes-controller', NESController);