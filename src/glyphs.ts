import { createTag, cross } from "./glyph-util";

type GlyphHandler = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]) => SVGElement;

export function barGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]) {
  const result = createTag("g");

  if (right == "_") {
    const line = createTag("line", { x1: "18", y1: "51", x2: "30", y2: "51", class: "part" });
    result.appendChild(line);
  }
  if (left == "_") {
    const line = createTag("line", { x1: "0", y1: "51", x2: "12", y2: "51", class: "part" });
    result.appendChild(line);
  }
  if (topRight == "_") {
    const line = createTag("line", { x1: "12", y1: "-3", x2: "30", y2: "-3", class: "part" });
    result.appendChild(line);
  }
  if (topLeft == "_") {
    const line = createTag("line", { x1: "0", y1: "-3", x2: "18", y2: "-3", class: "part" });
    result.appendChild(line);
  }
  // const leg =  && ;
  // const head =  && ;
  //console.log(!(bottomLeft == "/" && bottomRight == "\\"));
  //console.log(!(topRight == "/" && topLeft == "\\"));
  result.appendChild(
    cross([
      !(topRight == "/" && topLeft == "\\"), // top
      ["-"].includes(right), // right
      !(bottomLeft == "/" && bottomRight == "\\"), // bottom
      ["-"].includes(left), // left
      topRight == "/", // topRight
      bottomRight == "\\", // bottomRight
      bottomLeft == "/", // bottomLeft
      topLeft == "\\" // topLeft
    ])
  );
  return result;
}

export function dashGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  return cross([
    ["|"].includes(top), // top
    true, // right
    ["|"].includes(bottom), // bottom
    true, // left
    false, // topRight
    false, // bottomRight
    false, // bottomLeft
    false // topLeft
  ]);
}

export function tildeGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const line = createTag("line", { x1: "9", y1: "27", x2: "24", y2: "27", class: "part" });
  result.appendChild(line);
  return result;
}

export function underscoreGlyph(around) {
  const line = dashGlyph(around);
  line.setAttribute("transform", "translate(0 24)");
  return line;
}

export function colonGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  {
    const line = createTag("line", {
      x1: "15",
      y1: "0",
      x2: "15",
      y2: "60",
      class: "part",
      style: "stroke-dasharray: 15; stroke-dashoffset: 0;"
    });
    result.appendChild(line);
  }
  if (top == "+") {
    const line = createTag("line", { x1: "15", y1: "-24", x2: "15", y2: "-15", class: "part" });
    result.appendChild(line);
  }
  if (bottom == "+") {
    const line = createTag("line", { x1: "15", y1: "60", x2: "15", y2: "78", class: "part" });
    result.appendChild(line);
  }
  return result;
}

export function equalGlyph(around) {
  const result = createTag("g");
  const first = createTag("line", { x1: "0", y1: "21", x2: "30", y2: "21", class: "part" });
  result.appendChild(first);
  const second = createTag("line", { x1: "0", y1: "30", x2: "30", y2: "30", class: "part" });
  result.appendChild(second);
  return result;
}

export function asteriskGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const circle = createTag("circle", {
    cx: "0",
    cy: "0",
    r: "21",
    stroke: "none",
    transform: "translate(15, 27)"
  });
  result.appendChild(circle);

  result.appendChild(
    cross([
      ["+", "|"].includes(top),
      ["+", "-"].includes(right),
      ["+", "|"].includes(bottom),
      ["+", "-"].includes(left),
      ["/"].includes(topRight),
      ["\\"].includes(bottomRight),
      ["/"].includes(bottomLeft),
      ["\\"].includes(topLeft)
    ])
  );

  return result;
}

export function circleGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const circle = createTag("circle", {
    cx: "0",
    cy: "0",
    r: "18",
    "stroke-width": "6",
    fill: "none",
    stroke: "black",
    transform: "translate(15, 27)"
  });
  result.appendChild(circle);

  const connectors = cross([
    ["+", "|"].includes(top),
    ["+", "-"].includes(right),
    ["+", "|"].includes(bottom),
    ["+", "-"].includes(left),
    ["/"].includes(topRight),
    ["\\"].includes(bottomRight),
    ["/"].includes(bottomLeft),
    ["\\"].includes(topLeft)
  ]);

  result.appendChild(connectors);

  const inner = createTag("circle", {
    cx: "0",
    cy: "0",
    r: "15",
    fill: "white",
    opacity: "100%",
    transform: "translate(15, 27)"
  });
  result.appendChild(inner);

  return result;
}

