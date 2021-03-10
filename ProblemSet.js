class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */


    // To determine the number of hours Divide parameter by 60 and use Math.floor to return a whole number. Set it equal to a variable 'hours'.

    // To determine the number of minutes used the modulo operator to find the remainder of the parameter divided by 60.  Set it equal to a variable 'minutes'

    //  Return a template literal with the Hours and Minutes Variables in the time format.
   timeConvert(num){
       const hours = Math.floor(num/60);
       const minutes = num%60;
       return `${hours}:${minutes}`;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */


    // Split the string at the empty space using the split method and set it to a new variable
    // create a new variable to hold the count
    // Loop through the split string, compare the length of each index to 6.
    // If the length is greater than 6 increment the count 
    // return the count 


    countBigWords(input) {
        let inputSplit = input.split(" ");
        let count = 0;
        for (let i=0; i<inputSplit.length; i++){
            if (inputSplit[i].length > 6){
                count++;
            }
        }
        return count;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */

    // create an array of the denominations
    // use for loop to loop through the 2 arrays. 
    // Multiple the two arrays at their matching indexes and store the resulting array in a variable
    // use for loop to loop through and sum the new array 
    //  return the sum

    countingBills(bills) {
        let sum = 0;
        let newArray = [];
        const denominations = [1, 5, 10, 20, 50, 100];
        for (let i=0; i<Math.min(bills.length, denominations.length); i++){
             newArray[i] = bills[i] * denominations[i];
                } for (let value of newArray){
                    sum += value;
                }
        return sum;
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    // convert input string to uppercase and set in a new variable
    // create an object mapping characters to their new value
    // Use replace method and regex to replace the characters using an function that gets called for each match as the replacement argument.
    flip(input){
        let newInput = input.toUpperCase();
        let characters = {
            'A':'Z',
            'Z':'A'
        };

        return newInput.replace(/[A,Z]/g, m => characters[m]);
    } 

}

module.exports = ProblemSet;