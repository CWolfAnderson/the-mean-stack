#### Week 2 Homework - Due 1/24/15 at 11:59pm

##### 1. Write a prototype function that converts a string separated by `_` or ` ` into a camelCase string. (4 pts)

'hello world'.toCamelCase(); // helloWorld
'hello_world'.toCamelCase(); // helloWorld

```javascript
String.prototype.toCamelCase = function() {
  var strArr = this.split("");

  for (var i = 0; i < strArr.length; i++) {
    if(strArr[i] === ' ' || strArr[i] === '_') {

      strArr[i] = "";
      strArr[i+1] = strArr[i+1].toUpperCase();
    }  
  }

  return strArr.join("");
};
```

##### 2. Write a prototype function that converts a 2D array into an object. (4 pts)
var arr = [['media', 'facebook'], ['company', 'github'], ['likes', 48445]];
arr.convertToObject();
// { media: 'facebook', company: 'github', likes: '48445' }

```javascript
Array.prototype.convertToObject = function() {
  var object = {};

  this.forEach(function(currentEl) {
    object[currentEl[0]] = currentEl[1];
  });

  return object;
};

var arr = [['media', 'facebook'], ['company', 'github'], ['likes', 48445]];
console.log(arr.convertToObject()); // { media: 'facebook', company: 'github', likes: '48445' }
```

##### 3. Write a prototype function that converts an object into a 2D array. (4 pts)

var obj = { media: 'facebook', company: 'github', likes: '48445' }
obj.convertToArray();
// [['media', 'facebook'], ['company', 'github'], ['likes', 48445]];

```javascript
Object.prototype.convertToArray = function() {
  console.log("this: " + this);
  var array = [];

  for (var key in this) {
    console.log(key + ": " + this[key]);
    //array.push([key, this[key]]);
  }

  return "hi";
};

var obj = { media: 'facebook', company: 'github', likes: '48445' };

console.log(obj.convertToArray());
// [['media', 'facebook'], ['company', 'github'], ['likes', 48445]];
```

##### 4.  Write a closure that scores a fruit ninja. (4 pts).

--- Each time the ninja slices - the score increases by 1. <br />
--- Each time the ninja misses - the score decreases by 1. <br />
--- Each time getScore is called it returns the current score of the ninja.

```javascript
function ninjaSlice() {
  var pointIncrease = 1;
  return function(ninja) {
    ninja.score += pointIncrease;
  };
}

function ninjaMiss() {
  var pointDecrease = 1;
  return function(ninja) {
    ninja.score -= pointDecrease;
  };
}

function getScore(ninja) {
  return ninja.score;
}

var slice = ninjaSlice();
var miss = ninjaMiss();

var Ninja = function(name) {
  this.name = name;
  this.score = 0;
};

var ninja = new Ninja("Christoph");
console.log(ninja.name);
console.log("hit");
slice(ninja);
console.log("score: " + getScore(ninja));
console.log("hit");
slice(ninja);
console.log("score: " + getScore(ninja));
console.log("hit");
slice(ninja);
console.log("score: " + getScore(ninja));
console.log("miss");
miss(ninja);
console.log("score: " + getScore(ninja));
```

##### 5.  Create a Quadrilateral object (a quadrilateral is a polygon with four sides). Create a Diamond object that inherits from Quadrilateral. (4 pts)

--- Both objects should have constructors. <br />
--- Any quadrilateral object should be able to use a getArea() function. <br />
--- Any quadrilateral object should be able to use a getPerimeter() function.

```javascript
var Quadrilateral = function(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  // getArea() function

  // getPerimeter() function

};

Quadrilateral.prototype.getArea = function() {
  return this.side1 * this.side2;
};

Quadrilateral.prototype.getPerimeter = function() {
  return this.side1 + this.side2 + this.side3 + this.side4;
};

var Diamond = function(side) {
 Quadrilateral.call(this, side, side, side, side);
};

// Diamond inherits from Quadrilateral
Diamond.prototype = Object.create(Quadrilateral.prototype);

var diamond = new Diamond(3);

console.log("Perimeter: " + diamond.getPerimeter());
console.log("Area: " + diamond.getArea());
```

##### 6.  Write a series of functions that utilize callbacks (no returns) to determine if a number is even or odd. (4 pts)

--- Function 1 - Handles printing/console.log() <br />
--- Function 2 - Applys modulo. <br />
--- Function 3 - Evaluates the modulo result into 'even' or 'odd';

printAnswer(11) // odd

```javascript
console.log("23: " + oddOrEven(23, oddOrEvenTester));
console.log("12: " + oddOrEven(12, oddOrEvenTester));
console.log("0: " + oddOrEven(0, oddOrEvenTester));

function oddOrEven(num, callback) {
  return callback(num);
}

function oddOrEvenTester(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}reduce

```
