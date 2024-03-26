function solution(fees, records) {
  let answer = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  console.log(today.getHours());
  return answer;
}
console.log(
  solution(
    [180, 5000, 10, 600],
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
function calculateTimeDifference(inTimeStr, outTimeStr) {
  // 입력 문자열에서 시간과 분을 추출
  const [inHour, inMinute] = inTimeStr.split(' ')[0].split(':').map(Number);
  const [outHour, outMinute] = outTimeStr.split(' ')[0].split(':').map(Number);

  // 오늘 날짜를 기준으로 Date 객체 생성
  const today = new Date();
  const inTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), inHour, inMinute);
  const outTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), outHour, outMinute);
  // 두 시간의 차이를 밀리초 단위로 계산하고, 분으로 변환
  const differenceInMinutes = Math.abs(outTime - inTime) / (1000 * 60);

  return differenceInMinutes;
}

// 사용 예시
const inRecord = '05:34 5961 IN';
const outRecord = '07:59 5961 OUT';
const timeDifference = calculateTimeDifference(inRecord, outRecord);

console.log(`두 시간의 차이는 ${timeDifference}분 입니다.`);
