function mincost(arr)
{ function mincost(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return 0;

    let totalCost = 0;

    // Keep going until we have one rope left
    while (arr.length > 1) {
        // Sort the array to get the two smallest ropes
        arr.sort((a, b) => a - b);

        // Pick the two smallest
        let first = arr.shift();
        let second = arr.shift();

        let cost = first + second;
        totalCost += cost;

        // Push the combined rope back
        arr.push(cost);
    }

    return totalCost;
}

//write your code here
// return the min cost
  
}

module.exports=mincost;
