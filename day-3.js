// DAY 3 Assignment

// Please identify and solve the following patterns that appropriately matches divide and conquer or
// sliding window pattern using compexity of 0(n) or O(log(n)).

// Problem #1
// Given an array of integres and a number, write a function called maxSubbaraySum, which finds the
// maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first
// example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// We can solve it using sliding window pattern with example that you gave us in the class.

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;

}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null

// Time Complexity: O(n)
// Space Complexity: O(1)

//-------------------------------------------------------------//

// Problem #2
// Given a sorted array of integers, find the first occurence of a target value.
// if target is not found in the array, return -1.

// We can solve it using divide and conquer pattern, modifying example that you gave us in the class.

const binarySearchFirstOccurrence = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let firstOccurrence = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      firstOccurrence = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return firstOccurrence;
}

console.log(binarySearchFirstOccurrence([1,2,3,4,5], 3)) // 2
console.log(binarySearchFirstOccurrence([1,2,3,4,5], 6)) // -1
console.log(binarySearchFirstOccurrence([1,1,1,2,2,2,3,3,3], 2)) // 3

// Time Complexity: O(log(n))
// Space Complexity: O(1)

//-------------------------------------------------------------//

// Problem #3
// Given a string, find the length of the longest substring without repeating characters.



const lengthOfLongestSubstring = (s) => {
  // to store the length of the longest substring without repeating characters
  let longest = 0;
  // to store the last index of each character in the string
  let hashmap = {};
  // to store the index of the beginning of the substring without repeaitng characters
  let start = 0;
  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // if the character is already in the hashmap
    if (hashmap[char]) {
      // move the start of the substring to the next index of the repeated character
      start = Math.max(start, hashmap[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    hashmap[char] = i + 1;
  }
  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
// Time Complexity: O(n)
// Space Complexity: O(n)

