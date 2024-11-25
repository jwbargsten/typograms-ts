import "./style.scss";
import { create } from "./typograms.js";

document.addEventListener("DOMContentLoaded", function () {
  for (const node of document.querySelectorAll("pre[data-typogram]")) {
    if (node.hasAttribute("disabled")) {
      continue;
    }
    const source = node.textContent;
    const zoom = Number(node.getAttribute("zoom") || 0.3);
    const debug = node.hasAttribute("grid");
    if (source) {
      const svg = create(source, zoom, debug);
      node?.replaceWith(svg);
    }
  }
});
