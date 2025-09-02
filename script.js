function mincost(arr) {
  if (arr.length <= 1) return 0;

  let cost = 0;

  while (arr.length > 1) {
    // Sort the array to get the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take the two smallest
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Push the combined rope back
    arr.push(sum);
  }

  return cost;
}
