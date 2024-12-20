class CartridgeDoor extends HTMLElement {
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
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CartridgeDoor.styles}</style>
    <article class="container">
      <div class="text">
        <p class="title">Nintendo<span class="registred-symbol">&#174;</span></p>
        <p class="subtitle">ENTERTAINMENT SYSTEM<span class="tm">TM</span></p>
        </div>
      <div class="grip-tab"></div>
    </article>
    `
  }
}

customElements.define('cartridge-door', CartridgeDoor);