function basicRecursion(max, current) {
  if (current > max) {
    return;
  }
  console.log(current);
  console.log(max);
  basicRecursion(max, current + 1); /*?*/
}

basicRecursion(5, 1); /*?*/
