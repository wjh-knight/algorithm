// 实现一个函数 flatAndSort(arr)，将一个嵌套任意层级的数组扁平化，然后去重并按升序排列。
// 示例
// flatAndSort([3, [1, 4, [2, 3]], 5, [1, [4]]])
// // => [1, 2, 3, 4, 5]

// flatAndSort([[8, 2], [3, 8], [2, 1, [8]]])
// // => [1, 2, 3, 8]

// flatAndSort([])
// => []

// flatAndSort = function (arr) {
//   let flatArr = arr.flat(Infinity); // 打平数组 一个新数组，包含原数组所有元素，嵌套层级被拉平。
//   // 使用 Set 去重
//   // 使用扩展运算符 [...new Set()] 将 Set 转换为数组
//   let uniqueArr = [...new Set(flatArr)];
//   uniqueArr.sort((a, b) => a - b);
//   return uniqueArr;
// };
flatAndSort = function (arr) {
  let flatArr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatAndSort(item)); // 接住！
    } else {
      flatArr.push(item);
    }
  });
  return [...new Set(flatArr)].sort((a, b) => a - b);
};

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i])); // 是数组 → 递归拆开，合并进来
    } else {
      result.push(arr[i]); // 不是数组 → 直接加
    }
  }
  return result;
}
