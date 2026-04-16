const arr = [1,2,2,3,3,4,5,6,6,7,7,7];

const freq = arr.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) +1;

    return acc;
},{});

console.log(freq);