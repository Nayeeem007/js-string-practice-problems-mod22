// const lyrics = ' Joto dureiiii thakoo, robeee amariii. hariyee jeonaa kokhonooo tumiii '
// const doesExist = lyrics.includes('dureiiii');
// // 'includes' , this is case sensative 
// const doesExist1 = lyrics.includes('Dureiiii');
// const doesExist2 = lyrics.includes('dor');
// console.log(doesExist,doesExist1,doesExist2);



const lyrics = 'Joto dureiiii thakoo, robeee amariii. hariyee jeonaa kokhonooo tumiii '
const searchString = 'Joto';
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);

// Two commands in one line 

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
// console.log(doesExist);
// console.log(doesExistOneLine);




/*-----------------
                 indexOf
----------------*/ 


// will find the first word of searching expected word if we have same two words
console.log(lyrics.indexOf('t'));
console.log(lyrics.lastIndexOf('t'));


if(lyrics.indexOf('thako')!== -1 ){
        console.log('exists inside the string');
}
else{
    console.log('cant find it');
}


// startsWith

console.log(lyrics.startsWith('Joto'));


// endsWith
const fileName = 'myBiodata.pdf';
const otherFile = 'Meeee.png';
checkEnding = fileName.endsWith('.pdf');
console.log(checkEnding);