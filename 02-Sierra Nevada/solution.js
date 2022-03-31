const fs = require('fs');

const input = fs
  .readFileSync('./map.txt', 'utf-8')
  .split(/\r?\n/)
  .filter((line) => line)
  .map((line) =>
    line
      .trim()
      .split(' ')
      .map((x) => ({ value: parseInt(x, 10) }))
  );

function iterateMatrix(fn) {
  for (let y = 0; y < input.length; y += 1) {
    for (let x = 0; x < input[0].length; x += 1) {
      fn(x, y);
    }
  }
}

iterateMatrix((x, y) => {
  const current = input[y][x];
  const neighbors = [];
  if (y > 0) {
    neighbors.push(input[y - 1][x]);
  }
  if (y < input.length - 1) {
    neighbors.push(input[y + 1][x]);
  }
  if (x > 0) {
    neighbors.push(input[y][x - 1]);
  }
  if (x < input[0].length - 1) {
    neighbors.push(input[y][x + 1]);
  }
  current.neighbors = neighbors;
  if (neighbors.every((cell) => cell.value >= current.value)) {
    current.depth = 1;
    current.min = current.value;
    current.delta = 0;
  }
});

let changed = true;
let longest;
while (changed) {
  changed = false;
  iterateMatrix((x, y) => {
    const current = input[y][x];
    if (current.depth === undefined) {
      const neighbors = current.neighbors.filter(
        (cell) => cell.value < current.value
      );
      if (
        neighbors.length > 0 &&
        neighbors.every((cell) => cell.depth !== undefined)
      ) {
        const best = neighbors.sort((a, b) =>
          a.depth === b.depth ? a.min - b.min : b.depth - a.depth
        )[0];
        current.depth = best.depth + 1;
        current.min = best.min;
        current.delta = current.value - current.min;
        if (
          !longest ||
          current.depth > longest.depth ||
          (current.depth === longest.depth && current.delta > longest.delta)
        ) {
          longest = current;
        }
        changed = true;
      }
    }
  });
}

console.log(`${longest.depth}-${longest.delta}`);
