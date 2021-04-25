import { LitElement, html, css } from "lit-element";
import "../more-button/more-button";

export class AppMore extends LitElement {
  constructor() {
    super();
    this.inset;
    this.renderNext;
  }

  static get properties() {
    return {
      inset: { type: Boolean, reflect: true },
      renderNext: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-height: -webkit-fill-available;
        background-color: var(--more-background, --background-light);
        position: relative;
      }
      :host([inset]) {
        box-shadow: inset 0px 10px 10px -10px var(--black),
          inset 0px -10px 10px -10px var(--black);
      }

      .container {
        display: flex;
        flex: 1;
      }

      .inner-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        min-width: 320px;
        box-sizing: border-box;
        margin: auto;
      }
    `;
  }

  renderNextButton() {
    if (this.renderNext) {
      return html` <more-button @click="${this._handleClick}"></more-button> `;
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="inner-container">
          <slot></slot>
        </div>
        ${this.renderNextButton()}
      </div>
    `;
  }

  _handleClick() {
    window.scrollTo({
      top: this.offsetHeight + this.clientHeight,
      behavior: "smooth",
    });
  }
}

window.customElements.define("app-more", AppMore);
