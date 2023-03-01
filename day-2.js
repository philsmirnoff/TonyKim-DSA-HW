DAY 2 Assignment
Problem #1
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

we can solve this using two pointers i and j. i is used to keep track of the unique values, and j is used to traverse the array. If arr[i] is not equal to arr[j], it means we have found a new unique value, so i is incremented and arr[i] is set to arr[j]. This way, i + 1 is the number of unique values in the array.

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

Time Complexity - O(n)
Space Complexity - O(1)

Problem #2
Write a function called, areThereDublicates which accepts an array of letters and checks whether there are any dublicates among  the argument passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

We can solve this using freqiency counter pattern. We create an object and store the frequency of each letter in the array. If the frequency of any letter is greater than 1, it means there is a dublicate.

const areThereDublicates = (arrOfLetters) => {
  let obj = {};
  for (let letter of arrOfLetters) {
    obj[letter] = (obj[letter] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;

}
Time Complexity - O(n)
Space Complexity - O(n)

