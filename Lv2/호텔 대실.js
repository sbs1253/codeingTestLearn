function solution(book_time) {
  let events = [];
  book_time.forEach(([start, end]) => {
    let [startHour, startMinute] = start.split(':').map(Number);
    let [endHour, endMinute] = end.split(':').map(Number);
    events.push({ time: startHour * 60 + startMinute, type: 'in' });
    events.push({ time: endHour * 60 + endMinute + 10, type: 'out' });
  });

  events.sort((a, b) => (a.time === b.time ? (a.type === 'out' ? -1 : 1) : a.time - b.time));

  let currentRooms = 0;
  let maxRooms = 0;

  events.forEach((event) => {
    if (event.type === 'in') {
      currentRooms++;
      if (currentRooms > maxRooms) {
        maxRooms = currentRooms;
      }
    } else {
      currentRooms--;
    }
  });

  return maxRooms;
}

// 테스트 실행
console.log(
  solution([
    ['15:00', '17:00'],
    ['16:40', '18:20'],
    ['14:20', '15:20'],
    ['14:10', '19:20'],
    ['18:20', '21:20'],
  ])
); // 결과: 3
