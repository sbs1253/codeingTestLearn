function solution(progresses, speeds) {
  let arr = [];
  let result = [];
  let time = 0;
  while (progresses.length > 0) {
    let progresse = progresses.shift();
    let speed = speeds.shift();
    progresse = progresse + speed * time;

    if (progresse < 100) {
      time += Math.ceil((100 - progresse) / speed);
    }
    arr.push(time);
  }

  let i = 0;
  while (i < arr.length) {
    let count = 1;
    while (arr[i] === arr[i + 1]) {
      count++;
      i++;
    }
    result.push(count);
    i++;
  }
  return result;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
