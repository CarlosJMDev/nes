class MenuButtons extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  static get styles(){
    return /* css */`
      :host {
        --line-decoration-height: 15.64px;
        --button-width: 28.6px;
        --button-height: 5px;
        --line-menu-height: 37px;
      }

      .menu-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    
      .line-decoration{
        background-color: var(--center-decoration-color);
        height: var(--line-decoration-height);
        width: 100%;
        border-radius: 5px;
        border: 1px solid var(--center-decoration-color);

        &:first-child{
          border-radius: 0 0 10px 10px;
        }
        
        &:last-child{
          border-radius: 10px 10px 0 0;
          height: 15px;
        }
      }

      .line-menu{
        height: var(--line-menu-height);
        width: 100%;
        background-color: var(--central-button-background);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .menu{
        height: 83%;
        width: 92%;
        border: 1px solid gray;
        border-radius: 4px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 
          2px 2px 4px #333 inset,
          -2px -2px 3px white inset;
      }

      .button{
        height: var(--button-height);
        width: var(--button-wodth);
        border-radius: 35%;
        background-color: var(--movement-button-color);
        box-shadow:
          0 2px 0 1px #575757,
          0 0 8px #575757 inset,
          4px 0 6px #575757 inset;
          cursor: pointer;
      }

      .text-decoration{
        width: 100%;
        height: 100%;
        color: var(--button-color);
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      .text-menu{
        font-family: "Pretendo";
        font-weight: bold;
        font-size: .5rem;
        margin-block-start: 8%;
      }
    `
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${MenuButtons.styles}</style>
    <section class="menu-container">
      <div class="line-decoration"></div>
      <div class="line-decoration"></div>
      <div class="line-decoration">
        <div class="text-decoration">
          <p class="text-menu">SELECT</p>
          <p class="text-menu">START</p>
        </div>
      </div>
      <div class="line-menu">
        <div class="menu">
          <button class="button"></button>
          <button class="button"></button>
        </div>
      </div>
      <div class="line-decoration"></div>
    </section>
    `
  }
}

customElements.define('menu-buttons', MenuButtons);