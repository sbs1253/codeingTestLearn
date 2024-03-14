// -----------------------------------------------------조합 알고리즘---------------------------------------------------------------------

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const example = [1, 2, 3, 4];
const result = getCombinations(example, 3);
console.log(result);

// -----------------------------------------------------순열 알고리즘---------------------------------------------------------------------

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const example2 = [1, 2, 3, 4];
const result2 = getPermutations(example2, 3);
console.log(result2);

// 변경 버전
const permutation = (permu, rests, output) => {
  if (rests.length == 0) {
    // 여기 조건만 바꾸면 개수도 지정가능
    return output.push(permu);
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

const combination = (comb, rests, output) => {
  if (rests.length == 0) {
    // 여기 조건만 바꾸면 개수도 지정가능
    return output.push(comb);
  }
  rests.forEach((v, idx) => {
    // const rest = [...rests.slice(0,idx), ...rests.slice(idx+1)]
    const rest = rests.slice(idx + 1);
    combination([...comb, v], rest, output);
  });
};
const output = [];
permutation([], ['a', 'b', 'c'], output);
console.log(output);

// 순열 여러개 선택하는 응용버전
function generateCombinations(options, length, current = '', combinations = []) {
  if (current.length == length) {
    combinations.push(current);
    return;
  }
  options.forEach((option) => {
    console.log('option = ', option, 'current = ', current);
    console.log(combinations);
    generateCombinations(options, length, current + option, combinations);
  });
  return combinations;
}

const options = ['+', '-'];
const combinations = generateCombinations(options, numbers.length);
console.log(combinations);
