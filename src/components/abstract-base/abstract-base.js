import { LitElement, html, css } from "lit-element";

export class AbstractBase extends LitElement {
  static get styles() {
    return css`
      :host {
        flex: 1;
      }
      .container {
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      .abstract {
        position: relative;
        padding-bottom: 100%;
        overflow: hidden;
        background-color: var(--secondary-color);
      }
      .abstract:after {
        content: "";
        position: absolute;
        bottom: 0px;
        background-color: var(--secondary-color-alt);
        width: 100%;
        height: 100%;
        transform: skewX(45deg);
      }
      .abstract--left {
        transform-origin: 0px 0px;
        transform: rotate(10deg) skew(-15deg, -35deg);
      }
      .abstract--left:after {
        left: -50%;
        background-color: var(--secondary-color-alt3);
      }
      .abstract--right {
        right: -60%;
        transform: rotate(125deg) skew(-30deg, -5deg);
      }
      .abstract--right:after {
        right: -50%;
      }
      .abstract--bottom:after {
        right: 50%;
        background-color: var(--secondary-color-alt2);
      }
      .left-container,
      .right-container,
      .bottom-container {
        position: absolute;
        display: block;
      }
      .left-container {
        left: 0;
        top: 0;
        width: 50%;
        max-width: 30rem;
      }
      .right-container {
        right: 0;
        top: 20%;
        width: 50%;
        max-width: 25rem;
      }
      .bottom-container {
        left: 5%;
        bottom: -15rem;
        width: 50%;
        min-width: 15rem;
        max-width: 20rem;
        transform: rotate(15deg) skew(-10deg, 20deg);
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="left-container">
          <div class="abstract abstract--left"></div>
        </div>
        <div class="right-container">
          <div class="abstract abstract--right"></div>
        </div>
        <div class="bottom-container">
          <div class="abstract abstract--bottom"></div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("abstract-base", AbstractBase);
