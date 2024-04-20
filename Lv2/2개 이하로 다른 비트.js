function solution(numbers) {
  let answer = numbers.map((e) => {
    if (e % 2 == 0) return e + 1;
    else {
      let num = e.toString(2);
      if (num.includes('0')) {
        const lastZero = num.lastIndexOf('0');
        num = num.substring(0, lastZero) + '1' + '0' + num.substring(lastZero + 2);
        return parseInt(num, 2);
      } else return parseInt('10' + num.slice(1), 2);
    }
  });
  return answer;
}
console.log(solution([2, 5]));