export function slashGlyph(around) {
  const [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft] = around;
  const result = createTag("g");
  result.appendChild(
    cross([
      ["|"].includes(top), // top
      false, // right
      ["|"].includes(bottom), // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      true, // bottomLeft
      false // topLeft
    ])
  );
  if (right == "\\") {
    const tip = cross([
      false,
      false,
      false,
      false,
      false,
      false,
      true, // bottomLeft
      false
    ]);
    tip.setAttribute("transform", "translate(30 -54)");
    tip.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 54, -3 54)");
    result.appendChild(tip);
  }
  if (left == "\\") {
    const tip = cross([
      false,
      false,
      false,
      false,
      true, // topRight
      false,
      false, // bottomLeft
      false
    ]);
    tip.setAttribute("transform", "translate(-30 54)");
    tip.setAttribute("clip-path", "polygon(15 -6, 33 -6, 33 6, 15 6)");
    result.appendChild(tip);
  }

  if (right == "_") {
    const line = underscoreGlyph(around);
    result.appendChild(line);
  }

  return result;
}

export function doubleBackslashGlyph(around) {
  const [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft] = around;
  const result = createTag("g");
  result.appendChild(
    cross([
      ["|"].includes(top), // top
      false, // right
      ["|"].includes(bottom), // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      true // topLeft
    ])
  );
  if (left == "/") {
    const tip = cross([
      false,
      false,
      false,
      false,
      false,
      true, // bottomRight
      false,
      false
    ]);
    tip.setAttribute("transform", "translate(-30 -54)");
    tip.setAttribute("clip-path", "polygon(15 0, 30 0, 30 54, 15 54)");
    result.appendChild(tip);
  }
  if (right == "/") {
    const tip = cross([false, false, false, false, false, false, false, true]);
    tip.setAttribute("transform", "translate(30 54)");
    tip.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 6, -3 6)");
    result.appendChild(tip);
  }

  if (left == "_") {
    const line = underscoreGlyph(around);
    result.appendChild(line);
  }

  return result;
}

export function sharpGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const polygon = createTag("polygon");
  const points = [
    [0, 0],
    [42, 0],
    [42, 42],
    [0, 42]
  ];
  polygon.setAttribute("points", points.map(([x, y]) => `${x},${y}`).join(" "));
  polygon.setAttribute("transform", "translate(-6, 6)");
  result.appendChild(polygon);

  result.appendChild(
    cross([
      ["+", "|"].includes(top),
      ["+", "-"].includes(right),
      ["+", "|"].includes(bottom),
      ["+", "-"].includes(left),
      ["/"].includes(topRight),
      ["\\"].includes(bottomRight),
      ["/"].includes(bottomLeft),
      ["\\"].includes(topLeft)
    ])
  );

  return result;
}

export function plusGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const r = ["*", "#", "-", "+", "~", ">", ".", "'", "`"].includes(right);
  const l = ["*", "#", "-", "+", "~", "<", ".", "'", "`"].includes(left);
  const t = ["*", "#", "|", "+", ".", "`", "^"].includes(top);
  const b = ["*", "#", "|", "+", "'", "`", "v"].includes(bottom);
  const tR = ["/", "*", "#"].includes(topRight);
  const bR = ["\\", "*", "#"].includes(bottomRight);
  const tL = ["\\", "*", "#"].includes(topLeft);
  const bL = ["/", "*", "#"].includes(bottomLeft);

  // cross
  result.appendChild(cross([t, r, b, l, tR, bR, bL, tL]));

  // center
  if ((l || r) && (b || t)) {
    const center = createTag("polygon", {
      points: "0,0 6,0 6,6 0,6",
      transform: "translate(-3 -3) translate(15 27)"
    });
    result.appendChild(center);
  }

  // tip
  if (tR || tL) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      tL, // bottomRight
      tR, // bottomLeft
      false // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(0 -3, 30 -3, 30 0, 0 0)");
    result.appendChild(center);
  }

  if (bR || bL) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      bL, // topRight
      false, // bottomRight
      false, // bottomLeft
      bR // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(0 27, 15 27, 15 30, 0 30)");
    result.appendChild(center);
  }

  if (bL || tL) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      bL && bR, // topRight
      tL && tR, // bottomRight
      false, // bottomLeft
      false // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 54, -3 54)");
    result.appendChild(center);
  }

  if (bR || tR) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      tR && tL, // bottomLeft
      bR && bL // topLeft
    ]);
    //console.log(center);
    center.setAttribute("clip-path", "polygon(15 0, 30 0, 30 54, 15 54)");
    result.appendChild(center);
  }

  if (r || l) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      r || bL, // topRight
      tL, // bottomRight
      tR, // bottomLeft
      l || bR // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(-3 24, 30 24, 30 30, -3 30)");
    result.appendChild(center);
  }
  return result;
}

