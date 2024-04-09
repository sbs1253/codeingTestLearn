function solution(numbers, hand) {
  let answer = '';
  let obj = {
    1: 'L',
    4: 'L',
    7: 'L',
    3: 'R',
    6: 'R',
    9: 'R',
  };

  let key = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };
  let left = [3, 0];
  let right = [3, 2];

  numbers.forEach((e) => {
    if (obj[e] == 'L') {
      left = key[e];
      answer += 'L';
    } else if (obj[e] == 'R') {
      right = key[e];
      answer += 'R';
    } else {
      let r = Math.abs(right[0] - key[e][0]) + Math.abs(right[1] - key[e][1]);
      let l = Math.abs(left[0] - key[e][0]) + Math.abs(left[1] - key[e][1]);
      if (r < l) {
        right = key[e];
        answer += 'R';
      } else if (r > l) {
        left = key[e];
        answer += 'L';
      } else {
        if (hand == 'right') {
          right = key[e];
          answer += 'R';
        } else {
          left = key[e];
          answer += 'L';
        }
      }
    }
  });
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
// "LRLLLRLLRRL"
