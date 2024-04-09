function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(/[^a-z\d-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .slice(0, 15)
    .replace(/\.$/, '');

  return id.padEnd(3, id[id.length - 1] || 'a');
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
