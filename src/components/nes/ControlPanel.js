class ControlPanel extends HTMLElement {
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

    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ControlPanel.styles}</style>
    <article class="container">
      <div class="light"></div>
      <div class="button-background">
        <button class="button">POWER</button>
      </div>
      <div class="button-background">
        <button class="button">RESET</button>
      </div>
    </article>
    `
  }
}

customElements.define('control-panel', ControlPanel);