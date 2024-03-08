function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  cities.forEach((city) => {
    let lowerCity = city.toLowerCase();
    let index = cache.indexOf(lowerCity);

    if (index !== -1) {
      answer += 1;
      cache.splice(index, 1);
      cache.push(lowerCity);
    } else {
      answer += 5;
      if (cache.length === cacheSize) {
        cache.push(lowerCity);
        cache.shift();
      } else cache.push(lowerCity);
    }
  });

  return answer;
}
console.log(solution(3, ['A', 'B', 'C', 'A', 'D', 'G', 'A']));
