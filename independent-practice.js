//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var lengths = function(arg) {
  var resultNumArr = [];
  arg.forEach(function(someStr){
    resultNumArr.push(someStr.length);
  });
  return resultNumArr;
}
console.log(
  lengths(['a','aa','aaa','aaaa'])
);

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
var transmogrifier = function(arg1, arg2, arg3){
  var transmogrified = Math.pow((arg1* arg2), arg3);
  return transmogrified;
}

console.log(
  transmogrifier(2,2,2)
);

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
var wordReverse = function() {

  return this.split('').reverse().toString().replace(/,/g,'');
}

String.prototype.wordReverse = wordReverse;
console.log(
"Wolo holo".wordReverse());
