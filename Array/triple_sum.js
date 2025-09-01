/**
  
Triplet Sum in Array (3sum)`

- Given an array arr[] of size n and an integer X. Find if there’s a triplet in the array which sums up to the given integer X.

Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
Output: 12, 3, 9
Explanation: There is a triplet (12, 3 and 9) present
in the array whose sum is 24.

 */

function tripleSum(arr, target) {
  arr.sort((a, b) => a - b);

  for (i = 0; i < arr.length - 2; i++) {
    j = i + 1;
    k = arr.length - 1;

    // console.log(arr[i], arr[j], arr[k]);
    while (j < k) {
      sum = arr[i] + arr[j] + arr[k];
      console.log(arr[i] + arr[j] + arr[k], target);

      if (sum === target) {
        return [arr[i], arr[j], arr[k]];
      } else if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      }
    }
  }
  return null;
}

const result = tripleSum([12, 3, 4, 1, 6, 9], 24);
console.log("result", result);
1, 3, 4, 6, 9, 12;
