function solution(arr1, arr2) {
  let result = Array(arr1.length)
    .fill(0)
    .map((_) => Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}
console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 1],
      [2, 3],
    ]
  )
);
