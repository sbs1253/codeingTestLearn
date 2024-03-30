function solution(files) {
  let answer = [];
  let arr = [];
  files.forEach((e, i) => {
    e = e.toLowerCase();
    let a = e.match(/\D+/);
    let b = e.match(/\d+/);
    b.unshift(a[0]);
    arr.push([...b, i]);
  });

  let result = arr.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      if (+a[1] < +b[1]) {
        return -1;
      } else if (+a[1] > +b[1]) {
        return 1;
      } else return 0;
    }
  });
  answer = result.map((e) => files[e[2]]);
  return answer;
}
let arr = ['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat'];
let ar = ['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG', 'foo010bar020.zip'];

console.log(solution(ar));
