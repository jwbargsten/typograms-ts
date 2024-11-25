import { around, createTag, grid, text } from "./glyph-util";
import { buildGlyphs } from "./glyphs";

const glyphs = buildGlyphs();

type Diagram = string[][];
function render(diagram: Diagram) {
  const result = createTag("g");

  for (let y = 0; y < diagram.length; y++) {
    for (let x = 0; x < diagram[y].length; x++) {
      const char = diagram[y][x];

      if (char == " " || char == '"') {
        continue;
      }

      const g = createTag("g");

      let insideQuotedText = false;
      for (let i = 0; i < x; i++) {
        if (diagram[y][i] == '"') {
          insideQuotedText = !insideQuotedText;
        }
      }

      const neighbors = around(diagram, [x, y]);

      if (char.match(/[A-Za-z0-9]/)) {
        const [, right, , left] = neighbors;
        // We special case "v", which is a down arrow, and also a text character.
        insideQuotedText =
          insideQuotedText || !!left.match(/[A-Za-uw-z0-9]/) || !!right.match(/[A-Za-uw-z0-9]/);
      }

      const reserved = !!glyphs[char] && !insideQuotedText;

      if (reserved) {
        g.appendChild(glyphs[char](neighbors));
      }

      g.appendChild(text(char, reserved));

      g.setAttribute("transform", `translate(${x * 30} ${y * 54})`);
      result.appendChild(g);
    }
  }
  return result;
}

export function create(source: string, debug: boolean) {
  const diagram = source.split("\n").map((line: string) => line.trimEnd().split(""));

  diagram.splice(-1);

  let width = 0;
  const height = diagram.length;

  for (let y = 0; y < diagram.length; y++) {
    for (let x = 0; x < diagram[y].length; x++) {
      if (diagram[y].length > width) {
        width = diagram[x].length;
      }
    }
  }

  const padding = 0;

  let svg = createTag("svg", {
    debug: debug,
    viewBox: `${-padding} ${-padding} ${width * 30 + 2 * padding} ${height * 48 + 2 * padding}`,
    class: "debug typograms"
  });

  svg.appendChild(render(diagram));

  if (debug) {
    svg.appendChild(grid(width, height));
  }

  return svg;
}
