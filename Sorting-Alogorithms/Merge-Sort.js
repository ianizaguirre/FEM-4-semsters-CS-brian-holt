const mergeSort = nums => {
  // because if its a length of one then its already sorted nor can we split it any further
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  //
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return stitch(sortedLeft, sortedRight);
};

// Slice() method is NOT-Desctructive

const stitch = (left, right) => {
  const results = [];

  // left.length && right.length --- is coerced to Zero which is falsy , since we are destroying left.length and right.length as we go through our mergeSort
  // so this While loop is saying, continue this loop as long as there are items still in array left and still in array right
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // //
  // while (left.length) {
  //   results.push(left.shift());
  // }
  // //
  // while (right.length) {
  //   results.push(right.shift());
  // }
  // //
  // return results;
  return [...results, ...left, ...right];
};

var data = [1, 2, 3, 5, 4, 6, 7, 11, 9, 10, 8];

mergeSort(data); /*?*/
