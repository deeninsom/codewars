function palindrome(str) {
    let temp = ""
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    if (temp === str) {
        return `is Palindrome ? ${true} : ${str} => ${temp}`
    } else {
        return `is Palindrome ? ${false} : ${str} => ${temp}`
    }

}

console.log(palindrome('intan'))
console.log(palindrome('kodok'))