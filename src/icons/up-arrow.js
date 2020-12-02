class UpArrow extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );

    svg.setAttributeNS(null, "width", "24px");
    svg.setAttributeNS(null, "height", "24px");
    svg.setAttributeNS(null, "viewBox", "0 0 64 64");

    polygon.setAttributeNS(null, "fill", "currentColor");
    polygon.setAttributeNS(
      null,
      "points",
      "64,40 64,64 32,24 0,64 0,40 32,0 64,40"
    );

    svg.appendChild(polygon);
    shadowRoot.appendChild(svg);
  }
}

window.customElements.define("up-arrow", UpArrow);
