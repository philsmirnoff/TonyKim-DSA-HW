Problem 1: In 3-4 sentences, please explain what Big O Notation is. What is it used for? How do you calculate it?
Big O notation is a way to describe the efficiency of an algorithm. It is used to describe the worst case scenario of an algorithm. It is used to compare algorithms to see which one is more efficient. It is calculated by finding the dominant term in the algorithm. The dominant term is the term that grows the fastest. For example, if you have an algorithm that has a time complexity of O(n^2 + n), the dominant term is n^2, so the time complexity is O(n^2).

//---------------------------------------------------------------------//

Problem 2: For each of the time complexities shown below:
- Name the complexity
- Rank from 1-5 (1 being the best, 5 being the worst)
- Describe in 1-2 sentences of the complexity
- Provide a code example of how the complexity works

O(1) - Constant
1 - This is the best time complexity because it is constant. It does not matter how big the input is, it will always take the same amount of time to run.
This is an example of O(1) time complexity:
const constant = (input) => {
    return input[0];
}

O(log n) - Logarithmic
2 - Logarithmic time complexity is when the time execution is proprtional to the logarithm of the input size. Meaning the O(log n) complexity never lokks at all the elements in the input.An example would be for loop that does not loop every element of the array, but instead skips over elements.
This is an example of O(log n) time complexity:
const logarithmic = (input) => {
    let result = 0;
    for (let i = 1; i < input.length; i = i * 2) {
        result++;
    }
    return result;
}

O(n) - Linear
3 - Linear time complexity is when the time execution is proportional to the input size. Meaning the O(n) complexity always looks at every element in the input. An example would be a for loop that loops through every element of the array.
This is an example of O(n) time complexity:
const linear = (input) => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        result++;
    }
    return result;
}

O(n^2) - Quadratic
4 - Quadratic time complexity is when the time execution is proportional to the square of the input size. Meaning the O(n^2) complexity always looks at every element in the input, but it does it twice. An example would be a nested for loop that loops through every element of the array.
This is an example of O(n^2) time complexity:
const quadratic = (input) => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            result++;
        }
    }
    return result;
}

O(n!) - Factorial
5 - Factorial time complexity is when the time execution is proportional to the factorial of the input size. Meaning the O(n!) complexity always looks at every element in the input, but it does it n times. An example would be a nested for loop that loops through every element of the array n times.
This is an example of O(n!) time complexity:
const factorial = (input) => {
    let result = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            for (let k = 0; k < input.length; k++) {
                result++;
            }
        }
    }
    return result;
}

//---------------------------------------------------------------------//


Problem 3: Name three reasons why we care about Big O notation and we care about code performance.
1. Big O notation provides a way to analyze and compare the time complexity of different algorithms, which helps in determining the most efficient solution for a problem.
2. Improved performance can lead to faster execution times, which can save time and resources.
3. As applications and systems grow in size and complexity, the importance of code performance becomes increasingly important, as slow or inefficient code can lead to system slowdowns or even crashes, negatively impacting the user experience.

//---------------------------------------------------------------------//

Problem 4: What is the problem of using a time method such as performance.now() to measure how fast a code runs on our machines?
The problem with using a time method such as performance.now() to measure how fast a code runs on our machines is that the time it takes to run the code will vary depending on the machine it is running on. For example, if you run the same code on a laptop and a desktop, the laptop will likely run the code faster than the desktop. This is because the laptop has a faster processor than the desktop. So, using a time method to measure how fast a code runs on our machines is not a reliable to measure the time complexity of an algorithm.

//---------------------------------------------------------------------//

Problem 5: Given the following piece of code:
- Explain what the Total Time Complexity is
- Explain what the Consolidated Time Complexity is

const someFunction = (arr1) => {
  arr1.push(1).pop()

  for (let i = 0; i < arr1.length; i++) {
        console.log('do something 2')
  }

  for (let i = 0; i < arr1.length; i++) {
     console.log('do something 3')
  }

  for (let i = 0; i < arr1.length; i++) {
      for (let i = 0; i < arr1.length; i++) {
            console.log('do something 3')
    }
  }
}

