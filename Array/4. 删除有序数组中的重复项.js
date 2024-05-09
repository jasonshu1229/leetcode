/**
  [0, slow - 1]：不需要删除的区域
  [slow, fast - 1]：需要删除的区域
  [fast, n - 1]：未处理区域
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let slow = 1,
    fast = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};

const arr = [1, 1, 2];
console.log(removeDuplicates(arr)); // 2
