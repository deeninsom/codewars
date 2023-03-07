function createPhoneNumber(numbers) {
    let result = ""
    let hitung = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] ;
        hitung++;
        let next = hitung + 3
        if (hitung === 3) {
            result = "(" + result + ") " 
        }
        else if(hitung === 6){
            result = result + "-"
        }
    }
    return result
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))


// BEST PRACTICE
// var format = "(xxx) xxx-xxxx";
  
// for(var i = 0; i < numbers.length; i++)
// {
//   format = format.replace('x', numbers[i]);
// }

// return format;