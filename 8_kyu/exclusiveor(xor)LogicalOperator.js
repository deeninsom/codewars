function xor(a, b) {
    // TODO: Program Me
    return (a == false && b == false) ? false : 
    (a == true && b == false) ? true : 
    (a == false && b == true) ? true : 
    (a == true && b == true) ? false : 0


}


console.log(xor(false, false))
console.log(xor(true, false))
console.log(xor(false, true))
console.log(xor(true, true))



// BEST PRACTICE 
// function xor(a, b) {
//     // TODO: Program Me
//     return a != b;
// }