export function dotGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");

  // top-right
  if ((right == "-" || right == "+") && (bottom == "|" || bottom == "'" || bottom == "`" || bottom == "+")) {
    const path = createTag("path", {
      d: `
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`
    });
    result.appendChild(path);
  }

  // top-left
  if ((left == "-" || left == "+") && (bottom == "|" || bottom == "'" || bottom == "`" || bottom == "+")) {
    const path = createTag("path", {
      d: `
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`
    });
    result.appendChild(path);
  }

  // top-right
  if ((right == "-" || right == "+") && (top == "|" || top == "." || top == "+")) {
    const path = createTag("path", {
      d: `
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`
    });
    result.appendChild(path);
  }

  // bottom-left
  if ((left == "-" || left == "+") && (top == "|" || top == "." || top == "+")) {
    const path = createTag("path", {
      d: `
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`
    });
    result.appendChild(path);
  }

  // bottom right-topRight
  if (right == "-" && topRight == "/") {
    const path = createTag("path", {
      d: `
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`
    });
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      false, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)");
    result.appendChild(line);
  }

  // right-topLeft
  if (right == "-" && topLeft == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`
    );
    result.appendChild(path);
  }

  // left-topRight
  if (left == "-" && topRight == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`
    );
    result.appendChild(path);
  }

  // bottom left-topLeft
  if (left == "-" && topLeft == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      false, // bottomLeft
      true // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 12 -3, 12 18, -3 18)");
    result.appendChild(line);
  }

  // bottom-topRight
  if (bottom == "|" && topRight == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`
    );
    result.appendChild(path);
  }

  // top-bottomRight
  if (top == "|" && bottomRight == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`
    );
    result.appendChild(path);
  }

  // top-bottomLeft
  if (top == "|" && bottomLeft == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`
    );
    result.appendChild(path);
  }

  // bottom-topLeft
  if (bottom == "|" && topLeft == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`
    );
    result.appendChild(path);
  }

  // right-bottomLeft
  if (right == "-" && bottomLeft == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 12 15, 12 30, -3 30)");
    result.appendChild(line);
  }

  // left-bottomRight
  if (left == "-" && bottomRight == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`
    );

    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 12 15, 21 30, -3 30)");
    result.appendChild(line);
  }

  // left-bottomLeft
  if (left == "-" && bottomLeft == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 6, 12 6, 12 30, -3 30)");
    result.appendChild(line);
  }

  // right-bottomRight
  if (right == "-" && bottomRight == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(3 6, 18 6, 18 30, 3 30)");
    result.appendChild(line);
  }

  // bottomLeft-bottomRight
  if (bottomLeft == "/" && bottomRight == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      true, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 33 15, 33 30, -3 30)");
    result.appendChild(line);
  }

  // topLeft-topRight
  if (topLeft == "\\" && topRight == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      false, // bottomLeft
      true // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 33 -3, 33 12, -3 12)");
    result.appendChild(line);
  }

  // topRight-bottomRight
  if (topRight == "/" && bottomRight == "\\") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      true, // bottomRight
      false, // bottomLeft
      false // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(6 -3, 33 -3, 33 57, 6 57)");
    result.appendChild(line);
  }

  // topLeft-bottomLeft
  if (topLeft == "\\" && bottomLeft == "/") {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`
    );
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      true // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 9 -3, 9 57, -3 57)");
    result.appendChild(line);
  }

  return result;
}

export function arrowRightGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const arrow = createTag("polygon", { points: "0,0 42,18 0,36" });
  let reach = 0;
  if (right == "*" || right == "o" || right == "#") {
    reach -= 18;
  }
  arrow.setAttribute("transform", `translate(${reach} 9)`);
  result.appendChild(arrow);
  return result;
  const center = createTag("polygon", { points: "-3,0 6,0 6,6 -3,6", transform: "translate(15 24)" });
  result.appendChild(center);
  result.appendChild(
    cross([
      false, // top
      false, // right
      false, // bottom
      ["-", "+"].includes(left), // left
      false, // topRight
      false, // bottomRight
      ["/"].includes(bottomLeft), // bottomLeft
      ["\\"].includes(topLeft) // topLeft
    ])
  );
  return result;
}

