function solution(players, callings) {
  let obj = {};

  players.forEach((e, i) => {
    obj[e] = i;
  });
  callings.forEach((e) => {
    let value = obj[e];

    if (value > 0) {
      [players[value], players[value - 1]] = [players[value - 1], players[value]];
    }
    obj[players[value]] = value;
    obj[players[value - 1]] = value - 1;
  });
  return players;
}
console.log(solution(['mumu', 'soe', 'poe', 'kai', 'mine'], ['kai', 'kai', 'mine', 'mine']));
