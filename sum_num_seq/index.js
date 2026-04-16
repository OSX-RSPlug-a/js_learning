 
 let num = 1234567891;
 let sum = 0;
 let lastInput;

 while (num > 0){
    lastInput = num % 10;
    sum = sum + lastInput;
    num = parseInt(num / 10);
 }

 console.log(sum)