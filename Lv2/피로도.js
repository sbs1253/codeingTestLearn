function solution(k, dungeons) {
  let answer = 0;
  function dfs(heart, dungeons, count) {
    answer = Math.max(answer, count);
    dungeons.forEach(([minHeart, useHeart], index) => {
      if (heart >= minHeart) {
        let nextDungeons = [...dungeons];
        nextDungeons.splice(index, 1); // 현재 던전을 제외하고 다음 탐색을 진행
        dfs(heart - useHeart, nextDungeons, count + 1);
      }
    });
  }
  dfs(k, dungeons, 0);
  return answer;
}
console.log(
  solution(4, [
    [4, 3],
    [2, 2],
    [2, 1],
  ])
);
/*
작동 순서 및 로직:
초기화: solution 함수가 호출되면, 최종 답을 저장할 변수 answer가 0으로 초기화됩니다.
DFS 함수 정의: dfs 함수는 현재 체력(heart), 남은 던전 목록(dungeons), 그리고 현재까지 탐험한 던전의 수(count)를 인자로 받습니다. 이 함수 내에서 재귀적으로 던전 탐험을 시뮬레이션 합니다.
기저 조건: dfs 함수 내에서, 현재까지 탐험한 던전의 수(count)를 기준으로 최댓값을 갱신합니다. 이는 더 이상 탐험할 수 있는 던전이 없거나 모든 던전을 탐험했을 때 최종 결과를 갱신하는 역할을 합니다.
던전 탐험 시뮬레이션: dungeons 배열을 순회하며, 각 던전을 탐험할 수 있는지 확인합니다. 탐험 가능한 조건은 현재 체력(heart)이 해당 던전의 최소 필요 체력(minHeart) 이상일 때입니다.
재귀 호출: 탐험 가능한 던전을 발견하면, 현재 던전을 제외한 새로운 던전 목록(nextDungeons)을 만들고, 해당 던전을 탐험한 후의 체력(heart - useHeart), 새로운 던전 목록, 그리고 탐험한 던전 수(count + 1)를 가지고 dfs 함수를 재귀적으로 호출합니다.
모든 경우 탐색: forEach를 사용하여 모든 던전에 대해 위의 과정을 반복하며, 가능한 모든 경우의 수를 탐색합니다. 이 과정에서 answer는 탐험할 수 있는 최대 던전의 수를 계속해서 갱신합니다.
결과 반환: 모든 재귀 호출이 완료되면, solution 함수는 answer를 반환합니다. 이는 주어진 체력으로 탐험할 수 있는 최대 던전의 수입니다.

ex) 초기 상태: 체력 4, 던전 리스트는 [[4, 3], [2, 2], [2, 2]]
첫 번째 던전 [4, 3]을 탐험 가능: 탐험 후 체력은 1이 됩니다. 탐험 가능한 던전이 없으므로, 탐험한 던전 수는 1입니다.
두 번째 던전 [2, 2]을 탐험 가능: 탐험 후 체력은 2가 됩니다. 이 상태에서 다른 [2, 2] 던전도 탐험 가능합니다. 탐험한 던전 수는 2입니다.
세 번째 던전 [2, 2]을 탐험 가능: 탐험 후 체력은 2가 됩니다. 이 상태에서 다른 [2, 2] 던전도 탐험 가능합니다. 탐험한 던전 수는 2입니다.
 */
