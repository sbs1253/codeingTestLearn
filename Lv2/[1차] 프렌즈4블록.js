function solution(m, n, board) {
  let answer = 0;
  let arr = board.map((e) => e.split(''));

  function del() {
    let boards = Array.from({ length: m }, () => Array(n).fill(false));
    let state = false;
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let current = arr[i][j];
        if (
          current === arr[i][j + 1] &&
          current === arr[i + 1][j] &&
          current === arr[i + 1][j + 1] &&
          current !== '0'
        ) {
          state = true;
          boards[i][j] = boards[i][j + 1] = boards[i + 1][j] = boards[i + 1][j + 1] = true;
        }
      }
    }
    if (state) {
      boards.forEach((e, i) => {
        e.forEach((el, idx) => {
          if (el) {
            arr[i][idx] = '0';
            answer += 1;
          }
        });
      });
    }
    return state;
  }

  function drop() {
    for (let j = 0; j < n; j++) {
      for (let i = m - 1; i >= 0; i--) {
        if (arr[i][j] === '0') {
          for (let k = i - 1; k >= 0; k--) {
            if (arr[k][j] !== '0') {
              [arr[i][j], arr[k][j]] = [arr[k][j], arr[i][j]];
              break;
            }
          }
        }
      }
    }
  }

  while (del()) {
    drop();
  }

  return answer;
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
