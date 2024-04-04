function solution(numbers) {
  const strNumbers = numbers.map((num) => num.toString());
  strNumbers.sort((a, b) => {
    return b + a - (a + b);
  });

  return strNumbers.join('')[0] == '0' ? '0' : strNumbers.join('');
}
console.log(solution([1, 2, 3, 33, 30]));
// "9534330"
