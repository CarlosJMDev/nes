

class RightButtons extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
      :host {
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
        margin-left: 10px;
      }
    
      .logo{
        font-family: "Pretendo";
        position: relative;
        font-size: 1.25rem;
        color: var(--logo-color);
      }

      .logo-r{
        color: var(--logo-color);
        position: absolute;
        font-size: .8rem;
      }

      .buttons-container{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        column-gap: 10px;
      }

      .button-background{
        margin-top: 10px;
        width: 60px;
        height: 60px;
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
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: var(--button-color);
          box-shadow:
          inset 1px 2px 2px #1E0606;
          cursor: pointer;
        }

        .button::before {
          content: "";
          display: block;
          width: calc(45px * 0.8);
          height: calc(45px* 0.8);
          border-top: 2px solid #fff7;
          border-radius: 50%;
          position: absolute;
            top: 12px;
            left: 12px;
          transform: rotate(-40deg);
        }
      }

      .a-button::after,
      .b-button::after{
        font-family: "Pretendo";
        font-size: 1rem;
        position: absolute;
        color: var(--button-color);
        transform: translateY(235%) translateX(180%);
      }

      .a-button::after{
        content: "A";
      }
      
      .b-button::after{
        content: "B";
      }
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RightButtons.styles}</style>
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
    `
  }
}

customElements.define('right-buttons', RightButtons);