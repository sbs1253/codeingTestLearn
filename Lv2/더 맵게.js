function solution(scoville, K) {
  let answer = 0;
  let arr = scoville.sort((a, b) => a - b);
  let newArr = [];
  let arrIndex = 0;
  let newArrIndex = 0;
  let cal = [];
  let index = 0;
  while (index < scoville.length - 1) {
    cal = [];
    for (let i = 0; i < 2; i++) {
      if (newArr.length > 0 && newArr[newArrIndex]) {
        if (arr[arrIndex] <= newArr[newArrIndex]) {
          cal.push(arr[arrIndex]);
          arrIndex++;
        } else if (arr[arrIndex] > newArr[newArrIndex] || !arr[arrIndex]) {
          cal.push(newArr[newArrIndex]);

          newArrIndex++;
        }
      } else {
        cal.push(arr[arrIndex]);
        arrIndex++;
      }
    }

    cal.sort((a, b) => a - b);
    newArr.push(cal[0] + cal[1] * 2);
    if (cal[0] >= K && cal[1] >= K) {
      return answer;
    }
    answer++;
    index++;

    if (isNaN(newArr[newArr.length - 1])) return -1;
  }
  if (newArr[newArr.length - 1] > K) return answer;
  else return -1;
}

console.log(solution([1, 1, 1, 10], 9));
