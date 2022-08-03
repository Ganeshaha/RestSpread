// Rest / Spread Operator Exercises

// In this exercise, you’ll refactor some ES5 code into ES2015.
// Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

// Refactor it to use the rest operator & an arrow function:

/* Write an ES2015 Version */
function myFilterOutOdds(...args) {
    var nums = args;
    return nums.filter((num) =>{
      return num % 2 === 0;
    });
  }

// findMin

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

function findMin(...args){
    let smallest = args[0];
    for(let char of args){
        if(smallest >char){
            smallest = char
        }
    }
    return smallest;

}

//findMin(1,4,12,-3); // -3
//findMin(1,-1); // -1
//findMin(3,1); // 1

// mergeObjects

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
//mergeObjects({a:1, b:2}, {c:3, d:4}); // {a:1, b:2, c:3, d:4}
function mergeObjects(firstObj,secondObj){

    let returnObj = {...firstObj, ...secondObj};
    return returnObj;

}



// doubleAndReturnArgs

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.

//doubleAndReturnArgs([1,2,3],4,4); // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4); // [2, 20, 8]

function doubleAndReturnArgs(arr, ...args){
    let returnArr =[];
    returnArr+=arr;
    

    for(let char of args){
        returnArr += char*2;
    }

    return returnArr;

}


// Slice and Dice!

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) =>{

    let randIndex = Math.floor(Math.random()*items.length);
    let returnArr = [...items];
    returnArr.splice(randIndex,1);
    return returnArr;
}

/** Return a new array with every item in array1 and array2. */

const extend=(array1, array2)=> { 
  return [...array1, ...array2]

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal=(obj, key, val)=> {
  let tempObj = {};
  tempObj = {...obj,};
  tempObj[key]= val;
  return tempObj;

}


/** Return a new object with a key removed. */

const removeKey=(obj, key)=> {
  let tempObj = {...obj};
  tempObj[key]= undefined;
  return tempObj;

}


/** Combine two objects and return a new object. */

const combine=(obj1, obj2)=> {
  let tempObj = {};
  tempObj = {...obj1, ...obj2};
  return tempObj;

}


/** Return a new object with a modified key and value. */

const update=(obj, key, val)=> {

  let tempObj = {};
  tempObj = {...obj};
  tempObj[key]=val;
  return tempObj;



}

