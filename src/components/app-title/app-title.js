import { LitElement, html, css } from "lit-element";

export class AppTitle extends LitElement {
  static get styles() {
    return css`
      :host {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .header {
        display: flex;
        border-bottom: 7px solid var(--main-color);
        padding: 10px;
      }
      .header__content {
        margin: auto;
        display: flex;
        align-items: center;
      }
      .header__title {
        margin: 0;
        color: var(--white);
        line-height: 64px;
        font-size: 56px;
      }
      .header__link {
        margin-left: 1rem;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <header class="header">
        <div class="header__content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="68"
            viewBox="0 0 16.328 14.266"
          >
            <g fill="none" stroke="var(--main-color)" stroke-width="1">
              <path
                stroke-opacity="null"
                d="M.8 13.803l2.216-3.861c1.465-.004 2.93-.002 4.395 0l-.617 1.142-1.56 2.72z"
              />
              <path
                d="M3.016 9.942l5.15-9.01 2.216 3.861c-.95 1.74-1.96 3.445-2.971 5.149z"
              />
              <path
                stroke-opacity="null"
                d="M5.233 13.803l5.149-9.01 5.149 9.01z"
              />
            </g>
          </svg>
          <a href="/" class="header__link">
            <h1 class="header__title">klajbar</h1>
          </a>
        </div>
      </header>
    `;
  }
}

window.customElements.define("app-title", AppTitle);
