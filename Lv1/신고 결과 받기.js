function solution(id_list, report, k) {
  let report_list = {};
  let report_id = new Set(report);
  let repoter = {};
  [...report_id].forEach((e) => {
    let [id, ban] = e.split(' ');
    if (!repoter[id]) repoter[id] = [];
    repoter[id].push(ban);
    if (!report_list[ban]) report_list[ban] = 1;
    else report_list[ban] += 1;
  });

  answer = id_list.map((e) => {
    if (repoter[e]) {
      return repoter[e].reduce((acc, cur) => {
        if (report_list[cur] >= k) {
          return acc + 1;
        } else return acc;
      }, 0);
    } else return 0;
  });

  return answer;
}
console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi', 'muzi frodo'],
    2
  )
);
