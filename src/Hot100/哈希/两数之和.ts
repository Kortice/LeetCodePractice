/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 */

function twoSum(nums: number[], target: number): number[] {
    let res: number[] = []

    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          res.push(i, j)
          break;
        }
      }
    }

    return res
};