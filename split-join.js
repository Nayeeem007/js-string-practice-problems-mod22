const lyrics = 'Joto dureiiii thakoo, robeee amariii. hariyee jeonaa kokhonooo tumiii '
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(chars);
console.log(parts);
console.log(sentences);


const partial = lyrics.slice(5,8);
console.log(partial);

const partial2 = lyrics.substring(5,8);
 console.log(partial2);


// Trim 
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

// concat

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"


const lines = [
    'Joto dureiiii thakoo, robeee amariii',
    ' hariyee jeonaa kokhonooo tumiii '
  ]

  const newSong = lines.join('+');
  console.log(newSong);
