function solution(s) {
  let arr = [];
  let count = 0;
  let another = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === another) {
      let first = s[i];
      arr.push(first);
    }
    if (s[i] === arr[arr.length - 1]) {
      count++;
    } else another++;
  }
  return arr.length;
}

console.log(solution('abracadabra'));