The total Time complexity: function has 2 constant operation push and pop, 2 linear and 1 nested for loop, so it would be: 2 + 2n + n^2;
The consolidated Time complexity is O(n^2).

//---------------------------------------------------------------------//

Problem 6: Given the following piece of code:
- Explain what the Total Time Complexity is
- Explain what the Consolidated Time Complexity is

const someFunction1 = (arr1) => {
  let sum = arr1[1] + arr[2];

  while (condition) {
      sum = arr[5] + arr[7];
  }

  for (let i = 0; i < arr1.length; i++) {
      for (let i = 0; i < arr1.length; i++) {
          for (let i = 0; i < arr1.length; i++) { console.log('do something 3')
          }
      }
  }
}

The total time complexity: function has 1 constant operation, 1 linear and 1 triple nested for loop, so it would be: 1 + n + n^3;
The consolidated time complexity is O(n^3).

//---------------------------------------------------------------------//

Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.
We can ignore constants because they do not affect the time complexity of an algorithm. For example, if we have an algorithm that has a time complexity of O(2n), we can ignore the 2 and just say that the time complexity is O(n). We can consolidate our time complexities because it is easier to compare the time complexities of different algorithms when they are all in the same format. For example, if we have an algorithm that has a time complexity of O(n^2 + n), we can consolidate the time complexity to O(n^2).

//---------------------------------------------------------------------//

Problem 8: In 2-3 sentences, please explain what space complexity is why we care?

Space complexity is the amount of memory an algorithm uses. We care about space complexity because it can affect the performance of an algorithm. For example, if an algorithm uses a lot of memory, it may run slower than an algorithm that uses less memory.

//---------------------------------------------------------------------//

Problem 9: Given the following data TYPES, label what the space complexity is for each of one:
- Boolean - O(1)
- Undefined - O(1)
- Null - O(1)
- Number - O(1)
- String - O(n)
- Array - O(n)
- Object - O(n)

//---------------------------------------------------------------------//


Problem 10: Give two reasons when you should use an array and when you should use an object.
1. Use an array when: 1) you need to store a list of elements that are ordered and 2) you need fast access based on their index number.
2. Use an object when: 1) you need to store a list of elements that are not ordered and 2) you need fast look up time for values based on their keys.

//---------------------------------------------------------------------//

Problem 11: Given the following object methods, label what the time complexity is for each one:
const obj = { name: 'tony'
} // O(1)
//inserting
obj.age = 44; // O(1)

//removing
delete obj.age; // O(1)

//searching 1
obj.hasOwnProperty['name'] // O(1)
//searching 2
for (const prop in obj) {
  console.log(obj[prop])
} // O(n)
//accessing
obj.age //44 // O(1)

//retrieving keys
Object.keys(obj) // O(n)

//retrieving values
Object.values(obj) // O(n)

//---------------------------------------------------------------------//

Problem 12: Given the following array methods, label what the time complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];
//inserting 1
arr2.push(8) // O(1)

//inserting 2
arr2.unshift(0) // O(n)

//removing 1
arr2.pop() // O(1)

//removing 2
arr2.shift() // O(n)

//searching 1
const findNumber = arr2.find(num => num === 2) // O(n)


//searching 2
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 2) {
      return arr2[i]
    }
} // O(n)

//retrieving
const getNumber = arr2[3] // O(1)

//method 1
const double = arr2.map(num => num * 2) // O(n)

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) // O(n)

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) // O(n)

//method 4
for (const num of nums) {
  console.log(num * 2)
} // O(n)
//method 5
const convertToString = arr2.join(' ') // O(n)


// -------------------------------------------------------------------//


Problem 13: For each one of thses code blocks, please identify the time & space complexity and explanation of why it is

Problem 13.1:
function findFirstIndexOfNumber(number, array) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
        return i;
    }
  }
  return -1
}
Time complexity: O(n) we are using a for loop that iterates through the array once.
Space complexity: O(1) we are not creating any new variables or arrays, just returning index


