function solution(skill, skill_trees) {
  let tree = [...skill];
  let arr = [];
  skill_trees.forEach((e) => {
    let strindex = [];
    for (let i = 0; i < tree.length; i++) {
      let num = e.indexOf(tree[i]);
      console.log(e.replace(/[^CBD]/g, ''));
      if (strindex.length > 0 && strindex[strindex.length - 1] > num) {
        strindex = [];
        break;
      }

      strindex.push(num);
    }
    // console.log(strindex);

    arr.push(strindex);
  });

  console.log(arr);
  return arr.length;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
