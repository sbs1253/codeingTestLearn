function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let arr = Array(bridge_length).fill(0);
  let truck = 0;
  while (truck_weights.length > 0 || truck > 0) {
    answer++;
    let pass = arr.shift();
    truck -= pass;
    if (truck_weights.length > 0) {
      if (truck + truck_weights[0] <= weight) {
        let value = truck_weights.shift();
        arr.push(value);
        truck += value;
      } else {
        arr.push(0);
      }
    }
  }

  return answer;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
