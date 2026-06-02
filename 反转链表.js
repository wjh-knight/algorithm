// 反转链表
// 给定一个数组模拟的链表，反转它，返回反转后的数组。

// reverseList([1, 2, 3, 4, 5])
// // => [5, 4, 3, 2, 1]

// reverseList([1, 2])
// // => [2, 1]

// reverseList([])
// // => []
// 先用数组反转做一遍，然后试试双指针方法（不借助 reverse()）。

// 双指针思路

// 用三个变量：prev、curr、next

// 初始：prev = null, curr = 指向第一个元素

// 每一步：
//   next = curr 的下一个
//   curr 指向 prev（反转）
//   prev = curr
//   curr = next

// 写法1：数组方法（最简单）

function reverseList(arr) {
  return arr.reverse();
}
// 面试官不会满意这个，继续往下 👇

// 写法2：双指针
// 想象两个人在走路：

// 初始状态：
// prev = null
// curr = [1, 2, 3, 4, 5]  指向第1个

// 第1步：
//   next = curr.next → [2,3,4,5]
//   curr指向prev    → 1 → null
//   prev = curr     → 1
//   curr = next     → [2,3,4,5]

// 第2步：
//   next = curr.next → [3,4,5]
//   curr指向prev    → 2 → 1 → null
//   prev = curr     → 2
//   curr = next     → [3,4,5]

// ...以此类推，直到 curr 为 null
// 代码

function reverseList(arr) {
  if (arr.length <= 1) return arr;

  let prev = null;
  let curr = 0; // 当前下标

  while (curr < arr.length) {
    // 用 unshift 把当前元素插到最前面，效果一样
    prev = [arr[curr], ...prev];
    curr++;
  }

  return prev;
}

// 写法3：真正的双指针（原地交换，最优）
function reverseList(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // 交换左右两个元素
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}
