function solution(elements) {
  let arr = new Set();
  let loops = elements.length;
  for (let i = 0; i < loops; i++) {
    for (let j = 1; j <= loops; j++) {
      arr.add(elements.slice(0, j).reduce((acc, cur) => acc + cur));
    }
    elements.push(elements.shift());
  }

  return arr.size;
}

console.log(solution([7, 9, 1, 1, 4]));
