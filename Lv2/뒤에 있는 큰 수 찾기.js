function solution(numbers) {
  let answer = [];
  while (numbers.length > 0) {
    let num = numbers.shift();
    let maxNum = numbers.find((e) => e > num);
    if (maxNum > num) answer.push(maxNum);
    else answer.push(-1);
  }

  return answer;
}
console.log(solution([2, 3, 3, 5]));
