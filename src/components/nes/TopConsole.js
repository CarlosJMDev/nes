import './ControlPanel';
import './PortPanel';
import './CartridgeDoor';

class TopConsole extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
      :host {
      }

      .container {
        width: var(--width);
        height: var(--height);
        background-color: var(--background-color);
        border-radius: 3px 3px 5px 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    </article>
    `
  }
}

customElements.define('top-console', TopConsole);