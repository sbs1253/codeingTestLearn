function solution(lottos, win_nums) {
  let nums = [];
  nums = lottos.filter((e) => e);

  let prize = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };

  let zerolen = lottos.length - nums.length;

  let numSet = new Set(win_nums.concat(nums));

  result = nums.length + win_nums.length - numSet.size;
  maxPrize = prize[result + zerolen];
  minPrize = prize[result];

  return [maxPrize, minPrize];
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
