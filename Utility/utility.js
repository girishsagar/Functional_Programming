exports.isinput=()=>
{
  var input=require('readline-sync')
  var SizeOfArray=input.question("Enter the size of an array ")
  var array=[]
  for(let i=0;i<SizeOfArray;i++)
  {
    array[i]=input.questionInt("Enter the elements")
  }
}
exports.isdisplay=()=>
{
var array=[]
  for(let i=0;i<array.length;i++)
  {
    console.log(array[i])
  }
}

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
exports.insertionsort = array => {
  let temp;
  array=["yogesh","karun","jaggu","sagar","arun"]
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
};

/**
 * 
 */
exports.bubblesort= () =>
{
    let temp;
    //array=[25,65,9,1,58]
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length-1;j++)
        {
            if(array[j]>array[j+1])
            {
                temp=array[j];
                array[j]=array[j+1]
                array[j+1]=temp;
            }
        }
    }
    for (const i of array) {
   console.log(i)
    }
    
      }
