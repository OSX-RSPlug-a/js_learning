let obj = {a:1, b:2};

let res = [];

for(let key in obj){
    res.push([key, obj, [key]])
}

console.log(res)