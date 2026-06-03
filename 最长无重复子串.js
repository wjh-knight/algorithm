// 新题目：最长无重复子串
// 给定一个字符串，找出最长的不含重复字符的子串长度。

// lengthOfLongestSubstring("abcabcbb")
// // => 3  ("abc")

// lengthOfLongestSubstring("bbbbb")
// // => 1  ("b")

// lengthOfLongestSubstring("pwwkew")
// // => 3  ("wke")

// lengthOfLongestSubstring("")
// // => 0
// 提示：滑动窗口
// 用两个指针 left 和 right 维护一个窗口：

// a b c a b c b b
// ↑     ↑
// left  right  → 窗口内无重复，记录长度 3

// a b c a b c b b
// ↑     ↑
// left  right  → 'a' 重复了！left 往右缩

// 用 Set 记录窗口内的字符：

// right 往右扩 → 遇到重复就缩 left
// 每步更新最大长度

function lengthOfLongestSubstring(s) {
  let set = new Set(); // 记录窗口内有哪些字符
  let left = 0; // 窗口左边界
  let maxLen = 0; // 最大长度

  for (let right = 0; right < s.length; right++) {
    // 如果当前字符在 set 里，说明重复了，要缩小窗口
    while (set.has(s[right])) {
      set.delete(s[left]); // 删掉左边的字符
      left++; // 左边界右移
    }

    // 现在窗口内没有重复了，把当前字符加进来
    set.add(s[right]);

    // 更新最大长度
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
