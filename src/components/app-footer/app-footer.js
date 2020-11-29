import { LitElement, html, css } from "lit-element";
import "../app-link/app-link";

export class AppFooter extends LitElement {
  static get styles() {
    return css`
      :host {
        position: absolute;
        bottom: 15%;
        display: block;
        width: 100%;
      }
      .footer {
        width: 320px;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: var(--white);
      }
    `;
  }

  render() {
    return html`
      <footer class="footer">
        <app-link href="https://github.com/klajbard">GitHub</app-link>
        <app-link href="https://www.linkedin.com/in/klajbar/"
          >LinkedIn</app-link
        >
        <app-link href="https://steamcommunity.com/id/youareretard/"
          >Steam</app-link
        >
        <app-link href="mailto:david@klajbar.com">Email</app-link>
      </footer>
    `;
  }
}

window.customElements.define("app-footer", AppFooter);
