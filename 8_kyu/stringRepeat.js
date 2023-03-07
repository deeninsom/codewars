function repeatStr (n, s) {
    let temp = ""
    for(let i =1; i <= n; i++){
        temp += s
    }
    return temp;
  }



  console.log(repeatStr(3,"*"))