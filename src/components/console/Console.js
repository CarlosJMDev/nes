import './ControlPanel';
import './PortPanel';
import './CartridgeDoor';
import './TopConsole';

class NESConsole extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
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
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NESConsole.styles}</style>
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
    `
  }
}

customElements.define('nes-console', NESConsole);