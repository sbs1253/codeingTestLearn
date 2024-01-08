function solution(cards1, cards2, goal) {
  var answer = '';
  let arr = [];
  goal.forEach((e, i) => {
    if (cards1[0] === e) {
      arr.push(e);
      cards1.shift();
    } else if (cards2[0] === e) {
      arr.push(e);
      cards2.shift();
    }
  });
  goal.length === arr.length ? (answer = 'Yes') : (answer = 'No');
  return answer;
}
console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
