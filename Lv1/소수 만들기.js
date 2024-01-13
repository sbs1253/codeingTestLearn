function solution(nums) {
  let answer = -1;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let arr2 = [];
    arr2.push(nums[i]);
    for (let j = i + 1; j < i + 3; j++) {
      arr2.push(nums[j]);
    }
    arr.push(arr2);
  }
  console.log(arr);

  return answer;
}
console.log(solution([1, 2, 3, 4]));
