/**
 * 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

// Brute force Method

function twoSum(arr, target) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      console.log("xxx", arr[i], arr[j]);
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

const result = twoSum([3, 2, 4], 6);
console.log("result", result);

// Two pointer method

function twoSumPointerMethod(arr, target) {
  arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;
  let sum;

  while (i <= j) {
    sum = arr[i] + arr[j];
    if (sum === target) {
      return [i, j];
    } else if (sum < target) {
      i++;
    } else if (sum > target) {
      j--;
    }
  }
}

const result1 = twoSumPointerMethod([2, 7, 11, 15], 13);
console.log("result", result1);
