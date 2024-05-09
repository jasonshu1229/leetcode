var moveZeroes = function (nums) {
  if (nums.length === 0) return;

  let slow = 0; // slow 指针存储下标一直为0的元素，为0的起始位置
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      const temp = nums[fast];
      nums[fast] = nums[slow];
      nums[slow] = temp;
      slow++; // 不断从左向右移动
    }
  }
  return nums;
};

const arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr)); // [ 1, 3, 12, 0, 0 ]
