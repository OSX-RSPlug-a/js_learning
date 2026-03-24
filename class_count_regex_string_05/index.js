
const str = "Dude Bugeds";

const count = str.match(/[aeiou]/gi)?.length || 0;

console.log(count);