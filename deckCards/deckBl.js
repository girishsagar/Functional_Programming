/**
 * Execution default cmd>node.js
 * @description :using Random method and then distribute 9 Cards to 4 Players and
 * Print the Cards the received by the 4 Players
 */
exports.dec = () => {
  //initilizing decofcards suits and ranks
  let Suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  let Ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace"
  ];
  let n = Suits.length * Ranks.length;
  //deck=[]:an arry to store the values
  let deck = [];
  for (let i = 0; i < Ranks.length; i++) {
    for (let j = 0; j < Suits.length; j++) {
      deck[Suits.length * i + j] = Ranks[i] + " of " + Suits[j];
    }
  }
  /**
   * Math.floor():returns the largest integer less than or equal to a given number.
   * Math.random() :return pseudo-random number in the range 0 and 1
   */
  for (let i in n) {
    let r = i + Math.floor(Math.random() * (n - i));
    let temp = deck[r];
    deck[r] = deck[i];
    deck[i] = temp;
  }
  for (i = 0; i < 4; i++) {
    console.log("** Person " + (i + 1) + " **");

    for (let j = 0; j < 9; j++) {
      console.log(deck[i + j * 4] + " (Card " + (i + j * 4) + ")");
    }
  }
};
