/**
 * Problem statement: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * Time complexity: O(n^2) considering the constraints
 * @param nums array
 * @return list of triplets that sum to 0
 */

function tripleSumZero(arr) {
  arr.sort((a, b) => a - b);
  let result = [];

  for (i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    j = i + 1;
    k = arr.length - 1;

    while (j < k) {
      sum = arr[i] + arr[j] + arr[k];
      if (sum === 0) {
        result.push([arr[i], arr[j], arr[k]]);
        while (j < k && arr[j] === arr[j + 1]) {
          j++;
        }
        while (j < k && arr[k] === arr[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      }
    }
  }

  return result;
}

const result = tripleSumZero([0, -1, 2, -3, 1, 3]);
console.log("xxxxxxxxx", result);
// [(-3, -1, 0, 1, 2)];
