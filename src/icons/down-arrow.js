class DownArrow extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    svg.setAttributeNS(null, "width", "48px");
    svg.setAttributeNS(null, "height", "15px");
    svg.setAttributeNS(null, "viewBox", "0 0 64 20");

    polygon.setAttributeNS(null, "fill", "currentColor");
    polygon.setAttributeNS(
      null,
      "points",
      "64,0 64,6 32,20 0,6 0,0 32,13 64,0"
    );

    svg.appendChild(polygon);
    shadowRoot.appendChild(svg);
  }
}

window.customElements.define("down-arrow", DownArrow);
