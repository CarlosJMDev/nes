

class LeftButtons extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
      :host{
      }

      .container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .buttons{
        margin-top: 20px;
        width: 108px;
        height: 108px;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: gray;
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
        font-size: 1.5rem;
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
        background-color: black;
        border-radius: 50%;
        border: 2px groove gray;
        box-shadow: -2px -1px 5px white inset;
      }
    `
  }

  connectedCallback() {
    this.render();
    
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${LeftButtons.styles}</style>
    <div class="container">
      <div class="buttons">
        <div class="top-button">🡅</div>
        <div class="right-button">🡆</div>
        <div class="center-button">
          <div class="center-circle"></div>
        </div>
        <div class="bottom-button">🡇</div>
        <div class="left-button">🡄</div>
      </div>
    </div>
    `
  }
}

customElements.define('left-buttons', LeftButtons);