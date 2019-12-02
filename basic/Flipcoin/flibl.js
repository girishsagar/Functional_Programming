/**
 * Execution defaulr cmd>node.js
 * @purpose :Flip con print percentage of head and tail
 */
exports.flipCoin = toss => {
  let head = 0;
  let tail = 0;
  try {
    for (let i = 0; i < toss; i++) {
      if (Math.random() < 0.5) {
        head++;
      } else {
        tail++;
      }
    }
    let headpercentage = (head * 100) / toss;
    console.log(headpercentage);
    let tailpercentage = (tail * 100) / toss;
    console.log(tailpercentage);
  } catch (e) {
    console.log(e);
  }
};
