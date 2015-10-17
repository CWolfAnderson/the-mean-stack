// Week 1 Homework - Due 10/05/15 at 11:59pm

/*
1. Write a function that determines if a word is a palindrome **Do not use Array.reverse().
isPalindrome('kayak'); // true
isPalindrome('cook');  // false
*/
console.log("Exercise 1:");
function isPalindrome(word) {

  var j = word.length - 1;
  for (var i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[j]) {
      return false;
    }
    j--;
  }
  return true;

}
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("cook")); // false

/*
2. Write a function that takes a string and replace repeated characters

replaceLetters("parallel"); // para**el
replaceLetters("muhaaa"); // muh***
*/
console.log("Exercise 2:");
function replaceLetters(word) {
  var j = 0;
  var toReturn = "";

  for (var i = 1; i < word.length+1; i++) {

    var current = word[i];
    var previous = word[i - 1];

    if (current !== previous) {
      toReturn += previous;
    } else {
      while (current === previous) {
        i++;
        toReturn += '*';
        current = word[i];
      }
      toReturn += '*';
    }

  }
  return toReturn;

}

console.log(replaceLetters("parallel")); // para**el
console.log(replaceLetters("muhaaa")); // muh***

/*
3. Write a function that finds the letter which occurs the most

repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); // value: y, occurances: 4
*/
console.log("Exercise 3:");
function repeatingLetters(array) {
  var toReturn = {};

  array.forEach(function(letter) {
    if (toReturn.hasOwnProperty(letter)) {
      toReturn[letter] ++;
    } else {
      toReturn[letter] = 1;
    }
  });

  console.log(toReturn);
  var occurance = 0;
  var value;
  for (var letter in toReturn) {
    if (toReturn[letter] > occurance) {
      occurance = toReturn[letter];
      value = letter;
    }
  }
  return "value: " + value + ", occurance(s): " + occurance;

}

console.log(repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'])); // value: y, occurances: 4

/*
4. Write a function that shuffles an array. The results should be random. HINT: Use Math Object - Math.floor(), Math.Random()

shuffleArray([1, 2, 3, 4, 5]); // [3, 5, 1, 2, 4]
*/
console.log("Exercise 4:");
function shuffleArray(arr) {
  var toReturn = [];
  var randomIndex = -1;
  var usedArr = [-1];

  for (var i = 0; i < arr.length; i++) {
    while (usedArr.indexOf(randomIndex) > -1) {
      randomIndex = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0;
    }
    usedArr.push(randomIndex);
    toReturn[randomIndex] = arr[i];
  }

  return toReturn;
}
console.log(shuffleArray([1, 2, 3, 4, 5])); // [3, 5, 1, 2, 4]

/*
5. Write a function that takes two numbers and a math operator (+, -, *, /) and performs the calculation.

calculate(2, 8, '-'); // 2 - 8 = -6
calculate(2, 8, '+'); // 2 + 8 = 10
calculate(2, 8, '*'); // 2 * 8 = 16
calculate(2, 8, '/'); // 2 / 8 = 0.25
*/
console.log("Exercise 5:");
function calculate(num1, num2, operator) {
  return eval(num1 + operator + num2);
}
console.log(calculate(2, 8, '-')); // 2 - 8 = -6
console.log(calculate(2, 8, '+')); // 2 + 8 = 10
console.log(calculate(2, 8, '*')); // 2 * 8 = 16
console.log(calculate(2, 8, '/')); // 2 / 8 = 0.25

/*
6. Write a function that sums all the numbers (string value numbers too) in an array with mixed types

sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]); // 21
*/
console.log("Exercise 6:");
function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(currentEl) {
    if (!isNaN(parseInt(currentEl))) {
      sum += parseInt(currentEl);
    }
  });
  return sum;
}
console.log(sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7])); // 21

/*
7. Write a function that takes a grocery array and tax amount as a percent. This function should calculate the total paid by applying the tax to each grocery item. HINT: use .toFixed() to force decimals to 2 places.

var groceries = [
{ name: 'Orange Juice', price: 2.00 },
{ name: 'Milk', price: 3.50 },
{ name: 'Cereal', price: 2.00 },
{ name: 'Sugar', price: 1.75 }
];
totalPaid(groceries, 9.5);

//
{ total: '10.13',
groceries:
[ { name: 'Orange Juice', paid: '2.19' },
{ name: 'Milk', paid: '3.83' },
{ name: 'Cereal', paid: '2.19' },
{ name: 'Sugar', paid: '1.92' } ] }
*/
console.log("Exercise 7:");
function totalPaid(list, tax) {
  var total = 0;
  var receipt = {};
  var receipts = [];
  var paid;
  var percentTax = tax / 100 + 1;

  list.forEach(function(item){
    paid = item.price * percentTax;
    total += paid;
    receipts.push({name: item.name, paid: paid.toFixed(2)});
  });
  receipt.total = total.toFixed(2);
  receipt.groceries = receipts;

  return receipt;
}

var groceries = [
  { name: 'Orange Juice', price: 2.00 },
  { name: 'Milk', price: 3.50 },
  { name: 'Cereal', price: 2.00 },
  { name: 'Sugar', price: 1.75 }
];
console.log(totalPaid(groceries, 9.5));
