function solution(people, limit) {
  let answer = 0;
  let num = people.sort((a, b) => a - b);
  while (people.length > 0) {
    if (num.at(0) + num.at(-1) <= limit) {
      num.pop();
      num.shift();
    } else {
      num.pop();
    }
    answer += 1;
  }
  return answer;
}
console.log(solution([70, 50, 80], 100));
