function solution(array, commands) {
  var answer = [];
  answer = commands.map((e) => array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1]);
  return answer;
}
