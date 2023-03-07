
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0;
    for(let i = 0; i <= arrayOfSheep.length -1 ; i++){
        if(arrayOfSheep[i] === true){
            count++
        }
    }
    return count
}


console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))