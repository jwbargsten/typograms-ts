import { createTag } from "./glyph-util";

function barGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: [string, string, string, string,string, string, string, string]) {
  const result = createTag("g");

  if (right == "_") {
    const line = createTag("line", {

    "x1":  "18",
    "y1":  "51",
    "x2":  "30",
    "y2":  "51",
    "class":  "part",
    });
    result.appendChild(line);
  }
  if (left == "_") {
    const line = createTag("line", {
    "x1":  "0",
    "y1":  "51",
    "x2":  "12",
    "y2":  "51",
    "class":  "part",
    });
    result.appendChild(line);
  }
  if (topRight == "_") {
    const line = createTag("line", {
     "x1":  "12",
     "y1":  "-3",
     "x2":  "30",
     "y2":  "-3",
     "class":  "part",
    });
    result.appendChild(line);
  }
  if (topLeft == "_") {
    const line = createTag("line", {
    "x1":  "0",
    "y1":  "-3",
    "x2":  "18",
    "y2":  "-3",
    "class":  "part",
    });
    result.appendChild(line);
  }
  // const leg =  && ;
  // const head =  && ;
  //console.log(!(bottomLeft == "/" && bottomRight == "\\"));
  //console.log(!(topRight == "/" && topLeft == "\\"));
  result.appendChild(cross([
    !(topRight == "/" && topLeft == "\\"), // top
    ["-"].includes(right), // right
    !(bottomLeft == "/" && bottomRight == "\\"), // bottom
    ["-"].includes(left), // left
    topRight == "/", // topRight
    bottomRight == "\\", // bottomRight
    bottomLeft == "/", // bottomLeft
    topLeft == "\\"  // topLeft
    ]));
  return result;
}