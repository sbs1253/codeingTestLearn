function solution(food) {
  let arr = food.map((e, i) => (i + '').repeat(~~(e / 2)));
  return arr.join('') + '0' + arr.reverse().join('');
}
