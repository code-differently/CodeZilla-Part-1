class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */

    // The hours count can be found by dividing the total by 60 and rounding down to the nearest whole number.
    // The minutes count can be found by finding the remainder after dividing the total by 60 (using the modulo operator).
    // Simply return a string literal the performs both of these operations and separates the results with a colon.
   timeConvert(num){
       return `${Math.floor(num / 60)}:${num%60}`;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */

    // First, split the input up into an array. Since we know the words will be separated by spaces, we can use these as the points to split at.
    // Declare an empty array that will hold any big words we find.
    // Simply iterate through the array of words and, if a word meets the condition for a 'big' word, push it into the big words array.
    // Return the length of the big words array, which will be the number of big words that were found.
    countBigWords(input) {
        // code goes here
        const words = input.split(' ');
        let bigWords = [];
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 6) {
                bigWords.push(words[i]);
            }
        }
        return bigWords.length;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */

    // Declare a set of variables that multiply the value at each index of the array by the dollar amount they represent.
    // Total up all of the variables and return the total.
    countingBills(input) {
        let ones = (input[0]), fives = (input[1] * 5), tens = (input[2] * 10), 
        twenties = (input[3] * 20), fifties = (input[4] * 50), hundreds = (input[5] * 100);
        let total = ones + fives + tens + twenties + fifties + hundreds;
        return total;
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

     // Declare an array that will hold the values for the final string.
     // Iterate through the input string and check if each character is an 'A' or a 'Z'.
     // Push the opposite value into the output array.
     // Join the output into a string with no seperators and return it.
    flip(input){
        let output = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i] === 'A') {
                output.push('Z');
            } else {
                output.push('A');
            }
        }
        return output.join('');
    }

}

module.exports = ProblemSet;