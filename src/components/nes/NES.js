import '../console/Console';
import '../controller/NESController';
class NES extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
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
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${NES.styles}</style>
    <article class="container">
      <nes-console></nes-console>
      <div class="controllers">
        <nes-controller></nes-controller>
        <nes-controller></nes-controller>
      </div>
    </article>
    `
  }
}

customElements.define('nintendo-entertainment-system', NES);