function solution(s) {
  return s.split(/p/gi).length - 1 === s.split(/y/gi).length - 1;
}

/*
s	answer
"pPoooyY"	true
*/
