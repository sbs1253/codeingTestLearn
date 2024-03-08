function solution(clothes) {
  let answer = 0;
  let obj = {};
  clothes.forEach((e) => {
    if (obj[e[1]]) obj[e[1]] += 1;
    else obj[e[1]] = 1;
  });
  answer = Object.values(obj).reduce((a, b) => a * (b + 1), 1);

  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
    ['crow_mask', 'face'],
  ])
);
