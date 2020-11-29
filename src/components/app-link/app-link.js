import { LitElement, html, css } from "lit-element";

export class AppLink extends LitElement {
  constructor() {
    super();
    this.href;
    this.title;
  }

  static get properties() {
    return {
      href: { type: String },
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .link {
        cursor: pointer;
        position: relative;
        color: currentColor;
        text-decoration: none;
        border: none;
        outline: none;
        transition: color 0.3s ease;
      }
      .link:hover {
        color: var(--main-color);
      }
      .link:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: currentColor;
        visibility: hidden;
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
      .link:link:hover:after,
      .link:link:focus:after {
        visibility: visible;
        transform: scaleX(1);
      }
    `;
  }

  firstUpdated() {
    const element = this.shadowRoot.querySelector("a");
    if (!this.href) element.removeAttribute("href");
    if (!this.title && !this.href) element.removeAttribute("title");
  }

  render() {
    return html`
      <a
        class="link"
        href=${this.href}
        title=${this.title || this.href}
        rel="noopener noreferrer"
      >
        <slot></slot>
      </a>
    `;
  }
}

window.customElements.define("app-link", AppLink);
