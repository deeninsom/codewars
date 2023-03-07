function solution(str){
  let temp = ""
  for(let i = str.length - 1; i >= 0; i--){
    temp += str[i]
  }
  return temp
}


console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

