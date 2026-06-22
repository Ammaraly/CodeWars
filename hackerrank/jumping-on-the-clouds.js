// Complete the jumpingOnClouds function below.
//
// \/-/\
function jumpingOnClouds(clouds, jump_length) {
  let energy = 100;
  let landed = false;
  let index = 0;
  while (!landed) {
    energy -= 1;
    index = (index + jump_length) % clouds.length;
    const charge = clouds[index];
    if (charge) energy -= 2;
    if (index === 0) landed = true;
  }

  return energy;
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2));
