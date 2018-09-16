const data = [5, 10, 15, 20];
// =============

// ============
// TEST 1
// ============
const double = num => 2 * num;
const doubleEach = input => input.map(double);

doubleEach(data); /*?*/

// data.map((num)=> {
//   return num*2
// }) /*?*/

// ============
// TEST 2
// ============

const data2 = [2, 5, 8];

const square = num => num * num;
const squareEach = input => input.map(square);

squareEach(data2); /*?*/

// ============
// TEST 3
// ============

const doubleAndSqaureEach = input => input.map(double).map(square);

doubleAndSqaureEach(data2); /*?*/

// ============
// TEST 4
// ============
const myMap = (arr, func) => {
  var data = [];
  for (const item of arr) {
    data.push(func(item));
  }
  return data;
};

myMap(data2, square); /*?*/
