function createPhoneNumber(numbers) {
    let result = ""
    let hitung = 0;

    //looping setiap numbers yang ada
    for (let i = 0; i < numbers.length; i++) {
        // masukan numbers yagn telah di loping ke dalam temporary variable
        result += numbers[i] ;
        hitung++;

        //jika sudah mendapatkan 3 angka didepan tambah string "()"
        if (hitung === 3) {
            result = `(${result}) ` 
        }
        //setelah mendapatkan 3 value pertama, cari 3 value selanjutnya dan tambahkan stripe
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