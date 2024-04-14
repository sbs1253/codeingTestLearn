function solution(m, n, board) {
  let answer = 0;
  let boards = Array.from({ length: m }, () => Array(n).fill(false));
  let arr = board.map((e) => e.split(''));

  const check = () => {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let current = arr[i][j];
        if (current === arr[i][j + 1] && current === arr[i + 1][j] && current === arr[i + 1][j + 1]) {
          console.log(current);
          let del = true;
          boards[i][j] = boards[i][j + 1] = boards[i + 1][j] = boards[i + 1][j + 1] = true;
        }
      }
    }
  };

  boards.forEach((e, i) => {
    e.forEach((el, idx) => {
      if (el) {
        arr[i][idx] = '0';
      }
    });
  });

  console.log(arr);
  return answer;
}
console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
