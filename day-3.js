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

// Time Complexity: O(n)
// Space Complexity: O(1)

// slightly modified solution for the same problem using sliding window pattern from Grokking the Coding Interview

const maxSubarraySum = (arr, n) => {
  let maxSum = 0,
  windowSum = 0;
  windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];// add the next element
    // slide the window, no need to slide if we've not hit the window size of 'n'
    if (windowEnd >= n - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];// subtract the element going out
      windowStart++;// slide the window ahead
    }
  }
  return maxSum;
}


// Problem #2
// Given a sorted array of integers, find the first occurence of a target value.
// if target is not found in the array, return -1.

// We can solve it using divide and conquer pattern with example that you gave us in the class.

const binarySearchFirstOccurence = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
    let middleValue = nums[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue < target) {
      left = middleIndex + 1;
    } else if (middleValue > target) {
      right = middleIndex - 1;
    } else {
      return -1;
    }
  }
}

// Time Complexity: O(log(n))
// Space Complexity: O(1)

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
Time Complexity: O(n)
Space Complexity: O(n)

