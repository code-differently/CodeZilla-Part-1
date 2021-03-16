class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num){
    
   
// calculate number of hours
// take the number of mins(63) and divide by the number of minutes in an hour
// find the remainder
// round down
// create the output

   let hours = Math.floor(num/60);
   let minutes = num % 60;
   return hours + ":" + minutes;
   }
    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
        // code goes here
        // return null;
        // create variabke for input
        let words = input.split(" ");

        // seperate each word by space
       let bigWords=[];
         // count each letter in each word
         for(let i=0; i < words.length; i++){

             if(words[i].length > 6){
                 bigWords.push(words[i]);
             }
         }
         return bigWords.length;
        }

    // return number of words with 6 letters

     
    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
        // create an array that represent demoninations [One, Five, Ten, Twenty, Fifty, Hundred]
        let denom = [1, 5, 10, 20, 50, 100];
        // create a loot variable that starts with $0
        let loot = 0;
        //iterate through array until all input number have reached the end
        // add value of i * the denomination until end is reached 
        for (let i = 0; i < input.length; i++){
            loot += (input[i] * denom[i]);
        }
        // return value of loot
        return loot;
    }
    //count the amount of bills presented
    //seperate the denominations
    //add all denominations to return total

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

        flip(input){
            //  set empty variable 
            let string = '';
            //  split eatch letter, iterate through each letter. If the letter is A
            //  change to Z and add it to the string array, if Z, change to A.
            // condition ? exprIfTrue : exprIfFalse
            input.split('').forEach(letter => {
                string += letter === 'A' ? 'Z' : 'A';
            });
            // return populated string with reverse output
            return string;
        }

    }


module.exports = ProblemSet;