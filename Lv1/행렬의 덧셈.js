function solution(arr1, arr2) {
  var answer = [[]];
  answer = arr1.map((e, i) => {
    return e.map((e2, index) => {
      return e2 + arr2[i][index];
    });
  });
  return answer;
}
