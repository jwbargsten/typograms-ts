import { around, createTag, grid, text } from "./glyph-util";
import { buildGlyphs } from "./glyphs";

const ratio = 2;

const glyphs = buildGlyphs();

type Diagram = string[][];
export function create(source: string, zoom: number, debug: boolean) {
  const diagram = source.split("\n").map((line: string) => line.trimEnd().split(""));

  diagram.shift();
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
    width: width * 30 * zoom,
    height: height * 54 * zoom,
    debug: debug,
    viewBox: `${-padding} ${-padding} ${width * 30 + 2 * padding} ${height * 54 + 2 * padding}`,
    class: "debug"
  });

  svg.appendChild(render(diagram));

  if (debug) {
    svg.appendChild(grid(width, height));
  }

  return svg;
}

function render(diagram: Diagram) {
  const result = createTag("g");

  for (let y = 0; y < diagram.length; y++) {
    for (let x = 0; x < diagram[y].length; x++) {
      const char = diagram[y][x];

      if (char == " " || char == '"') {
        continue;
      }

      const g = createTag("g", {});

      let str = false;
      for (let i = 0; i < x; i++) {
        if (diagram[y][i] == '"') {
          str = !str;
        }
      }

      const neighbors = around(diagram, [x, y]);

      if (char.match(/[A-Za-z0-9]/)) {
        const [, right, , left] = neighbors;
        // We special case "v", which is a down arrow, and also a text character.
        str = str || !!left.match(/[A-Za-uw-z0-9]/) || !!right.match(/[A-Za-uw-z0-9]/);
      }

      const reserved = !!glyphs[char] && !str;

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
