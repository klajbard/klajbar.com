import { LitElement, html, css } from "lit-element";
import "../../icons/down-arrow";

export class MoreButton extends LitElement {
  constructor() {
    super();
    this.addEventListener("focus", this._handleFocus);
    this.addEventListener("blur", this._handleBlur);
    this.addEventListener("mouseup", this._handleBlur);
  }

  static get styles() {
    return css`
      :host {
        position: absolute;
        bottom: 5%;
        transform: translateX(-50%);
        left: 50%;
      }
      :host([focused]) .button,
      .button:hover {
        animation: none;
        animation: pulseHover 0.5s ease-out forwards;
        color: var(--main-color);
      }
      .button {
        color: var(--white);
        background: transparent;
        cursor: pointer;
        border: none;
        padding: 0;
        outline: none;
        transform-origin: 50% 25%;
        transition: transform 0.4s ease-in-out, color 0.3s linear;
        animation: pulse 1s ease-out infinite alternate;
      }
      .button svg {
        filter: drop-shadow(3px 3px 3px var(--black));
      }
      @keyframes pulse {
        from {
          transform: scale(1.2);
        }
        to {
          transform: scale(1);
        }
      }
      @keyframes pulseHover {
        from {
          transform: scale(1.2);
        }
        to {
          transform: scale(1.4);
        }
      }
    `;
  }

  _handleFocus() {
    this.setAttribute("focused", "");
  }

  _handleBlur() {
    this.removeAttribute("focused");
  }

  render() {
    return html`
      <button class="button">
        <down-arrow></down-arrow>
      </button>
    `;
  }
}

window.customElements.define("more-button", MoreButton);
