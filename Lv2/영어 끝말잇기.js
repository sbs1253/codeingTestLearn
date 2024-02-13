function solution(n, words) {
  let answer = [0, 0];
  let nums = 0;
  let word = [];
  for (let i = 0; i < words.length; i++) {
    if (word.indexOf(words[i]) === -1) {
      word.push(words[i]);
    } else {
      nums = i + 1;
      break;
    }
    if (i + 1 < words.length) {
      if (words[i].at(-1) !== words[i + 1].at(0)) {
        nums = i + 2;
        break;
      }
    }
  }
  if (nums !== 0) {
    answer = [nums % n === 0 ? n : nums % n, Math.ceil(nums / n)];
  }
  return answer;
}
console.log(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tankz']));
