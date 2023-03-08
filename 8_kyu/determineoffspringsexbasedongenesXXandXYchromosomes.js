function chromosomeCheck(sperm) {
  let temp = ""
  for(let i = 0; i <= sperm.length - 1; i++ ){
    let awal = i
    let akhir = sperm.length - 1

    if(sperm[awal] !== sperm[akhir]){
        return temp += "Congratulations! You're going to have a son."
    }  
  }
  return temp += "Congratulations! You're going to have a daughter."
}



console.log(chromosomeCheck('xx'))
console.log(chromosomeCheck('xy'))