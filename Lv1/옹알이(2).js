function solution(babbling) {
  let answer = 0;
  let arr = ['aya', 'ye', 'woo', 'ma'];
  babbling.forEach((e) => {
    let str = e;
    let isBabbling = arr.every((c) => {
      let regex = new RegExp('(' + c + '){2,}', 'g');
      return !regex.test(e);
    });
    if (isBabbling) {
      str = str.replace(/(aya)|(ye)|(woo)|(ma)/g, '');
      if (!str) answer += 1;
    }
  });
  return answer;
}
console.log(solution(['ayayeayayeaya']));
