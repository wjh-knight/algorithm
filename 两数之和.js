// 给定一个数组 nums 和一个目标值 target，找出数组中两个数，使它们的和等于 target，返回它们的下标。

// twoSum([2, 7, 11, 15], 9)
// // => [0, 1]  (因为 nums[0] + nums[1] = 2 + 7 = 9)

// twoSum([3, 2, 4], 6)
// // => [1, 2]  (因为 nums[1] + nums[2] = 2 + 4 = 6)

// twoSum([3, 3], 6)
// // => [0, 1]
// 要求
// 每个元素只能用一次
// 假设有且只有一组答案
// 进阶：能不能用 O(n) 时间复杂度？

function twoSum(arr, target) {
  let indexArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        indexArr.push(i, j);
        return;
      }
    }
  }
  return indexArr;
}

// 试试用 Map 重写？
function twoSum(arr, target) {
  const map = new Map(); // 存 {值: 下标}

  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i]; // 我还需要多少

    if (map.has(need)) {
      return [map.get(need), i]; // 找到了！返回两个下标
    }

    map.set(arr[i], i); // 没找到，把自己存进去，等后面的人来找我
  }
}
console.log(twoSum2([2, 7, 11, 15], 9)); // [0, 1]
