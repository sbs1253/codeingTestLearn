function solution(numbers) {
  let answer = 0;
  let arr = numbers.split('');

  const permutation = (permu, rests, output) => {
    if (rests.length == 0) {
      return output.add(Number(permu));
    } else {
      output.add(Number(permu));
    }
    rests.forEach((v, idx) => {
      const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
      permutation(permu + v, rest, output);
    });
  };

  const output = new Set();
  permutation('', arr, output);

  let nums = [...output];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > 1) {
      let state = true;
      for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j == 0) {
          state = false;
          break;
        }
      }
      if (state) {
        console.log(num);
        answer++;
      }
    }
  }
  return answer;
}
console.log(solution('014'));
