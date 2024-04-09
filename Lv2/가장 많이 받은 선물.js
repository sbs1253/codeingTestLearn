function solution(friends, gifts) {
  let answer = 0;
  let giftfriend = {};
  let giftgive = {};

  friends.forEach((friend) => {
    giftfriend[friend] = {};
    giftgive[friend] = 0;
  });
  Object.keys(giftfriend).forEach((key) => {
    Object.keys(giftgive).forEach((value) => {
      if (key !== value) {
        giftfriend[key][value] = 0;
      }
    });
  });

  gifts.forEach((gift) => {
    let [friend, give] = gift.split(' ');
    if (!giftfriend[friend][give]) giftfriend[friend][give] = 0;
    if (!giftgive[give][friend]) giftgive[give][friend] = 0;
    giftfriend[friend][give] += 1;
    giftgive[friend] += 1;
    giftgive[give] -= 1;
  });

  let nextMonthGifts = {};

  friends.forEach((friend) => {
    nextMonthGifts[friend] = 0;
  });

  Object.keys(giftfriend).forEach((key) => {
    Object.keys(giftfriend[key]).forEach((value) => {
      if (giftfriend[key][value] > giftfriend[value][key]) {
        nextMonthGifts[key] += 1;
      } else if (giftfriend[key][value] == giftfriend[value][key]) {
        if (giftgive[key] > giftgive[value]) nextMonthGifts[key] += 1;
      }
    });
  });

  answer = Math.max(...Object.values(nextMonthGifts));
  return answer;
}
console.log(
  solution(
    ['joy', 'brad', 'alessandro', 'conan', 'david'],
    ['alessandro brad', 'alessandro joy', 'alessandro conan', 'david alessandro', 'alessandro david']
  )
);
