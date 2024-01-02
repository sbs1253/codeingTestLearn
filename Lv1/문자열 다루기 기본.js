function solution([...s]) {
  if (s.length == 4 || s.length == 6) {
    for (let val of s) {
      if (Number(val) == val) {
        var answer = true;
      } else {
        answer = false;
        break;
      }
    }
  } else {
    answer = false;
  }
  return answer;
}
