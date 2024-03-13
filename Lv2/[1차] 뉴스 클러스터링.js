function solution(str1, str2) {
  let answer = 0;
  let one = str1.toLowerCase();
  let two = str2.toLowerCase();
  let arr1 = [];
  let arr2 = [];
  let common = [];
  let set = [];

  for (let i = 0; i < one.length - 1; i++) {
    let str = one.slice(i, i + 2).replace(/[^a-z]/gi, '');
    if (str.length === 2) arr1.push(one.slice(i, i + 2));
  }
  for (let i = 0; i < two.length - 1; i++) {
    let str = two.slice(i, i + 2).replace(/[^a-z]/gi, '');
    if (str.length === 2) arr2.push(two.slice(i, i + 2));
  }
  arr1.forEach((e) => {
    if (arr2.indexOf(e) !== -1) {
      common.push(e);
      arr2.splice(arr2.indexOf(e), 1);
    } else {
      set.push(e);
    }
  });

  set.push(...common, ...arr2);
  answer = common.length == 0 && set.length == 0 ? 65536 : (common.length / set.length) * 65536;
  return Math.floor(answer);
}
console.log(solution('E=M*C^2', 'e=m*c^2'));
