function solution(n, left, right) {
  let answer = [];
  let arr = Array(n ** 2).fill(0);
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (i % n <= j) {
        arr[j] = i;
      } else {
        arr[j] = j;
      }
    }
  }
  console.log(arr);
  return answer;
}

// [1,2,3,4]
// [2,2,3,4]
// [3,3,3,4]
// [4,4,4,4]

// [1,2,3]
// [2,2,3]
// [3,3,3]
console.log(solution(3, 2, 5));
