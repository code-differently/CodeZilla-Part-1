class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num) {
       // calculate hours
        let hours = Math.floor(num / 60); // this is holding the hours

       // calculate mins
       let mins = num % 60; // this is holding the remainder of mins

       // output results
       let results = `${hours}:${mins}`;

       return results;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
        // create placeholder to calculate number of words with 6 or more letters
        let wordCount = 0;

        // convert and split string parameter into an array
        let splitString = input.split(' ');

        // calculate the legnth of the array
        let arrayLength = splitString.length;

        // cycle through each array index of each word
        for (let i = 0; i < arrayLength; i++) {
            // set condition to determine numbers of letters in each word
            if (splitString[i].length > 6) {
                wordCount+= 1;
            }
        }

        //output results
        return wordCount;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
        // determine the currency values to be used
        const currency = [1, 5, 10, 20, 50, 100];
         
        // create a placeholder to hold the sum of the denominations
        let sum = 0;

        // cycle through each array index and calculate the demonation related to each index
        for (let i = 0; i < 6; i++) {
            sum+= (input[i] * currency[i]);
        }

        // output results
        return sum;
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input) {
        // select every letter A and Z and swap there places
        let swapLetters = input.replace(/A/g, "_").replace(/Z/g, "A").replace(/_/g, "Z");
        
        // output results
        return swapLetters
    }
}

module.exports = ProblemSet;