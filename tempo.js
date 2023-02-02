let first = 3;
let second = 9;
// this is wrong approach
// first = second;
// second = first;
console.log(first, second);
// use 'temp' to interchange the numbers 
// approach 1
const temp = first;
first = second;
second = temp;
console.log(first,second);

// approach 2 -- destructuring

[ first, second ] = [ second, first ];
console.log(first,second);



 