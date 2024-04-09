function solution(participant, completion) {
  let obj = {};
  participant.forEach((e) => {
    if (obj[e]) obj[e] = undefined;
    else obj[e] = e;
  });
  completion.forEach((e) => {
    if (obj[e]) obj[e] = undefined;
    else obj[e] = e;
  });
  return Object.values(obj).find((obj) => obj);
}
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola']));
