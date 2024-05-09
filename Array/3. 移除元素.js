var removeElement = function (nums, val) {
  // 快慢指针
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
};

const arr = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(arr, val)); // 2
