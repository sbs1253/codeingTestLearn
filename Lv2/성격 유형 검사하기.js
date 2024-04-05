function solution(survey, choices) {
  let answer = [];

  let result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let n = 4;
  survey.forEach((e, i) => {
    let [first, second] = e.split('');
    if (choices[i] < n) result[first] += n - choices[i];
    else if (choices[i] > n) result[second] += choices[i] - n;
  });
  let arr = Object.entries(result);
  while (arr.length > 0) {
    let name = arr.splice(0, 2);
    name.sort((a, b) => b[1] - a[1]);
    answer.push(name[0][0]);
  }
  return answer.join('');
}
console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
