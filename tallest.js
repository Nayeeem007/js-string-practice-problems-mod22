 function maxInArray(numbers){
     let largest = numbers[0];
     for (i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers [ index];
        if(element > largest){
            largest = element;  
         }
        }
        return largest;
 }


 const heights = [ 167, 120, 111, 97, 142];
 const tallest = maxInArray(heights);
 console.log('tallest person is', tallest);


//  homework : write a function to get the lowest number in an array