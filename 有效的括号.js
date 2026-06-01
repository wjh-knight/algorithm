// 给定一个只包含 (、)、{、}、[、] 的字符串，判断括号是否有效。

// 有效条件：

// 左括号必须用相同类型的右括号闭合
// 左括号必须按正确顺序闭合

// isValid("()")        // true
// isValid("()[]{}")    // true
// isValid("(]")        // false
// isValid("([)]")      // false  ← 顺序不对
// isValid("{[]}")      // true
// isValid("")          // true   ← 空字符串算有效
// 提示
// 这道题用**栈（Stack）**来解。数组的 push 和 pop 就能模拟栈。

// 遇到左括号 → 压进栈
// 遇到右括号 → 弹出栈顶，看是不是匹配

function isValid(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let top = stack.pop();
      if (char === ")" && top !== "(") {
        return false;
      }
      if (char === "}" && top !== "{") {
        return false;
      }
      if (char === "]" && top !== "[") {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function isValid(s) {
  // 二维数组，键值对
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  let stack = [];

  for (let char of s) {
    if (!map.has(char)) {
      stack.push(char); // 左括号，压栈
    } else {
      if (stack.length === 0) return false;
      if (stack.pop() !== map.get(char)) return false; // 一行搞定匹配
    }
  }

  return stack.length === 0;
}
