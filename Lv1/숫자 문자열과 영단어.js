function solution(s) {
  let obj = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
  let str = s.replace(/(zero|one|two|three|four|five|six|seven|eight|eight|nine)/g, (e) => obj[e]);
  return +str;
}
