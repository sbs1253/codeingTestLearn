function solution(keymap, targets) {
  let answer = [];
  let map = {};
  for (const items of keymap) {
    items.split('').map((item, index) => {
      return (map[item] = map[item] < index + 1 ? map[item] : index + 1);
    });
  }
  for (const items of targets) {
    answer.push(items.split('').reduce((cur, item) => (cur += map[item]), 0) || -1);
  }

  // targets.forEach((e, i) => {
  //   let result = [];
  //   [...e].forEach((el) => {
  //     let index = [];
  //     keymap.forEach((k) => {
  //       let down = k.indexOf(el);
  //       if (down !== -1) index.push(down + 1);
  //     });

  //     let minDown = index.length > 0 ? Math.min(...index) : -1;
  //     if (minDown !== -1 && result[0] != -1) result.push(minDown);
  //     else result[0] = -1;
  //   });
  //   if (result[0] == -1) answer.push(result[0]);
  //   else answer.push(result.reduce((a, b) => a + b, 0));
  // });
  return answer;
}
console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB', 'ha']));
