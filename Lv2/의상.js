function solution(clothes) {
  let answer = 0;
  let obj = {};
  clothes.forEach((e) => {
    if (obj[e[1]]) obj[e[1]] += 1;
    else obj[e[1]] = 1;
  });

  const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두 다 push
    });

    return results; // 결과가 담긴 results를 return
  };

  console.log(Object.values(obj));
  for (let i = 1; i <= Object.keys(obj).length; i++) {
    const result = getCombinations(Object.keys(obj), i);
    console.log(result);
  }
  return;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
    ['crow_mask', 'face'],
  ])
);
