class PortPanel extends HTMLElement {
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
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PortPanel.styles}</style>
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
    `
  }
}

customElements.define('port-panel', PortPanel);