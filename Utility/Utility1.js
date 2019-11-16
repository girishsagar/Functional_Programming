var input=require('readline-sync')
module.exports = {
  isReadArray() {
    var SizeOfArray = input.question("Enter the size of an array ");
    var array = [];
    for (let i = 0; i < SizeOfArray; i++) {
      array[i] = input.questionInt("Enter the elements");
    }
    var len = array.length;
  for(var i=0;i<len;i++)
  {
    console.log(array[i] + " ")
  }
  },

  bubblesort(array) {
    var temp;
  
    for (var i = 0; i <array.length- 1; i++) {
        for (var j = 0; j < array.length- i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    for (var i = 0; i < array.length; i++) {
        console.log(array + " ");
        return array;
    }
},
};
