/**
 * Execution default cmd>nodejs
 * @filename :distance.js 
 * @purpose : Write a program Distance.java that takes two integer command-line arguments 
 * x and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0). 

 */
exports.distance = (xaxis, yaxis) => {
  try {
    let distance = Math.sqrt(xaxis * xaxis + yaxis * yaxis);
    console.log(distance);
  } catch (error) {
    console.log("give proper number");
  }
};
