const fib = num => {
  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
};

fib(5); /*?*/

// ======> FIB(5) = 5
/*

---4------------------- 3
3----------2           2------1
2---1   1-----0       1--0
1--

*/

// From our Tree, we only add up the numbers One and Zero
