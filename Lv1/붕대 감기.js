function solution(bandage, health, attacks) {
  let [time, sec, bonus] = bandage;
  let hp = health;
  let long = 0;
  let ing = attacks[attacks.length - 1][0];
  for (let i = 1; i <= ing; i++) {
    long += 1;
    if (attacks[0][0] == i) {
      long = 0;
      let [_, damage] = attacks.shift();
      hp -= damage;
      if (hp <= 0) {
        hp = -1;
        break;
      }
    } else if (hp < health) {
      hp += sec;
      if (time == long) {
        hp += bonus;
        long = 0;
      }
      if (hp >= health) hp = health;
    }
  }
  return hp;
}

console.log(
  solution([2, 4, 4], 100, [
    [1, 96],
    [18, 1],
  ])
);
