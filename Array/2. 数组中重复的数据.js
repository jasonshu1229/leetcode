/**
 * 巧用数组下标索引方式标负，记录出现多次的数字，有一个限制 1 <= nums[i] <= n
 * 
 * 步骤：
    1. 遍历每一项时找到对应（数字 - 1）索引处的数字，标记为负
    2. 直到遍历到 8 后面的 2 时，发现索引（2 - 1）的位置已经是负数了，所以 2 就是第一个出现了 2 次的数字，以此类推
 */
var findDuplicates = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // 当前索引处的数字应该对应的下标
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) res.push(Math.abs(nums[i]));
    nums[index] = -nums[index];
  }

  return res;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(arr)); // [ 2, 3 ]
