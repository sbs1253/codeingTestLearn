function solution(ingredient) {
  let answer = 0;
  let arr = [];
  ingredient.forEach((e) => {
    arr.push(e);
    if (arr.length >= 4) {
      if (
        arr[arr.length - 4] == 1 &&
        arr[arr.length - 3] == 2 &&
        arr[arr.length - 2] == 3 &&
        arr[arr.length - 1] == 1
      ) {
        answer += 1;
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
      }
    }
  });
  return answer;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1, 3, 2, 1, 3, 2]));
