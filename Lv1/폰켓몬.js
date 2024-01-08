function solution(nums) {
  let result = [...new Set(nums)];
  let maxNum = nums.length / 2;
  if (result.length >= maxNum) {
    return maxNum;
  } else return result.length;
}
console.log(solution([3, 3, 3, 2, 2, 2]));
