//Js split
const printText = "The quick brown fox jumps";
const printSplit = printText.split(" ")
const printSplit = printText.split(" ", 5)
console.log(printSplit[2]);

//Js Slice
const printText = "The quick brown fox jumps";
const printSplit = printText.split(" ")
console.log(printSplit.slice(0, 4));

//Substr
const printText = "The quick brown fox jumps";
const printSplit = printText.substr(4, 5)
console.log(printSplit);


//Substring
const printText = "The quick brown fox jumps";
const printSplit = printText.substring(0, 4)
console.log(printSplit);

//Concat

const first = "amader";
const second = "city";
// const fullString = first + second;
const fullString = first.concat(second);
console.log(fullString);


//join
const words = ["a", "b", "c", "d"];
const allJoind = words.join(",");
console.log(allJoind);