export function arrowLeftGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const arrow = createTag("polygon", { points: "0,0 42,18 0,36" });

  let reach = 30;
  if (left == "*" || left == "o" || left == "#") {
    reach += 18;
  }
  arrow.setAttribute("transform", `translate(${reach} 9) translate(0 36) rotate(180)`);
  result.appendChild(arrow);
  return result;
  //const center = document.createElementNS(
  //  "http://www.w3.org/2000/svg", "polygon");
  //center "points":  "0,0 9,0 9,6 0,6",
  //center.setAttribute("transform", "translate(9 24)");
  //result.appendChild(center);
  result.appendChild(
    cross([
      false, // top
      ["-", "+"].includes(right), // right
      false, // bottom
      false, // left
      ["/"].includes(topRight), // topRight
      ["\\"].includes(bottomRight), // bottomRight
      false, // bottomLeft
      false // topLeft
    ])
  );
  return result;
}

export function arrowDownGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const arrow = createTag("polygon", { points: "0,0 42,18 0,36" });

  let reach = 36;
  if (bottom == " ") {
    reach = 12;
  } else if (bottom == "_") {
    reach += 18;
  } else if (bottom == "*" || bottom == "o" || bottom == "#") {
    reach -= 18;
  }
  if (topRight == "/") {
    arrow.setAttribute("transform", `translate(-36 33) rotate(${90 + 22.5}, 42, 18)`);
  } else if (topLeft == "\\") {
    arrow.setAttribute("transform", `translate(-18 33) rotate(${90 - 22.5}, 42, 18)`);
  } else {
    arrow.setAttribute("transform", `translate(33 ${reach}) rotate(90)`);
  }
  result.appendChild(arrow);
  result.appendChild(
    cross([
      ["|", "+"].includes(top), // top
      false, // right
      ["|", "+"].includes(top), // bottom
      false, // left
      ["/"].includes(topRight), // topRight
      false, // bottomRight
      false, // bottomLeft
      ["\\"].includes(topLeft) // topLeft
    ])
  );
  return result;
}

export function hatGlyph([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  const result = createTag("g");
  const arrow = createTag("polygon", { points: "0,0 42,18 0,36" });

  let reach = 42;
  if (top == "-") {
    reach -= 15;
  }

  if (bottomLeft == "/") {
    arrow.setAttribute("transform", `translate(-18 -15) rotate(${-45 - 22.5}, 42, 18)`);
  } else if (bottomRight == "\\") {
    arrow.setAttribute("transform", `translate(-36 -15) rotate(${-90 - 22.5}, 42, 18)`);
  } else {
    arrow.setAttribute("transform", `translate(-3 ${reach}) rotate(-90)`);
  }
  result.appendChild(arrow);
  result.appendChild(
    cross([
      false, // top
      false, // right
      ["+", "|"].includes(bottom), // bottom
      false, // left
      false, // topRight
      ["\\"].includes(bottomRight), // bottomRight
      ["/"].includes(bottomLeft), // bottomLeft
      false // topLeft
    ])
  );
  return result;
}

export function buildGlyphs(): Record<string, GlyphHandler> {
let glyphs: Record<string, GlyphHandler> = {
  "|": barGlyph,
  "-": dashGlyph,
  "~": tildeGlyph,
  _: underscoreGlyph,
  ":": colonGlyph,
  "=": equalGlyph,
  "*": asteriskGlyph,
  o: circleGlyph,
  "/": slashGlyph,
  "\\": doubleBackslashGlyph,
  "#": sharpGlyph,
  "+": plusGlyph,
  ".": dotGlyph,
  ">": arrowRightGlyph,
  "<": arrowLeftGlyph,
  v: arrowDownGlyph,
  "^": hatGlyph
};

const alias = {
  "┌": "+",
  "┐": "+",
  "└": "+",
  "┘": "+",
  "─": "-",
  "►": ">",
  "'": ".",
  "`": ".",
  V: "v"
};

Object.entries(alias).forEach(([k, v]) => {
  glyphs[k] = (around) => glyphs[v](around);
});

return glyphs
}
