const data = [5, 3, 7, 9, 2];

const bubbleSort = nums => {
  do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        // Swap variables using ES6 Destructuring
        // -->  [nums[i], nums[i+1] ] = [ nums[i+1], nums[i] ]
        var temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      } // END IF
    } // END FOR
  } while (swapped);
}; // END FUNCTION

bubbleSort(data); /*?*/
