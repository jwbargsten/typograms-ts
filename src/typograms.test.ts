import { expect, describe, it, assert } from "vitest";

describe("typograms", () => {
  class Grid {
    rows: string[];
    width: number;
    height: number;

    constructor(str: string) {
      this.rows = str.split("\n");
      this.width = 0;
      for (const row of this.rows) {
        this.width = Math.max(this.width, row.length);
      }
      this.height = this.rows.length;
    }
    size() {
      return [this.width, this.height];
    }
    get(x: number, y: number) {
      if (x < 0 || x >= this.width) {
        return undefined;
      } else if (y < 0 || y >= this.height) {
        return undefined;
      } else if (x < this.rows[y].length) {
        return this.rows[y][x];
      } else {
        return " ";
      }
    }

    subgrid(x: number, y: number): string[][] | undefined {
      const center = this.get(x, y);
      if (!center) {
        return undefined;
      }
      return [
        [this.get(x - 1, y - 1) || " ", this.get(x, y - 1) || " ", this.get(x + 1, y - 1) || " "],
        [this.get(x - 1, y) || " ", this.get(x, y) || " ", this.get(x + 1, y) || " "],
        [this.get(x - 1, y + 1) || " ", this.get(x, y + 1) || " ", this.get(x + 1, y + 1) || " "]
      ];
    }

    paint(x: number, y: number) {
      const commands: string[] = [];
      const subgrid = this.subgrid(x, y);
      if (!subgrid) {
        assert.fail();
      }

      const center = subgrid[1][1];
      const left = subgrid[1][0];
      const right = subgrid[1][2];
      const top = subgrid[0][1];
      const top_right = subgrid[0][2];
      const top_left = subgrid[0][0];
      const bottom = subgrid[2][1];
      const bottom_right = subgrid[2][2];
      const bottom_left = subgrid[2][0];

      const primitives = [
        // endings
        "*",
        "o",
        "#",
        // pipes
        "|",
        "-",
        // diagonals
        "/",
        "\\"
      ];

      if (primitives.includes(center)) {
        commands.push(center);
      }

      // connectors and endings
      if (center == "+" || center == "*" || center == "o" || center == "#") {
        if (left == "-") {
          commands.push("╴");
        }
        if (right == "-") {
          commands.push("╶");
        }
        if (top == "|") {
          commands.push("╵");
        }
        if (bottom == "|") {
          commands.push("╷");
        }
        if (top_right == "/") {
          commands.push("/t");
        }
        if (top_left == "\\") {
          commands.push("\\t");
        }
        if (bottom_right == "\\") {
          commands.push("\\b");
        }
        if (bottom_left == "/") {
          commands.push("/b");
        }
      } else if (subgrid[1][1] == ".") {
        // top-left rounded corner
        if (right == "-" && bottom == "|") {
          commands.push("╭");
        }
        // top-right rounded corner
        if (left == "-" && bottom == "|") {
          commands.push("╮");
        }
        // bottom-left rounded corner
        if (right == "-" && top == "|") {
          commands.push("╰");
        }
        // bottom-right rounded corner
        if (left == "-" && top == "|") {
          commands.push("╯");
        }
        if (bottom_left == "/" && bottom_right == "\\") {
          commands.push("⌒b");
        }
        if (top_left == "\\" && top_right == "/") {
          commands.push("⌒t");
        }
        if (top_right == "/" && bottom_right == "\\") {
          commands.push("⌒r");
        }
        if (top_left == "\\" && bottom_left == "/") {
          commands.push("⌒l");
        }
      }

      return commands;
    }

    go() {
      const result: string[][] = [];
      for (let y = 0; y < this.height; y++) {
        const row: string[] = [];
        result.push(row);
        for (let x = 0; x < this.rows[y].length; x++) {}
      }
      return result;
    }
  }

  it("parser", () => {
    expect(1).toEqual(1);
    expect(new Grid("").size()).toEqual([0, 1]);
    expect(new Grid("a").size()).toEqual([1, 1]);
    expect(new Grid("ab").size()).toEqual([2, 1]);
    expect(new Grid("\n").size()).toEqual([0, 2]);
    expect(new Grid("a\n").size()).toEqual([1, 2]);
    expect(new Grid("a\nb").size()).toEqual([1, 2]);
    expect(new Grid("ab\n").size()).toEqual([2, 2]);
    expect(new Grid("ab\ncd").size()).toEqual([2, 2]);
    expect(new Grid("ab\ncde").size()).toEqual([3, 2]);
    expect(new Grid("\n\n").size()).toEqual([0, 3]);
    expect(new Grid("\na\n").size()).toEqual([1, 3]);
  });

  it("cells", () => {
    expect(new Grid("").get(0, 0)).toEqual(undefined);
    expect(new Grid("").get(-1, 0)).toEqual(undefined);
    expect(new Grid("").get(0, -1)).toEqual(undefined);

    expect(new Grid("a").get(-1, 0)).toEqual(undefined);
    expect(new Grid("a").get(0, -1)).toEqual(undefined);
    expect(new Grid("a").get(0, 0)).toEqual("a");
    expect(new Grid("a").get(0, 1)).toEqual(undefined);
    expect(new Grid("a").get(1, 0)).toEqual(undefined);

    expect(new Grid("ab").get(0, 0)).toEqual("a");
    expect(new Grid("ab").get(1, 0)).toEqual("b");
    expect(new Grid("ab").get(0, 1)).toEqual(undefined);
    expect(new Grid("ab").get(2, 0)).toEqual(undefined);
    expect(new Grid("ab").get(2, 1)).toEqual(undefined);

    expect(new Grid("a\nb").get(0, 0)).toEqual("a");
    expect(new Grid("a\nb").get(1, 0)).toEqual(undefined);
    expect(new Grid("a\nb").get(0, 1)).toEqual("b");
    expect(new Grid("a\nb").get(1, 1)).toEqual(undefined);

    expect(new Grid("ab\nc").get(0, 0)).toEqual("a");
    expect(new Grid("ab\nc").get(1, 0)).toEqual("b");
    expect(new Grid("ab\nc").get(2, 0)).toEqual(undefined);
    expect(new Grid("ab\nc").get(0, 1)).toEqual("c");
    expect(new Grid("ab\nc").get(1, 1)).toEqual(" ");
    expect(new Grid("ab\nc").get(2, 1)).toEqual(undefined);
  });

  it("subgrid", () => {
    expect(new Grid("").subgrid(0, 0)).toEqual(undefined);

    expect(new Grid("a").subgrid(0, 0)).toEqual([
      [" ", " ", " "],
      [" ", "a", " "],
      [" ", " ", " "]
    ]);

    expect(new Grid("ab").subgrid(0, 0)).toEqual([
      [" ", " ", " "],
      [" ", "a", "b"],
      [" ", " ", " "]
    ]);
    expect(new Grid("ab").subgrid(1, 0)).toEqual([
      [" ", " ", " "],
      ["a", "b", " "],
      [" ", " ", " "]
    ]);

    expect(new Grid("a\nb").subgrid(0, 0)).toEqual([
      [" ", " ", " "],
      [" ", "a", " "],
      [" ", "b", " "]
    ]);
    expect(new Grid("a\nb").subgrid(0, 1)).toEqual([
      [" ", "a", " "],
      [" ", "b", " "],
      [" ", " ", " "]
    ]);

    expect(new Grid("ab\nc").subgrid(0, 0)).toEqual([
      [" ", " ", " "],
      [" ", "a", "b"],
      [" ", "c", " "]
    ]);
    expect(new Grid("ab\nc").subgrid(1, 0)).toEqual([
      [" ", " ", " "],
      ["a", "b", " "],
      ["c", " ", " "]
    ]);
    expect(new Grid("ab\nc").subgrid(0, 1)).toEqual([
      [" ", "a", "b"],
      [" ", "c", " "],
      [" ", " ", " "]
    ]);
    expect(new Grid("ab\nc").subgrid(1, 1)).toEqual([
      ["a", "b", " "],
      ["c", " ", " "],
      [" ", " ", " "]
    ]);
  });

  it("*", () => {
    expect(new Grid("*").paint(0, 0)).toEqual(["*"]);
  });

  it("o", () => {
    expect(new Grid("o").paint(0, 0)).toEqual(["o"]);
  });

  it("#", () => {
    expect(new Grid("#").paint(0, 0)).toEqual(["#"]);
  });

  it("|", () => {
    expect(new Grid("|").paint(0, 0)).toEqual(["|"]);
  });

  it("-", () => {
    expect(new Grid("-").paint(0, 0)).toEqual(["-"]);
  });

  it("/", () => {
    expect(new Grid("/").paint(0, 0)).toEqual(["/"]);
  });

  it("\\", () => {
    expect(new Grid("\\").paint(0, 0)).toEqual(["\\"]);
  });

  it("+", () => {
    expect(new Grid("+").paint(0, 0)).toEqual([]);
  });

  it("cross right", () => {
    expect(new Grid("+-").paint(0, 0)).toEqual(["╶"]);
  });

  it("cross left", () => {
    expect(new Grid("-+").paint(1, 0)).toEqual(["╴"]);
  });

  it("cross down", () => {
    expect(new Grid("+\n|").paint(0, 0)).toEqual(["╷"]);
  });

  it("cross up", () => {
    expect(new Grid("|\n+").paint(0, 1)).toEqual(["╵"]);
  });

  it("cross top-right", () => {
    expect(new Grid([" /", "+ "].join("\n")).paint(0, 1)).toEqual(["/t"]);
  });

  it("cross top-left", () => {
    expect(new Grid(["\\ ", " +"].join("\n")).paint(1, 1)).toEqual(["\\t"]);
  });

  it("cross bottom-right", () => {
    expect(new Grid(["+ ", " \\"].join("\n")).paint(0, 0)).toEqual(["\\b"]);
  });

  it("cross bottom-left", () => {
    expect(new Grid([" +", "/ "].join("\n")).paint(1, 0)).toEqual(["/b"]);
  });

  it("cross top corner", () => {
    expect(new Grid([" +", "/ \\"].join("\n")).paint(1, 0)).toEqual(["\\b", "/b"]);
  });

  it("cross bottom corner", () => {
    expect(new Grid(["\\ /", " + "].join("\n")).paint(1, 1)).toEqual(["/t", "\\t"]);
  });

  it("cross right corner", () => {
    expect(new Grid(["  /", " + ", "  \\"].join("\n")).paint(1, 1)).toEqual(["/t", "\\b"]);
  });

  it("cross left corner", () => {
    expect(new Grid(["\\", " +", "/ "].join("\n")).paint(1, 1)).toEqual(["\\t", "/b"]);
  });

  it("cross diagonal corner", () => {
    expect(new Grid(["\\ /", " +", "/ \\"].join("\n")).paint(1, 1)).toEqual(["/t", "\\t", "\\b", "/b"]);
  });

  it("top-left corner", () => {
    expect(new Grid(["+-", "| "].join("\n")).paint(0, 0)).toEqual(["╶", "╷"]);
  });

  it("top-right corner", () => {
    expect(new Grid(["-+", " |"].join("\n")).paint(1, 0)).toEqual(["╴", "╷"]);
  });

  it("bottom-left corner", () => {
    expect(new Grid(["|", "+-"].join("\n")).paint(0, 1)).toEqual(["╶", "╵"]);
  });

  it("bottom-left corner", () => {
    expect(new Grid([" |", "-+"].join("\n")).paint(1, 1)).toEqual(["╴", "╵"]);
  });

  it("top-bottom-right corner", () => {
    expect(new Grid(["| ", "+-", "| "].join("\n")).paint(0, 1)).toEqual(["╶", "╵", "╷"]);
  });

  it("top-bottom-left corner", () => {
    expect(new Grid([" |", "-+", " |"].join("\n")).paint(1, 1)).toEqual(["╴", "╵", "╷"]);
  });

  it("top-bottom-right-left corner", () => {
    expect(new Grid([" | ", "-+-", " | "].join("\n")).paint(1, 1)).toEqual(["╴", "╶", "╵", "╷"]);
  });

  it("* right", () => {
    expect(new Grid("*-").paint(0, 0)).toEqual(["*", "╶"]);
  });

  it("* left", () => {
    expect(new Grid("-*").paint(1, 0)).toEqual(["*", "╴"]);
  });

  it("* down", () => {
    expect(new Grid("*\n|").paint(0, 0)).toEqual(["*", "╷"]);
  });

  it("* up", () => {
    expect(new Grid("|\n*").paint(0, 1)).toEqual(["*", "╵"]);
  });

  it("* top-left corner", () => {
    expect(new Grid(["*-", "| "].join("\n")).paint(0, 0)).toEqual(["*", "╶", "╷"]);
  });

  it("* top-right corner", () => {
    expect(new Grid(["-*", " |"].join("\n")).paint(1, 0)).toEqual(["*", "╴", "╷"]);
  });

  it("* bottom-left corner", () => {
    expect(new Grid(["|", "*-"].join("\n")).paint(0, 1)).toEqual(["*", "╶", "╵"]);
  });

  it("* bottom-left corner", () => {
    expect(new Grid([" |", "-*"].join("\n")).paint(1, 1)).toEqual(["*", "╴", "╵"]);
  });

  it("* top-bottom-right corner", () => {
    expect(new Grid(["| ", "*-", "| "].join("\n")).paint(0, 1)).toEqual(["*", "╶", "╵", "╷"]);
  });

  it("* top-bottom-left corner", () => {
    expect(new Grid([" |", "-*", " |"].join("\n")).paint(1, 1)).toEqual(["*", "╴", "╵", "╷"]);
  });

  it("* top-bottom-right-left corner", () => {
    expect(new Grid([" | ", "-*-", " | "].join("\n")).paint(1, 1)).toEqual(["*", "╴", "╶", "╵", "╷"]);
  });

  it("o right", () => {
    expect(new Grid("o-").paint(0, 0)).toEqual(["o", "╶"]);
  });

  it("o left", () => {
    expect(new Grid("-o").paint(1, 0)).toEqual(["o", "╴"]);
  });

  it("o down", () => {
    expect(new Grid("o\n|").paint(0, 0)).toEqual(["o", "╷"]);
  });

  it("o up", () => {
    expect(new Grid("|\no").paint(0, 1)).toEqual(["o", "╵"]);
  });

  it("o top-left corner", () => {
    expect(new Grid(["o-", "| "].join("\n")).paint(0, 0)).toEqual(["o", "╶", "╷"]);
  });

  it("o top-right corner", () => {
    expect(new Grid(["-o", " |"].join("\n")).paint(1, 0)).toEqual(["o", "╴", "╷"]);
  });

  it("o bottom-left corner", () => {
    expect(new Grid(["|", "o-"].join("\n")).paint(0, 1)).toEqual(["o", "╶", "╵"]);
  });

  it("o bottom-left corner", () => {
    expect(new Grid([" |", "-o"].join("\n")).paint(1, 1)).toEqual(["o", "╴", "╵"]);
  });

  it("o top-bottom-right corner", () => {
    expect(new Grid(["| ", "o-", "| "].join("\n")).paint(0, 1)).toEqual(["o", "╶", "╵", "╷"]);
  });

  it("o top-bottom-left corner", () => {
    expect(new Grid([" |", "-o", " |"].join("\n")).paint(1, 1)).toEqual(["o", "╴", "╵", "╷"]);
  });

  it("o top-bottom-right-left corner", () => {
    expect(new Grid([" | ", "-o-", " | "].join("\n")).paint(1, 1)).toEqual(["o", "╴", "╶", "╵", "╷"]);
  });

  it("# right", () => {
    expect(new Grid("#-").paint(0, 0)).toEqual(["#", "╶"]);
  });

  it("# left", () => {
    expect(new Grid("-#").paint(1, 0)).toEqual(["#", "╴"]);
  });

  it("# down", () => {
    expect(new Grid("#\n|").paint(0, 0)).toEqual(["#", "╷"]);
  });

  it("# up", () => {
    expect(new Grid("|\n#").paint(0, 1)).toEqual(["#", "╵"]);
  });

  it("# top-left corner", () => {
    expect(new Grid(["#-", "| "].join("\n")).paint(0, 0)).toEqual(["#", "╶", "╷"]);
  });

  it("# top-right corner", () => {
    expect(new Grid(["-#", " |"].join("\n")).paint(1, 0)).toEqual(["#", "╴", "╷"]);
  });

  it("# bottom-left corner", () => {
    expect(new Grid(["|", "#-"].join("\n")).paint(0, 1)).toEqual(["#", "╶", "╵"]);
  });

  it("# bottom-left corner", () => {
    expect(new Grid([" |", "-#"].join("\n")).paint(1, 1)).toEqual(["#", "╴", "╵"]);
  });

  it("# top-bottom-right corner", () => {
    expect(new Grid(["| ", "#-", "| "].join("\n")).paint(0, 1)).toEqual(["#", "╶", "╵", "╷"]);
  });

  it("# top-bottom-left corner", () => {
    expect(new Grid([" |", "-#", " |"].join("\n")).paint(1, 1)).toEqual(["#", "╴", "╵", "╷"]);
  });

  it("# top-bottom-right-left corner", () => {
    expect(new Grid([" | ", "-#-", " | "].join("\n")).paint(1, 1)).toEqual(["#", "╴", "╶", "╵", "╷"]);
  });

  it("top-left corner", () => {
    expect(new Grid([".-", "| "].join("\n")).paint(0, 0)).toEqual(["╭"]);
  });

  it("top-right corner", () => {
    expect(new Grid(["-.", " |"].join("\n")).paint(1, 0)).toEqual(["╮"]);
  });

  it("bottom-left corner", () => {
    expect(new Grid(["|", ".-"].join("\n")).paint(0, 1)).toEqual(["╰"]);
  });

  it("bottom-left corner", () => {
    expect(new Grid([" |", "-."].join("\n")).paint(1, 1)).toEqual(["╯"]);
  });

  it("top-bottom-right corner", () => {
    expect(new Grid(["| ", ".-", "| "].join("\n")).paint(0, 1)).toEqual(["╭", "╰"]);
  });

  it("top-bottom-left corner", () => {
    expect(new Grid([" |", "-.", " |"].join("\n")).paint(1, 1)).toEqual(["╮", "╯"]);
  });

  it("top-bottom-right-left corner", () => {
    expect(new Grid([" | ", "-.-", " | "].join("\n")).paint(1, 1)).toEqual(["╭", "╮", "╰", "╯"]);
  });

  it("dot cross top-right", () => {
    expect(new Grid([" /", ". "].join("\n")).paint(0, 1)).toEqual([]);
  });

  it("dot cross top-left", () => {
    expect(new Grid(["\\ ", " ."].join("\n")).paint(1, 1)).toEqual([]);
  });

  it("dot bottom-right", () => {
    expect(new Grid([". ", " \\"].join("\n")).paint(0, 0)).toEqual([]);
  });

  it("dot bottom-left", () => {
    expect(new Grid([" .", "/ "].join("\n")).paint(1, 0)).toEqual([]);
  });

  it("dot top corner", () => {
    expect(new Grid([" .", "/ \\"].join("\n")).paint(1, 0)).toEqual(["⌒b"]);
  });

  it("dot bottom corner", () => {
    expect(new Grid(["\\ /", " . "].join("\n")).paint(1, 1)).toEqual(["⌒t"]);
  });

  it("dot right corner", () => {
    expect(new Grid(["  /", " . ", "  \\"].join("\n")).paint(1, 1)).toEqual(["⌒r"]);
  });

  it("cross left corner", () => {
    expect(new Grid(["\\", " .", "/ "].join("\n")).paint(1, 1)).toEqual(["⌒l"]);
  });

  it("dot diagonal corner", () => {
    expect(new Grid(["\\ /", " .", "/ \\"].join("\n")).paint(1, 1)).toEqual(["⌒b", "⌒t", "⌒r", "⌒l"]);
  });
});
