function remZero(arr){
    let result = []

    for(let num of arr){
        if(num !== 0) result.push(num);
    }
    return result;
}

console.log(remZero([12,2,0,2,0,3,6,11,9,8,7,7,7,5,0,4,0,0,10,1]))