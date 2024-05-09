## 元素作为数组索引

### 1. 数组中重复的数据

442\. 数组中重复的数据 (中等)

[Leetcode](https://leetcode.cn/problems/find-all-duplicates-in-an-array/description/) / [力扣](https://leetcode.cn/problems/find-all-duplicates-in-an-array/description/)

**技巧：** 巧用数组下标索引方式标负，记录出现多次的数字，有一个限制 1 <= nums[i] <= n

```js
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
```

步骤：

1. 遍历每一项时找到对应（数字 - 1）索引处的数字，标记为负
2. 直到遍历到 8 后面的 2 时，发现索引（2 - 1）的位置已经是负数了，所以 2 就是第一个出现了 2 次的数字，以此类推

### 2. 找到所有数组中消失的数字【top100】

448\. 找到所有数组中消失的数字 (简单)

[Leetcode](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/) / [力扣](https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/)

**技巧：** 元素作为数组索引

```js
var findDisappearedNumbers = function (nums) {
  if (!nums) return [];

  const res = [];
  let countArr = new Array(nums.length).fill(0);
  for (let item of nums) {
    let index = item - 1;
    countArr[index]++;
  }
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] == 0) res.push(i + 1);
    continue;
  }
  return res;
};
```

## 快慢指针

快慢指针模板：

```js
var removeDuplicates = function (nums) {
  const len = nums.length;
  let slow = 0,
    fast = 0;
  while (fast < len) {
    if () {
      slow++;
    }
    fast++;
  }
  return xxx;
};
```

### 3. 移除元素

27\. 移除元素 (简单)

[Leetcode](https://leetcode.cn/problems/remove-element/description/) / [力扣](https://leetcode.cn/problems/remove-element/description/)

**技巧：** 快慢指针

**思路：**

- 使用快慢指针，左指针指向第一个元素，右指针不短遍历数组元素
  - 如果右指针指向的元素不等于 val，它一定是输出数组里的一个元素，就将右指针指向的元素复制到左指针的位置，右指针++
  - 如果右指针指向的元素不等于 val，它就一定不是输出数组里的元素，此时左指针不动，右指针继续移动一位
- 最后左指针指向的位置就是处理完区域的下一个元素索引位置，刚好是输出数组的长度

```js
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
```

### 4. 删除有序数组中的重复项

26\. 删除有序数组中的重复项 (简单)

[Leetcode](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/) / [力扣](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/)

**技巧：** 快慢指针

```js
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
```

### 5. 移动零【top100】

283\. 移动零 (简单)

[Leetcode](https://leetcode.cn/problems/move-zeroes/description/) / [力扣](https://leetcode.cn/problems/move-zeroes/description/)

**技巧：** 快慢指针

**步骤：**
双（快慢）指针，定义 slow，fast 指针，fast 指针不断从左向右移动遍历数组，遇到非 0 元素，就将 nums[i]元素防止到 nums[slow]的位置，同时 slow++ 向后移动一位，一直让 slow 存储为 0 的元素
具体过程如下：

1. 定义两个指针 slow,fast，初始化 slow = 0, fast = 0
2. fast 指针不断向后移动，遍历整个数组，如果 nums[i] !== 0，则让 nums[i]的元素放置到 nums[slow] 的位置，同时 slow++ 向后移动一位
3. 最后 slow 位置之后的元素就全部为了 0 了

```js
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
```
