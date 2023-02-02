const result = Math.pow(2,8);
console.log(result);

// takes the positive gap by this 'math.abs' function
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);
if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('You guys stay apart');
}

// it will round a fractional number 
const number = 2.49634;
const fullNumber = Math.round(number);
console.log(fullNumber);

// it will produce the next integer
const result2 = Math.ceil(2.0001);
const result3 = Math.floor(2.999);
console.log(result3);
console.log(result2);

// It will give you a random number as their wish

console.log(Math.random());



// multiple function in a variable
const random = Math.round(Math.random()*100);
console.log(random);


for(let i = 0; i < 20; i++ ){
    const random = Math.round(Math.random()*100);
    console.log(random);
}