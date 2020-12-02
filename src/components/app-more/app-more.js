import { LitElement, html, css } from "lit-element";
import "../more-button/more-button";

export class AppMore extends LitElement {
  constructor() {
    super();
    this.image,
      this.inset,
      this.link,
      this.renderNext,
      this.timeout,
      this.waiting;
  }

  static get properties() {
    return {
      image: { type: String },
      inset: { type: Boolean, reflect: true },
      link: { type: String },
      renderNext: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--more-background, --background-light);
        position: relative;
      }
      :host([inset]) {
        box-shadow: inset 0px 10px 10px -10px var(--black),
          inset 0px -10px 10px -10px var(--black);
      }

      .container {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
      }

      .inner-container {
        min-width: 320px;
        max-width: 680px;
        box-sizing: border-box;
        margin: auto;
      }

      .image {
        position: relative;
        width: 100%;
        user-select: none;
      }

      .link {
        box-sizing: border-box;
        position: relative;
        display: inline-flex;
        max-width: 500px;
        padding: 50px;
        border: none;
        outline: none;
        border-radius: 0.5rem;
        overflow: hidden;
        transition: opacity 0.4s ease;
      }

      @media only screen and (max-width: 480px) {
        .link {
          padding: 10px;
        }
      }

      .link:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--app-focus, #d2724a);
        opacity: 0;
      }
      .link:after {
        content: "";
        position: absolute;
        top: var(--top);
        left: var(--left);
        transform: translate(-50%, -50%);
        width: var(--size);
        height: var(--size);
        background-color: var(--app-focus-background, currentColor);
        clip-path: circle(0%);
        opacity: 0.3;
        border-radius: inherit;
      }
      .active:after {
        clip-path: circle(100%);
        opacity: 0;
        transition: clip-path 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53),
          opacity 0.2s ease-out;
        transition-delay: -0.1s, 0.25s;
      }

      .link:hover:before {
        opacity: 0.1;
      }

      .link.focus:before,
      .link.active:before {
        opacity: 0.3;
      }
    `;
  }

  renderNextButton() {
    if (this.renderNext) {
      return html` <more-button @click="${this._handleClick}"></more-button> `;
    }
  }

  renderImage() {
    if (this.link) {
      return html`
        <a
          class="link"
          href="${this.link}"
          target="_blank"
          @mousedown=${this._handleMouseDown}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @mouseup=${this._handleBlur}
          @dragend=${this._handleBlur}
        >
          <img class="image" src="${this.image}" />
        </a>
      `;
    } else {
      return html` <img class="image" src="${this.image}" /> `;
    }
  }

  render() {
    return html`
      <div class="container">
        <div class="inner-container">
          ${this.renderImage()} ${this.renderNextButton()}
        </div>
      </div>
    `;
  }

  _handleClick() {
    window.scrollTo({
      top: this.offsetHeight + this.clientHeight,
      behavior: "smooth",
    });
  }

  _handleBlur({ currentTarget }) {
    currentTarget.classList.remove("focus");
  }

  _handleFocus({ currentTarget }) {
    currentTarget.classList.add("focus");
  }

  _handleMouseDown({ clientX, clientY, currentTarget }) {
    if (this.waiting) return;
    const { width, height, top, left } = currentTarget.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;
    this.waiting = true;
    setTimeout(
      function () {
        this.waiting = false;
      }.bind(this),
      150
    );
    if (this.timeout) {
      clearTimeout(this.timeout);
      currentTarget.classList.remove("active");
    }
    setTimeout(() => {
      currentTarget.classList.add("active");
    }, 0);
    this.timeout = setTimeout(() => {
      currentTarget.classList.remove("active");
    }, 500);
    currentTarget.style.setProperty("--top", `${(offsetY / height) * 100}%`);
    currentTarget.style.setProperty("--left", `${(offsetX / width) * 100}%`);
    const dx = offsetX > width / 2 ? offsetX : width - offsetX;
    const dy = offsetY > height / 2 ? offsetY : height - offsetY;
    const size = Math.sqrt(dx ** 2 + dy ** 2) * 2;
    currentTarget.style.setProperty("--size", `${size}px`);
  }
}

window.customElements.define("app-more", AppMore);
