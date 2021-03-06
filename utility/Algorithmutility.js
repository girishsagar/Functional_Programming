/**
 * Execution default cmd>node.js
 * @purpose :Read in a list of words from File.
 * Then prompt the user to enter a word to search the list.
 */
const input = require("readline-sync");
exports.binarySearch = (arr, search) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == search) {
      return mid;
    } else if (arr[mid] <= search) {
      return mid - 1;
    } else if (arr[mid] >= search) {
      return mid + 1;
    } else {
      return -1;
    }
  }
};

/**
 *Execution default cmd>node.js
 @purpose :Reads in strings and prints them in sorted order using insertion sort.
 */
(exports.insertionsort = array => {
  let temp;
  //array = ["yogesh", "karun", "jaggu", "sagar", "arun"];
  array = [75, 8, 312, 12, 1];
  let j = 0;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j = j - 1;
    }
    array[j] = temp;
  }
  for (const i of array) {
    console.log(i);
  }
  //.for (let i = 0; i < array.length; i++) console.log(array[i]);
}),
  /**
   * Execution default cmd>node.js
   * @purpose :Reads in integers prints them in sorted order using Bubble Sort
   */
  (exports.bubblesort = array => {
    let temp;
    array = [25, 65, 9, 1, 58];
    var len = array.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (array[j] > array[j + 1]) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    for (const i of array) {
      console.log(i);
    }
  });
/**
 * Execution default cmd>node.js
 * @purpose : Read and integer and sort an  using a MegrgeSort divide and Conquer rule
 */
exports.mergeSort = () => {
  function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  const array = [9, 2, 7, 6, 11, 3, 1, 10, 13, 8];
  console.log(mergeSort(array));
};
/**
 * Execution defaulr cmd>node.js
 * @purpose :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 */

exports.prime = () => {
  let temp = 0;
  for (let i = 1; i <= 1000; i++) {
    for (let j = 2; j <= i - 1; j++) {
      if (i % j == 0) {
        temp = temp + 1;
      }
    }
    if (temp == 0) {
      console.log(i);
    } else {
      temp = 0;
    }
  }
};
/**
 * Execution default cmd>node.js
 * @purpose :To check given String Anagram or not
 */
exports.anagram = (str1, str2) => {
  str1 = input.question("Enter the String 1 ");
  str2 = input.question(" Enter the String2 ");
  let sorted1 = str1
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  let sorted2 = str2
    .split("")
    .sort()
    .join("")
    .toLowerCase();
  //  Array.sort(word1)

  if (sorted1 == sorted2) {
    console.log("its a Anagaram");
  } else {
    console.log("its not an Anagram  ");
  }
};
/**
 * Execution default cmd>node.js
 * @purpose : String using iterative method and Recursion method Permutation.
 */

exports.permutation = permutation => {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};

/**
 * Execution default cmd>node.js
 * @purpose :to Check given string anagram palidrome or not
 */
exports.anagramPalindrome = str1 => {
  const charCheck = {};
  let currStr;

  for (let i = 0; i < str1.length; i++) {
    currStr1 = str1[i];
    if (charCheck[currStr1]) {
      delete charCheck[currStr1];
    } else {
      charCheck[currStr1] = true;
    }
  }

  return Object.keys(charCheck).length > 1 ? false : true;
};

/**
 * Execution default cmd>node.js
 * @purpose :> takes a command-line argument N, asks you to think
 * of a number between 0 and N-1, where N = 2^n,
 * and always guesses the answer with n questions.
 */

exports.binarySort = number => {
  var n = 1;

  for (var i = 1; i <= number; i++) {
    n = n * 2;
  }
  var min = 0;
  var max = n;
  var guess = min + max / 2;
  var num1 = 0;
  var tries = 1;
  if (max >= min) {
    while (num1 != 1) {
      console.log("1.Is your number" + guess + "?");
      console.log("2.Is your number higher than " + guess + "?");
      console.log("3.Is your number lower than " + guess + "?");

      var num1 = input.question("enter The input:");

      if (num1 == 2) {
        min = guess;
        guess = min + (max - guess) / 2;
        tries++;
      } else if (num1 == 3) {
        max = guess;
        guess = min + (guess - min) / 2;
        tries++;
      }
    }
  }
  console.log(tries + " tries required to find " + Math.floor(guess));
  return tries;
};
