//Slice
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSliced = numbers.slice(4, 8);
console.log(numberSliced);

//Splice
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSplice = numbers.splice(0, 3);
console.log(numberSplice);
//Output: [ 3, 6, 4 ]

//Splice remove and add new elements in an array in javascript
const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
const numberSplice = numbers.splice(4, 3, 1, 2, 3, 99);
console.log(numberSplice);
//[ 9, 19, 15 ]
console.log(numbers);
// [3, 6, 4, 8, 1,2, 3, 21, 45, 87]
