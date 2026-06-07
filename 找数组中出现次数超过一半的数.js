// 给定一个数组，找出其中出现次数超过 n/2 的元素。假设数组非空且一定存在这样的元素。

// majorityElement([3, 2, 3])
// // => 3

// majorityElement([2, 2, 1, 1, 1, 2, 2])
// // => 2

// majorityElement([1])
// // => 1

// majorityElement([6, 5, 5])
// // => 5
// 提示
// 想三种解法，从暴力到最优：

// 解法1：哈希表 — 遍历一遍，用 Map 记录每个数出现的次数，找到超过 n/2 的

// 解法2：排序 — 排序后，中间那个数一定是答案（因为它超过一半，排序后必定占据中间位置）

// 解法3：摩尔投票（最优） — 遇到相同的票数+1，不同的票数-1，票数为0就换人，最后剩下的就是答案

// 解法1：哈希表（最容易理解）

function majorityElement(nums) {
  let map = new Map();
  let half = nums.length / 2;

  for (let num of nums) {
    // 计数：遇到一次 +1
    map.set(num, (map.get(num) || 0) + 1);

    // 超过一半就返回
    if (map.get(num) > half) {
      return num;
    }
  }
}
// 走一遍 [2, 2, 1, 1, 1, 2, 2]
// half = 3.5
// num=2 → map={2:1}  → 1 > 3.5? 否
// num=2 → map={2:2}  → 2 > 3.5? 否
// num=1 → map={2:2, 1:1} → 1 > 3.5? 否
// num=1 → map={2:2, 1:2} → 2 > 3.5? 否
// num=1 → map={2:2, 1:3} → 3 > 3.5? 否
// num=2 → map={2:3, 1:3} → 3 > 3.5? 否
// num=2 → map={2:4, 1:3} → 4 > 3.5? 是！return 2 ✅

// 解法2：排序（最简单代码）
function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}
// 为什么？因为超过一半的数，排序后一定占据中间位置。
// [2, 2, 1, 1, 1, 2, 2]  排序后
// [1, 1, 1, 2, 2, 2, 2]
//          ↑
//       index=3 → nums[3] = 2 ✅

// 解法3：摩尔投票（最优解）

function majorityElement(nums) {
  let candidate = nums[0]; // 候选人
  let count = 1; // 票数

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i]; // 票数归零，换候选人
      count = 1;
    } else if (nums[i] === candidate) {
      count++; // 同一个阵营，票数+1
    } else {
      count--; // 不同阵营，票数-1，互相抵消
    }
  }

  return candidate;
}
// 走一遍 [2, 2, 1, 1, 1, 2, 2]：

// candidate=2, count=1

// i=1: nums[1]=2, 同阵营 → count=2
// i=2: nums[2]=1, 不同 → count=1
// i=3: nums[3]=1, 不同 → count=0
// i=4: nums[4]=1, count=0 换人 → candidate=1, count=1
// i=5: nums[5]=2, 不同 → count=0
// i=6: nums[6]=2, count=0 换人 → candidate=2, count=1

// 结束！candidate=2 ✅
// 核心思想：不同的人互相抵消，超过一半的人一定留到最后。
