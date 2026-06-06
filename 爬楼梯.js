// 假设你正在爬楼梯，需要 n 阶才能到达楼顶。每次你可以爬 1 阶或 2 阶，问有多少种不同的方法爬到楼顶？

// climbStairs(1)  // => 1
// climbStairs(2)  // => 2
// climbStairs(3)  // => 3
// climbStairs(4)  // => 5
// climbStairs(5)  // => 8
// 提示
// 先自己想一下，想不出来再看下面 👇

// 想一下 n=3 的情况：

// 到第3阶，只能从哪来？

// 从第2阶爬1步上来
// 从第1阶爬2步上来

// 所以：到达第3阶的方法 = 到达第2阶 + 到达第1阶
// 即：dp[3] = dp[2] + dp[1]

function climbStairs(n) {
  if (n <= 1) return 1;
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
