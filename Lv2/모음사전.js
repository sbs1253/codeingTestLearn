function solution(word) {
  let answer = -1;
  let dictionary = ['A', 'E', 'I', 'O', 'U'];
  function generateCombinations(options, length, current = '', combinations = []) {
    if (stopRecursion) {
      return;
    }

    if (current.length <= length) {
      answer++;
      combinations.push(current);
      if (current === word) {
        stopRecursion = true;
        return;
      }
    } else {
      return;
    }
    for (let i = 0; i < options.length; i++) {
      generateCombinations(options, length, current + options[i], combinations);
    }

    return;
  }
  let stopRecursion = false;
  generateCombinations(dictionary, 5);
  return answer;
}

console.log(solution('AAAAE'));
