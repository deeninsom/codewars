function divisibleBy(numbers, divisor){
    let arr = [];
    for(let i=0; i <= numbers.length -1; i++){
      let temp = numbers[i] % divisor 
      if(!temp){
        arr.push(numbers[i])
      }
    }
    return arr
  }


  //test
console.log(divisibleBy([1,2,3,4,5,6], 2));
console.log(divisibleBy([1,2,3,4,5,6], 3));