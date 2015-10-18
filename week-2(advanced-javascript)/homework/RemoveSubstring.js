/*
Implement a removeSubstring function that allows a specific sub-string to be removed from any string object, if the substring is present. Note, your function should take a second, optional numeric parameter. This parameter will be used in the event that the substring occurs more than once. If present, this parameter will indicate the number of times the substring should be removed from the string. If omitted, you should remove ALL occurrences of the substring.
var str1 = 'aaa';
var newStr1 = str1.removeSubstring('a', 2); // newStr = 'a'
console.log( newStr1 )
var str2 = 'aaabbbb';
var newStr2 = str2.removeSubstring('a'); // newStr = 'bbbb'
Your code should execute the code above.
*/

String.prototype.removeSubstring = function(substring, numberOfRemovals) {
  var toReturn = "";
  
  if (arguments.length === 1) {
    
    for (var i = 0; i < this.length; i++) {
      
      if (substring.length === 1) {
        if (this[i] !== substring) {
          toReturn += this[i];
        }
      } else if (substring.length === 2) {
        if (this[i] + this[i+1] !== substring) {
          toReturn += this[i];
        } else { // if substring is found
          i += 1;
        }
      } else if (substring.length === 3) {
        if (this[i] + this[i+1] + this[i+2]!== substring) {
          toReturn += this[i];
        } else { // if substring is found
          i += 2;
        }
      }
      
    }
    
  } else { // if arguments.length === 2
    
    var counter = 0;
    
        for (var i = 0; i < this.length; i++) {

          if (substring.length === 1) {
            if (this[i] !== substring) {
              toReturn += this[i];
            } else if (counter >= numberOfRemovals) {
              toReturn += this[i];
            } else {
              counter++;
            }
          } else if (substring.length === 2) {
            if (this[i] + this[i+1] !== substring) {
              toReturn += this[i];
            } else if (counter >= numberOfRemovals) {
              toReturn += this[i];
            } else { // if substring is found
              i += 1;
              counter++;
            }
          } else if (substring.length === 3) {
            if (this[i] + this[i+1] + this[i+2]!== substring) {
              toReturn += this[i];
            } else if (counter >= numberOfRemovals) {
              toReturn += this[i];
            } else { // if substring is found
              i += 2;
              counter++;
            }
          }
          
        }
  }
    return toReturn;
  
};

var str1 = 'aaa';
var newStr1 = str1.removeSubstring('a', 2); // newStr = 'a'
console.log("expected (a): " + newStr1);

var str2 = 'aaabbbb';
var newStr2 = str2.removeSubstring('a'); // newStr = 'bbbb'
console.log("expected (bbbb): " + newStr2);

var str3 = 'abcba';
var newStr3 = str3.removeSubstring('cb'); // newStr = 'aba'
console.log("expected: (aba): " + newStr3);

var str4 = 'abcbabc';
var newStr4 = str4.removeSubstring('bc', 1); // newStr = 'ababc'
console.log("expected (ababc): " + newStr4);

var str5 = 'aaabaaabaaab';
var newStr5 = str5.removeSubstring('aaa', 2); // newStr = 'bbaaab'
console.log("expected (bbaaab): " + newStr5);