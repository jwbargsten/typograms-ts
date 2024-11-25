export function createTag(tag: string, attrs: Record<string, string | number> = {}) {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => elem.setAttribute(k, `${v}`));
  return elem;
}

export function grid(width: number, height: number) {
  const result = createTag("g");

  const vertical = createTag("line", { x1: 15, y1: 0, x2: 15, y2: 54, class: "center" });
  //result.appendChild(vertical);

  const horizontal = createTag("line", { x1: 0, y1: 30, x2: 30, y2: 54, class: "center" });
  //result.appendChild(horizontal);

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

function cross([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: [string, string, string, string, string, string, string, string, string]) {
  const result = createTag("g");
  if (top) {

    const line = createTag("line", {
    "x1":  15,
    "y1":  0,
    "x2":  15,
    "y2":  27,
    "class":  "part",    
});
    result.appendChild(line);
  }

  if (right) {
    const line = createTag("line", {
    "x1":  15,
    "y1":  27,
    "x2":  30,
    "y2":  27,
    "class":  "part",    
});
    result.appendChild(line);
  }

  if (bottom) {
    const line = createTag("line", {
    "x1":  15,
    "y1":  27,
    "x2":  15,
    "y2":  54,
    "class":  "part",    
});
    result.appendChild(line);
  }

  if (left) {
    const line = createTag("line", {
    "x1":  0,
    "y1":  27,
    "x2":  15,
    "y2":  27,
    "class":  "part",    
});
    result.appendChild(line);
  }

  const diagonal = createTag("polygon", {

  "points": [
    [0, 0],
    [20.6, 0],
    [20.6, 3],
    [0, 3],
  ].map(([x, y]) => `${x},${y}`).join(" ")
  });
  

  if (topRight) {
    const line = createTag("line", {
    "x1":  30,
    "y1":  0,
    "x2":  15,
    "y2":  27,
    "class":  "part",
});
    // line.setAttribute("transform", "scale(1, 1)");
    // line.setAttribute("clip-path", "polygon(-6 -6, 15 -6, 15 30, -6 30)");
    // line "stroke-linecap":  "square !important",
    result.appendChild(line);
    //const mask = document.createElementNS(
    //  "http://www.w3.org/2000/svg", "polygon");
    //mask "points":  "0 0, 15 0, 15 18, 0 18",
    //result.appendChild(mask);
    //console.log("hi");
  }

  if (bottomRight) {
    const line = createTag("line", {
    "x1":  15,
    "y1":  27,
    "x2":  30,
    "y2":  54,
    "class":  "part",    
});
    result.appendChild(line);
  }

  if (bottomLeft) {
    const line = createTag("line", {
    "x1":  15,
    "y1":  27,
    "x2":  0,
    "y2":  54,
    "class":  "part",    
});
    result.appendChild(line);
  }

  if (topLeft) {
    const line = createTag("line", {
    "x1":  0,
    "y1":  0,
    "x2":  15,
    "y2":  27,
    "class":  "part",    
});
    result.appendChild(line);
  }

  return result;
}
