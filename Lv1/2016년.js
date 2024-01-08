function solution(a, b) {
  let obj = { 0: 'SUN', 1: 'MON', 2: 'TUE', 3: 'WED', 4: 'THU', 5: 'FRI', 6: 'SAT' };
  const today = new Date(2016, a - 1, b);
  return obj[today.getDay()];
}
console.log(solution(5, 24));
