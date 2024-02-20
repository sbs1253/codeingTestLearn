function solution(arr) {
  let result;
  if (arr.length >= 2) gcdlcm(...arr.splice(0, 2));
  else result = arr[0];
  function gcdlcm(a, b) {
    let r;
    let ab;
    for (ab = a * b; (r = a % b); a = b, b = r) {}
    arr.unshift(ab / b);
    arr.length === 1 ? (result = ab / b) : gcdlcm(...arr.splice(0, 2));
  }
  return result;
}
console.log(solution([2]));
