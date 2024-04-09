function solution(today, terms, privacies) {
  let answer = [];
  todayDate = new Date(today);
  let dateTerms = {};

  terms.forEach((e) => {
    let [num, term] = e.split(' ');
    dateTerms[num] = term;
  });

  privacies.forEach((e, i) => {
    let [date, num] = e.split(' ');
    let privaciesDate = new Date(date);
    let result = Math.abs(
      ((todayDate.getFullYear() - privaciesDate.getFullYear()) * 12 +
        (todayDate.getMonth() - privaciesDate.getMonth())) *
        28 +
        todayDate.getDate() -
        privaciesDate.getDate()
    );

    if (result >= dateTerms[num] * 28) answer.push(i + 1);
  });

  return answer;
}
console.log(
  solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.18 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'])
);
