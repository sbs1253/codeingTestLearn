function solution(scoville, K) {
  let answer = 0;
  let arr = scoville.sort((a, b) => a - b);
  let newArr = [];
  let arrIndex = 0;
  let newIndex = 0;

  if (arr[0] >= K) return answer;
  else {
    newArr.push(arr[0] + arr[1] * 2);
    arrIndex = 2;
    answer++;
  }

  while (arr[arrIndex] < K || newArr[newIndex] < K) {
    let minNum;
    let nextMinNum;
    if ((arr[arrIndex] >= K && newArr[newIndex] >= K) || arrIndex >= arr.length) {
      break;
    }
    console.log(arr[arrIndex], newArr[newIndex], arrIndex);
    console.log(arr, newArr);
    if (arr[arrIndex] <= newArr[newIndex]) {
      minNum = arr[arrIndex];
      arrIndex++;
    } else {
      minNum = newArr[newIndex];
      newIndex++;
    }

    if (arr[arrIndex] <= newArr[newIndex]) {
      nextMinNum = arr[arrIndex];
      arrIndex++;
    } else {
      nextMinNum = newArr[newIndex];
      newIndex++;
    }

    newArr.push(minNum + nextMinNum * 2);
    answer++;
  }

  if (arr[arrIndex] < K || newArr[newIndex] < K) answer = -1;
  return answer;
}

console.log(solution([1, 1, 1, 1, 1, 1], 6));
