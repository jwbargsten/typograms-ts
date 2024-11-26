import "./style.scss";
import { create } from "./typograms.js";

document.addEventListener("DOMContentLoaded", function () {
  for (const node of document.querySelectorAll("pre[data-typogram]")) {
    if (node.hasAttribute("data-typogram-disabled")) {
      continue;
    }
    const source = node.textContent;
    const zoom = Number(node.getAttribute("data-typogram-zoom") || 0.3);
    const padding = Number(node.getAttribute("data-typogram-padding") || 6);
    const debug = node.hasAttribute("data-typogram-debug");
    if (source) {
      const svg = create(source, { zoom, debug, padding });
      node?.replaceWith(svg);
    }
  }
  // stay backwards compatible
  // replace all of the <script type="text/typogram"> tags
  for (const script of document.querySelectorAll("script[type='text/typogram']")) {
    if (script.hasAttribute("disabled")) {
      continue;
    }
    const source = script.textContent;
    const zoom = Number(script.getAttribute("zoom") || 0.3);
    const padding = Number(script.getAttribute("padding") || 0);
    const debug = script.hasAttribute("grid");
    if (source) {
      const svg = create(source, { zoom, debug, padding });
      script?.parentNode?.insertBefore(svg, script.nextSibling);
    }
  }
});
