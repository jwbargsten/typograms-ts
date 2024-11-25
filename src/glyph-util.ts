export function createTag(tag: string, attrs: Record<string, string | number> = {}) {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k,v]) => elem.setAttribute(k, `${v}`))
  return elem
}

export function grid(width: number, height: number) {
  const result = createTag("g");

  const vertical = createTag("line", { "x1": 15, "y1": 0, "x2": 15, "y2": 54, "class": "center", })
  //result.appendChild(vertical);

  const horizontal = createTag("line", { "x1":  0,
   "y1":  30,
   "x2":  30,
   "y2":  54,
   "class":  "center",  
  });
  //result.appendChild(horizontal);

  for (let i = 0; i <= width * 30; i+= 3) {
    const line = createTag("line", {
    "x1":  i,
    "y1":  0,
    "x2":  i,
    "y2":  54 * height,
    "class":  "grid",
    });
    result.appendChild(line);
  }

  for (let i = 0; i <= height * 54; i+= 3) {
    const line = createTag("line", {

    "x1":  0,
    "y1":  i,
    "x2":  30 * width,
    "y2":  i,
    "class":  "grid",
    });
    result.appendChild(line);
  }

  return result;
}
