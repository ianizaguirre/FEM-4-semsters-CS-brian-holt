// ==========================
// ========== TEST 1 ==========
// factorial function using Recursion
// ==========================

const factorial = num => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

factorial(5); /*?*/

// ==========================
// ========== TEST 2 ==========
// factorial function using a Loop WITH NO Recursion
// ==========================

const factorialLoop = num => {
  var total = 1;

  for (let i = 0; i < num; i++) {
    total = total * (num - i);
  }

  return total; /*?*/
};

factorialLoop(5); /*?*/

/* =========

i=0
1 * (5-0) ==> 1 * 5 ==> 5

i=1
5 * (5-1) ==> 5 * 4 ==> 20

i=2
20 * (5-2) ==> 20 * 3 ==> 60

i=3
60 * (5-3) ==> 60 * 2 ==> 120

i=4
120 * (5-4) ==> 120 * 1 ==> 120


=========== */
