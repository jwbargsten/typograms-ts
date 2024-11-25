export function createTag(tag: string, attrs: Record<string, string | number | boolean> = {}) {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => elem.setAttribute(k, `${v}`));
  return elem;
}

export function grid(width: number, height: number) {
  const result = createTag("g");
  for (let i = 0; i <= width * 30; i += 3) {
    const line = createTag("line", {
      x1: i,
      y1: 0,
      x2: i,
      y2: 54 * height,
      class: "grid"
    });
    result.appendChild(line);
  }

  for (let i = 0; i <= height * 54; i += 3) {
    const line = createTag("line", {
      x1: 0,
      y1: i,
      x2: 30 * width,
      y2: i,
      class: "grid"
    });
    result.appendChild(line);
  }

  return result;
}

export function cross([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
]) {
  const result = createTag("g");
  if (top) {
    const line = createTag("line", { x1: 15, y1: 0, x2: 15, y2: 27, class: "part" });
    result.appendChild(line);
  }

  if (right) {
    const line = createTag("line", { x1: 15, y1: 27, x2: 30, y2: 27, class: "part" });
    result.appendChild(line);
  }

  if (bottom) {
    const line = createTag("line", { x1: 15, y1: 27, x2: 15, y2: 54, class: "part" });
    result.appendChild(line);
  }

  if (left) {
    const line = createTag("line", { x1: 0, y1: 27, x2: 15, y2: 27, class: "part" });
    result.appendChild(line);
  }

  if (topRight) {
    const line = createTag("line", { x1: 30, y1: 0, x2: 15, y2: 27, class: "part" });
    result.appendChild(line);
  }

  if (bottomRight) {
    const line = createTag("line", { x1: 15, y1: 27, x2: 30, y2: 54, class: "part" });
    result.appendChild(line);
  }

  if (bottomLeft) {
    const line = createTag("line", { x1: 15, y1: 27, x2: 0, y2: 54, class: "part" });
    result.appendChild(line);
  }

  if (topLeft) {
    const line = createTag("line", { x1: 0, y1: 0, x2: 15, y2: 27, class: "part" });
    result.appendChild(line);
  }

  return result;
}

export function text(char: string, reserved: boolean) {
  const g = createTag("g");
  const result = createTag("text", { "dominant-baseline": "central" });
  const value = document.createTextNode(char);
  result.appendChild(value);
  if (reserved) {
    result.setAttribute("class", "reserved");
  }
  const translation = [
    [15, 24]
    //[1.5, 1.5 * ratio]
  ];
  result.setAttribute("transform", translation.map(([x, y]) => `translate(${x}, ${y})`).join(" "));
  g.appendChild(result);
  return g;
}

export function around(
  diagram: string[][],
  [x, y]: [number, number]
): [string, string, string, string, string, string, string, string] {
  let left = " ";
  let top = " ";
  let right = " ";
  let bottom = " ";
  let topRight = " ";
  let bottomRight = " ";
  let bottomLeft = " ";
  let topLeft = " ";
  if (y > 0) {
    top = diagram[y - 1][x] || " ";
  }
  if (x < diagram[y].length - 1) {
    right = diagram[y][x + 1] || " ";
  }
  if (y < diagram.length - 1) {
    bottom = diagram[y + 1][x] || " ";
  }
  if (x > 0) {
    left = diagram[y][x - 1] || " ";
  }
  if (y > 0 && x < diagram[y - 1].length - 1) {
    // console.log(`@${diagram[y][x]}: ${diagram[y - 1][x + 1]}`);
    topRight = diagram[y - 1][x + 1] || " ";
  }
  //if (diagram[y][x] == ".") {
  //console.log(`${diagram[y][x]}}: ${(y + 1) < (diagram.length)}`);
  //console.log(diagram[y + 1]);
  //throw new Error("hi");
  //}
  if (y + 1 < diagram.length && x < diagram[y + 1].length) {
    bottomRight = diagram[y + 1][x + 1] || " ";
    //console.log(diagram[y + 1]);
    //console.log(`${diagram[y][x]}: ${x} ${y} ${bottomRight}`);
    //throw new Error("hi");
  }
  if (y < diagram.length - 1 && x > 0) {
    bottomLeft = diagram[y + 1][x - 1] || " ";
  }
  if (y > 0 && x > 0) {
    topLeft = diagram[y - 1][x - 1] || " ";
  }
  return [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft];
  //.map((el) => alias[el] ? alias[el] : el);
}
