/*
Write a function named flattenArray that uses the reduce method in combination
with the concat method to “flatten” an array of arrays into a single array that has all
the elements of the input arrays. This function should apply to all arrays. (Hint: use
Array.prototype to define your function)
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log( arrays.flattenArray )
// ! [1, 2, 3, 4, 5, 6]
Your code should execute the code above.
*/

Array.prototype.flattenArray = function() {
  return this.reduce(function(previous, current){
    return previous.concat(current);
  });
};

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.flattenArray());
// ! [1, 2, 3, 4, 5, 6]
