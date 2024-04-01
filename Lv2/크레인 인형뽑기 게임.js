function solution(board, moves) {
  let answer = [];
  let count = 0;
  moves.forEach((move) => {
    let goY = 0;
    while (goY < board[0].length - 1 && board[goY][move - 1] == 0) {
      goY++;
    }
    if (board[goY][move - 1] !== 0) {
      if (answer[answer.length - 1] == board[goY][move - 1]) {
        answer.pop();
        count += 2;
      } else answer.push(board[goY][move - 1]);
    }
    board[goY][move - 1] = 0;
  });

  return count;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
