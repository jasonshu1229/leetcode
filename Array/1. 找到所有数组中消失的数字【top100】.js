var findDisappearedNumbers = function (nums) {
  if (!nums) return [];

  const res = [],
    n = nums.length;
  for (let i = 0; i < n; i++) {
    let index = (nums[i] - 1) % n;
    nums[index] = nums[index] + n;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) res.push(i + 1);
  }
  return res;
};

const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(arr)); // [ 5, 6 ]
