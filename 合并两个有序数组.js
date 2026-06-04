// 给定两个已排序的数组，合并成一个有序数组。

// mergeSorted([1, 3, 5], [2, 4, 6])
// // => [1, 2, 3, 4, 5, 6]

// mergeSorted([1, 2, 3], [])
// // => [1, 2, 3]

// mergeSorted([], [])
// // => []

// mergeSorted([1, 1, 3], [1, 2, 2])
// // => [1, 1, 1, 2, 2, 3]
// 要求
// 时间复杂度 O(n + m)
// 不能直接 concat 之后再 sort
// 提示：双指针

// 两个数组各用一个指针，谁小就先放谁

// [1, 3, 5]    [2, 4, 6]
//  ↑ i          ↑ j

// 1 < 2 → 放 1, i++
// 3 > 2 → 放 2, j++
// 3 < 4 → 放 3, i++
// 5 > 4 → 放 4, j++
// 5 < 6 → 放 5, i++
// i 到头了 → 把 [6] 剩下的全放进去

// 结果：[1, 2, 3, 4, 5, 6] ✅
function mergeSorted(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++; 
  }

  return result;
}