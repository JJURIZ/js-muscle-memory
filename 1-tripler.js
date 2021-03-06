/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/
const firstArray = [1, 3, 6];
const secondArray = [10, 20, 30];

function tripler(array) {
  return array.map(x => x * 3);
}

console.log(tripler(firstArray));
console.log(tripler(secondArray));
console.log(firstArray);

// what am I returning ? array