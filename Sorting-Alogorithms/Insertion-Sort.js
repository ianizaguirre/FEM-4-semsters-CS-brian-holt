const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        console.log(spliced);

        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
};
// splice is a destructive method since it modifys the array that it is on
// splice is going to 'i' and removing 1 element
// our second splice will insert our element into the array

var data = [1, 2, 3, 5, 4, 6, 7, 9, 10, 8];

insertionSort(data); /*?*/
