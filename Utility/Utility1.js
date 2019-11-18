var input = require("readline-sync");
// module.exports = {
//   isReadArray() {
//     var SizeOfArray = input.question("Enter the size of an array ");
//     var array = [];
//     for (let i = 0; i < SizeOfArray; i++) {
//       array[i] = input.questionInt("Enter the elements");
//     }
//     let len = array.length;
//     for (var i = 0; i < len; i++) {
//       console.log(array[i] + " ");
//     }
//   },

//   bubblesort() {
//     var temp;
//     for (var i = 0; i < array.length; i++) {
//       for (var j = 0; j < array.length - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//           temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
//     for (var i = 0; i < len; i++) {
//       console.log(array + " ");
//       return array;
//     }
//   }
// };
exports.isReadArray=(array)=>
{
  var SizeOfArray = input.question("Enter the size of an array ");
     array = [];
    for (let i = 0; i < SizeOfArray; i++) {
      array[i] = input.questionInt("Enter the elements");
    }
    let len = array.length;
    for (var i = 0; i < len; i++) {
      console.log(array[i] + " ");
    }
  },

exports.bubblesort=(array)=>
{
  var temp;
  let len=array.length
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    for (var i = 0; i < len; i++) {
      console.log(array + " ");
      return array;
    }
  } 
