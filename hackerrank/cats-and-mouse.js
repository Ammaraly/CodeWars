function mouseEscapes() {
  return "Mouse C";
}

function catCatches(name) {
  return `Cat ${name}`;
}

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  const diffA = Math.abs(x - z);
  const diffB = Math.abs(y - z);
  if (diffA > diffB) return catCatches("B");
  if (diffA < diffB) return catCatches("A");

  return mouseEscapes();
}
