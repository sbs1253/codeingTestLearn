function solution(s) {
  let answer = '';
  s = s.toLowerCase();
  answer = s.split(' ').map((e) => {
    if (e) e = e[0].toUpperCase() + e.slice(1);
    return e;
  });
  return answer.join(' ');
}
console.log(solution('3people unFollowed me'));
