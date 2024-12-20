class RightButtons extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
      :host {
        --button-background-size: 40px;
        --button-width: 30px;
        --font-size: 0.8rem;
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
        margin-left: 5px;
      }
    
      .logo{
        font-family: "Pretendo";
        position: relative;
        font-size: var(--font-size);
        color: var(--logo-color);
      }

      .logo-r{
        color: var(--logo-color);
        position: absolute;
        font-size: var(--font-size);
      }

      .buttons-container{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        column-gap: 5px;
      }

      .button-background{
        width: var(--button-background-size);
        height: var(--button-background-size);
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
          width: var(--button-width);
          height: var(--button-width);
          border-radius: 50%;
          background-color: var(--button-color);
          box-shadow:
          inset 1px 2px 2px #1E0606;
          cursor: pointer;
        }

        .button::before {
          content: "";
          display: block;
          width: calc(var(--button-width) * 0.8);
          height: calc(var(--button-width)* 0.8);
          border-top: 2px solid #fff7;
          border-radius: 50%;
          position: absolute;
            top: 20%;
            left: 20%;
          transform: rotate(-40deg);
        }
      }

      .a-button::after,
      .b-button::after{
        font-family: "Pretendo";
        font-size: var(--font-size);
        position: absolute;
        color: var(--button-color);
        transform: translateY(200%) translateX(140%);
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