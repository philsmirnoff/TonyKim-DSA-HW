// week 6. Dynamic programming
// you use past data from previous calculations to make future calculations more efficient

// candidates for dynamic programming
// - overlapping problem
// - optimal substructure

how to solve dynamic programming problems
// 1. Top Down Approach (Memoization)
// 2. Bottom Up Approach (Tabulation)

data structures for dynamic programming
// 1. Object (key value pairs)
// 2. Array
// Map and Set are not good for dynamic programming
// why?
// - they are not ordered
// - they do not have fast access to values

// 1. Fibonacci sequence

const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// 2. Fibonacci sequence with memoization

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// 3. Fibonacci sequence with tabulation

const fib = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