Problem 13.2:
function findEachIndexOfNumber(number,array) {
  let arrayOfIndexes = [];
  array.forEach(function(element, index) {
     if (element === number) {
        arrayOfIndexes.push(index);
       }
   });
  return arrayOfIndexes;
 }
Time complexity: O(n) we are using a forEach that iterates through the array once.
Space complexity: O(n) we are creating a new array that is the same size as the input array

Problem 13.3:
const array = [36, 14, 1, 7, 21];

function higherOrLower(array) {
    if (array[array.length -1 ] > array[0]) {
        return "Higher";
    } else if (array[array.length -1 ] < array[0]) {
      return "Lower";
    } else {
    return "Neither";
   }
}

Time complexity: O(1) we are accessing the first and last element of the array
Space complexity: O(1) we are not creating any new variables or arrays, just returning a string

Problem 13.4:
const array = [1,2,3,4,5,6,7,8];

function determineSumOfSequentialArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

Time complexity: O(n) we are using a for loop that iterates through the array once.
Space complexity: O(1) we are not creating any new variables or arrays, just returning a number


Problem 13.5:
const array = [1,2,3,4,5,6,7,8];
function determineSumOfSequentialArray(array) {
   return array.length * (array.length + 1)/2;
}

Time complexity: O(1) we are performing a simple calculation
Space complexity: O(1) we are not creating any new variables or arrays, just returning a number

Problem 13.6:
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {
  let middleIndex = Math.floor((beginIndex + endIndex)/2);
  if (array[middleIndex] === number) {
     return middleIndex;
  } else if (beginIndex >= endIndex) {
    return -1;
  } else if (array[middleIndex] < number) {
    beginIndex = middleIndex + 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex);
  } else if (array[middleIndex] > number) {
    endIndex = middleIndex - 1;
    return recursiveBinarySearch(number, array, beginIndex, endIndex); }
}

Time complexity: O(log n) we are using a recursive function that divides the array in half each time
Space complexity: O(1) we are not creating any new variables or arrays, just returning a number

Problem 13.7:
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
function compareArrays(array1, array2) {
  let arrayOfPairs = [];
  array1.forEach(function(e, i) {
  array2.forEach(function(e2, i2) {
    if (e === e2) {
       arrayOfPairs.push([i, i2]);
     }
    });
  });
  return arrayOfPairs;
}

Time complexity: O(n^2) we are using a nested forEach method that iterates through the array twice
Space complexity: O(n) we are creating a new array that is the same size as the input array


Problem 13.8:
function sortByValue(array){
  function swap(array, index1, index2){
    let temporaryValue = array[index1];
    array[index1] = array[index2];
    array[index2] = temporaryValue;
  }
  let count = 1;
  while (count < array.length) {
    let swapCount = 0;
    for (let i=0; i<array.length-count; i++) {
    if (array[i] > array[i+1]) {
      swap(array, i, i+1);
       swapCount++;
      }
    }
    count++;
 }
  return array;
}

Time Complexity: O(n^2) we are using a nested while and for loop that iterates through the array twice
Space Complexity: O(n) we are not creating any new variables or arrays, just returning a number

Problem 13.9:
function returnDupes(array, array2) {
  let dupeArray = [];
  array.forEach(function(element) {
    if (array2.includes(element)) {
      dupeArray.push(element);
    }
  });
    return dupeArray;
  }

Time Complexity: O(n^2) we are using a nested forEach method and Array.includes() method that iterates through the array twice
Space Complexity: O(n) we are creating a new array that is the same size as the input array


Problem 13.10:
function sumFilteredData(array) {
  return array.filter(function(element) {
  return ((element > 5) && (element < 20)) }).reduce(function(valueToAdd, currentValue) {
  return valueToAdd + currentValue;
  }, 0);
}

Time Complexity: O(n) we are using a filter method and reduce method that iterates through the array once
Space Complexity: O(n) we are creating a new array that is the same size as the input array
