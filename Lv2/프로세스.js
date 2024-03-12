function solution(priorities, location) {
  let arr = [];
  let obj = {};
  priorities.map((e, i) => (obj[i] = e));

  let find = Object.entries(obj);
  while (find.length > 0) {
    const maxValue = find.reduce((acc, cur) => {
      return acc[1] < cur[1] ? cur : acc;
    });
    let value = find.shift();
    if (value[1] < maxValue[1]) find.push(value);
    else arr.push(value);
  }

  return arr.findIndex((pair) => pair[0] == location) + 1;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
