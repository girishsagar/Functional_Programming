var input = require("readline-sync");
// exports.isReadArray=()=>
// {
//    var SizeOfArray=input.question("Enter the size of an array ")
//   var array=[]
//   for(let i=0;i<SizeOfArray;i++)
//   {
//     array[i]=input.questionInt("Enter the elements")
//   }
//   // var len = array.length;
//   // for(var i=0;i<len;i++)
//   // {
//   //   console.log(array[i] + " ")
//   // }
// }

/**
 * Execution default cmd>node.js
 * @purpose :Read in a list of words from File.
 * Then prompt the user to enter a word to search the list.
 */

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
  array = ["yogesh", "karun", "jaggu", "sagar", "arun"];
  //array = [75, 8, 312, 12, 1];
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

exports.prime = (number1, number2) => {
  let temp = 0;
  number1 = input.question("Enter the Starting Range ");
  number2 = input.question("Enter the Second Number");
  for (let i = 1; i <= number2; i++) {
    for (let j = 2; j <= number1 - 1; j++) {
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
