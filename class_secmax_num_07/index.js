const arr = [9,5,21,7];

let max = -Infinity;
let second = -Infinity;

for(let n of arr){
    if(n > max){
        second=max;
        max=n;
    }
    else if(n>second && n !=max){
        second =n;
    }
}

console.log(second)