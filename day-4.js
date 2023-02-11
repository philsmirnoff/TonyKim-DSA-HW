// Day 4 Assignment
// Problem 1: Recursion

// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.


const flatTheArray = (arr) => {
  let result = [];
  if (arr.length === 0) return result;  // edge case

  const helperFunction = (index, arr, result) => {
    if (index >= arr.length) return result; //base case

    if (Array.isArray(arr[index])) {
       helperFunction(0, arr[index], result); // call helper function start at index 0, pass in the current index of the array, and the flatten arrray
    } else {
      result.push(arr[index]); //if the current index is not an array, push the value into the flatArray
    }
     helperFunction(index + 1, arr, result); //call the helper function again, increment the index by 1, and pass in the array and the flatten array
  }
  helperFunction(0, arr, result);

  return result;
};

// console.log(flatTheArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatTheArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatTheArray([[1],[2],[3]])) // [1, 2, 3]
// console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1, 2, 3]

// Time Complexity: O(n)
// Space Complexity: O(n)

// ------------------------------------------------------//

// Problem 2: Recursion
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

// const capitalizeAllLetters = (array) => {
//   if (array.length === 0) return [];
//   let word = array[0].toUpperCase();
//   return [word].concat(capitalizeAllLetters(array.slice(1)));
// };

// console.log(capitalizeAllLetters(['tony', 'kim'])); // ['TONY', 'KIM']
// Time Complexity: O(n)
// Space Complexity: O(n)

// ------------------------------------------------------//

// Problem 3: Recursion
// example 12: collect Strings

// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string

// collectStrings(obj) // ["foo", "bar", "baz"])

//recursion with helper

function collectStrings(obj) {
  let stringsArr = [];
  if (Object.keys(obj).length === 0) return stringsArr;

    function gatherStrings(object) {
     for (let key in object) {
      if (typeof object[key] === 'string') {
        stringsArr.push(object[key]);
      } else if (typeof object[key] === 'object') {
        gatherStrings(object[key]);
      }
    }
  }
   gatherStrings(obj);

  return stringsArr;
}


// console.log(collectStrings({ 1: 'foo', 2: 'bar', 3: 'baz'}))

// Time Complexity: O(n)
// Space Complexity: O(n)

// ------------------------------------------------------//

// Problem 4: Bubble Sort
// Given the following data structure

// const data = [
//   {
//       name: 'John Smith',
//       age: new Map([['age', 88]]),
//       favoriteMovie: [
//           {
//               title: 'Hulk',
//               genre: 'action',
//               rating: 6
//           }
//       ]
//   },
//   {
//       name: 'Tony Kim',
//       age: new Map([['age', 3]]),
//       favoriteMovie: [
//           {
//               title: 'Top Gun',
//               genre: 'action',
//               rating: 10
//           }
//       ]
//   },
//   {
//       name: 'John Smith',
//       age: new Map([['age', 35]]),
//       favoriteMovie: [
//           {
//               title: 'Saw',
//               genre: 'horror',
//               rating: 8
//           }
//       ]
//   }
// ]
// Using the bubble sort, please sort each profile
// by ascending order for the following properties:
// - age
// - rating


const bubbleSort = (arr, key) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      let profile1 = arr[j];
      let profile2 = arr[j + 1];
      let value1, value2;

      if (key === 'age') {
        value1 = profile1.age.get('age');
        value2 = profile2.age.get('age');
      } else if (key === 'rating') {
        value1 = profile1.favoriteMovie[0].rating;
        value2 = profile2.favoriteMovie[0].rating;
      }

      if (value1 > value2) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// const sortedByAge = bubbleSort(data, 'age');
// console.log('sortedByAge', sortedByAge);
// const sortedByRating = bubbleSort(data, 'rating');
// console.log('sortedByRating', sortedByRating);

// Time Complexity: O(n^2)
// Space Complexity: O(1)
