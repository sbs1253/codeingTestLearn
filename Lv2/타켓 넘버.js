function solution(numbers, target) {
  let answer = 0;

  function generateCombinations(options, length, current = '', combinations = []) {
    if (current.length == length) {
      combinations.push(current);
      return;
    }
    options.forEach((option) => {
      generateCombinations(options, length, current + option, combinations);
    });
    return combinations;
  }

  const options = ['+', '-'];
  const combinations = generateCombinations(options, numbers.length);
  combinations.forEach((el) => {
    let result = [...numbers];
    [...el].forEach((e, i) => {
      if (e === '+') {
        result[i] *= 1;
      } else result[i] *= -1;
    });
    result.reduce((a, b) => a + b) === target ? (answer += 1) : undefined;
  });
  return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));

/* 탐색법 참고
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}
*/
