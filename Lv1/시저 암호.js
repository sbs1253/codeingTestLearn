function solution(s, n) {
  var answer = '';
  answer = s.replace(/[a-zA-Z]/g, (e) => {
    if (e.charCodeAt() + n > 122) e = e.charCodeAt() - 26 + n;
    else if (e.charCodeAt() + n > 90 && e.charCodeAt() <= 90) e = e.charCodeAt() - 26 + n;
    else e = e.charCodeAt() + n;
    return String.fromCharCode(e);
  });
  return answer;
}
