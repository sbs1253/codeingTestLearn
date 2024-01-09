function solution(arr) {
  answers = [];
  for (var i = 0; i < arr.length; i++) {
    if (answers.slice(-1)[0] !== arr[i]) answers.push(arr[i]);
  }
  return answers;
}
