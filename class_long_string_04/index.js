const arr = ["js", "react", "fastapi"];

const long = arr.reduce((a,b) => 
a.length > b.length ? a:b)

console.log(long);

