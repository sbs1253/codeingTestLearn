function solution(s) {
  let num = s.split(' ');
  return `${Math.min(...num)} ${Math.max(...num)}`;
}
console.log(solution('1 2 3 4'));
