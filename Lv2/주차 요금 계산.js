function solution(fees, records) {
  let answer = [];
  let obj = {};
  const today = new Date();
  records.forEach((e) => {
    const [time, number, inOut] = e.split(' ');
    if (!obj[number]) obj[number] = [];
    obj[number].push({ time });
  });
  // console.log(obj);
  Object.keys(obj)
    .sort((a, b) => a - b)
    .forEach((record) => {
      let differenceInMinutes = 0;
      let number = obj[record];
      if (number.length % 2 !== 0) number.push({ time: '23:59' });
      console.log(number);
      for (let i = 0; i < number.length; i += 2) {
        if (i + 1 < number.length) {
          const [inHour, inMinute] = number[i]['time'].split(':').map(Number);
          const [outHour, outMinute] = number[i + 1]['time'].split(':').map(Number);
          const inTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), inHour, inMinute);
          const outTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), outHour, outMinute);
          differenceInMinutes += (outTime - inTime) / (1000 * 60);
        }
      }
      answer.push(differenceInMinutes);
    });
  answer = answer.map((e) => {
    if (e >= fees[0]) {
      return (Math.ceil((e - fees[0]) / fees[2]) / 10) * 10 * fees[3] + fees[1];
    } else return fees[1];
  });
  return answer;
}
console.log(
  solution(
    [180, 5000, 10, 1000],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);
