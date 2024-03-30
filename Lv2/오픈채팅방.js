function solution(record) {
  let answer = [];
  let obj = {};
  record.forEach((e) => {
    let [state, id, name] = e.split(' ');
    if (!obj[id]) obj[id] = [];
    if (!name) {
      name = obj[id][obj[id].length - 1].name;
    }
    obj[id].push({ state, name });
  });
  record.forEach((e, i) => {
    let arr = e.split(' ');
    if (arr[0] == 'Enter') {
      let name = obj[arr[1]][obj[arr[1]].length - 1].name;
      answer.push(`${name}님이 들어왔습니다.`);
    } else if (arr[0] == 'Leave') {
      let name = obj[arr[1]][obj[arr[1]].length - 1].name;
      answer.push(`${name}님이 나갔습니다.`);
    }
  });

  return answer;
}

console.log(
  solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'])
);
