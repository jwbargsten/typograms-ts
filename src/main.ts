import "./style.scss";
import { create } from "./typograms.js";

document.addEventListener("DOMContentLoaded", function () {
  // replace all of the <script type="text/typogram"> tags
  for (const script of document.querySelectorAll("script[type='text/typogram']")) {
    if (script.hasAttribute("disabled")) {
      continue;
    }
    const source = script.textContent;
    const zoom = Number(script.getAttribute("zoom") || 0.3);
    const debug = script.hasAttribute("grid");
    if (source) {
      const svg = create(source, zoom, debug);
      script?.parentNode?.insertBefore(svg, script.nextSibling);
    }
  }
});
