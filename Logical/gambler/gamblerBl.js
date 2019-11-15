/** @Execution : default cmd>node.js
 * @filename :gambler.js
 * @Purpose :Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke
 *  (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and
 * the number of bets he/she makes. Run the experiment N times, averages the results,
 * and prints them out.
 */
exports.gambler = (stake, goal, trial) => {
  let bets = 0;
  let wins = 0;
  for (let i = 0; i <= trial; i++) {
    let cash = stake;
    while (cash > 0 && cash < goal) {
      bets++;
      if (Math.random() < 0.5) {
        cash++;
      } else {
        cash--;
      }
      if (cash == goal) {
        wins++;
      }
    }
    console.log(wins + " wins of " + trial);
    console.log("Percent of games won = " + (100.0 * wins) / trial);
    console.log("Avg # bets = " + (1.0 * bets) / trial);
  }
};
