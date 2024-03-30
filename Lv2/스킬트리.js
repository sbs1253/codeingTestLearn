function solution(skill, skill_trees) {
  let tree = [...skill];
  let answer = 0;
  let reg = new RegExp(`[^${skill}]`, 'g');
  skill_trees.forEach((e) => {
    let strindex = [];
    let num = e.replace(reg, '');
    for (let i = 0; i < tree.length; i++) {
      if (num[i] == tree[i]) {
        strindex.push(num[i]);
      }
    }
    num.length == strindex.length ? (answer += 1) : undefined;
  });

  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
