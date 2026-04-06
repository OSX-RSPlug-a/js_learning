
const arr = [1,2,3,4,5,4,5,6,7,8,8]

const unique = [];

for(let n of arr){
    if(!unique.includes(n)){
        unique.push(n)
    }
}

console.log(unique);