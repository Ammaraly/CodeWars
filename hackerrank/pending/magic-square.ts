/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

class Entry {
  value = 0;

  constructor(_value = 0) {
    this.value = _value;
  }

  toString() {
    return `${this.value}`;
  }

  valueOf() {
    return this.value;
  }
}

function formingMagicSquare(s: number[][]): number {
  // Write your code here
  let totalCost = 0;

  let row1 = new Entry(),
    row2 = new Entry(),
    row3 = new Entry(),
    col1 = new Entry(),
    col2 = new Entry(),
    col3 = new Entry(),
    diag1 = new Entry(),
    diag2 = new Entry();

  const IndexRelationMapping = {
    "0-0": { row1, col1, diag1 },
    "0-1": { row1, col2 },
    "0-2": { row1, col3, diag2 },
    "1-0": { row2, col1 },
    "1-1": { row2, col2, diag1, diag2 },
    "1-2": { row2, col3 },
    "2-0": { row3, col1, diag2 },
    "2-1": { row3, col2 },
    "2-2": { row3, col3, diag1 },
  };

  for (let [rowIndex, row] of s.entries()) {
    for (let [colIndex, value] of row.entries()) {
      const affected =
        IndexRelationMapping[
          `${rowIndex}-${colIndex}` as keyof typeof IndexRelationMapping
        ];
      Object.keys(affected).forEach((key) => {
        ((affected as Record<string, Entry>)[key] as Entry).value += value;
      });
    }
  }

  console.log({
    row1,
    row2,
    row3,
    col1,
    col2,
    col3,
    diag1,
    diag2,
    average: (row1 + row2 + row3 + col1 + col2 + col3 + diag1 + diag2) / 8,
  });
  return totalCost;
}

console.log(
  formingMagicSquare([
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ]),
);
