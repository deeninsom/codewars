// function strCount(str, letter) {
//     //cde here
//     let temp = ""
//     let result = str.split('')
//     let count = 1
//     for(let i = str.length - 1; i >= 0; i--){
//         temp += str[i]
//            if(str[i] === str[i + 1]){
//             count++
//         }
//     }
//     if(temp.indexOf(letter) >= 0){
//         return temp.indexOf(letter) + 1
//     }else if(temp.indexOf(letter) != str){
//         return 0
//     }
// }


// console.log(strCount('hallo', 'o'))
// console.log(strCount('hallo', 'l'))
// console.log(strCount('', 'z'))
// console.log(strCount('jzkklbielkkedifhfaedbcafhggabdgjaaddfgbzahdfdadjhhadebabeddkacdifdaihialjzlkchzzjjdhii', 'd'))


function strCount(str, letter) {
    //cde here
    let temp = ""
    let count = 1
    let input = str.length - 1
    for(let i = 0; i <= input; i++){
        if(str[i] === str[i + 1]){
            return temp +=(str[i])    
        }
    }
    return temp
    
}

console.log(strCount('hallo annjing'))

// console.log(strCount('jzkklbielkkedifhfaedbcafhggabdgjaaddfgbzahdfdadjhhadebabeddkacdifdaihialjzlkchzzjjdhii'))

