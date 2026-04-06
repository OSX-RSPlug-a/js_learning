const str = "typescript saves the js ecosystem"

const result = str.split(" ")

.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1)).join(" ")

console.log(result)