function solution(phone_book) {
  let answer = true;

  let arr = phone_book.sort();
  arr.some((e, i, array) => {
    if (i < arr.length - 1) array[i + 1].indexOf(e) === 0 ? (answer = false) : answer;
  });

  return answer;
}
console.log(solution(['12', '88', '123', '1235', '567', '1466']));
