import { LitElement, html, css } from "lit-element";
import "../../icons/up-arrow";

export class ScrollTop extends LitElement {
  constructor() {
    super();
    this.offset = 300;
    this.title = "Scroll to top";
    this._visible = false;
  }

  set visible(val) {
    const oldVal = this._prop;
    this._visible = val;
    this.requestUpdate("visible", oldVal);
  }

  get visible() {
    return this._visible;
  }

  static get properties() {
    return {
      offset: { type: Number },
      title: { type: String, reflect: true },
      visible: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      .button {
        position: fixed;
        right: 2rem;
        bottom: -3rem;
        width: 3rem;
        height: 3rem;
        opacity: 0;
        visibility: hidden;
        text-align: center;
        background-color: var(--secondary-color);
        color: var(--white);
        box-shadow: 0 0 4px var(--secondary-color-alt);
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        border-radius: 100%;
      }

      :host([visible]) .button {
        opacity: 100;
        visibility: initial;
        bottom: 2rem;
      }

      .button:focus {
        box-shadow: inset 0 0 2px 2px var(--white),
          0 0 4px var(--secondary-color-alt);
      }
      .button:active {
        background-color: var(--secondary-color-alt2);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateScroll();
    window.addEventListener("scroll", this._updateScroll.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("scroll", this._updateScroll.bind(this));
  }

  render() {
    return html`
      <button @click=${this._handleClick} class="button">
        <up-arrow></up-arrow>
      </button>
    `;
  }

  _updateScroll() {
    this.visible = window.scrollY > this.offset;
  }

  _handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.customElements.define("scroll-top", ScrollTop);
