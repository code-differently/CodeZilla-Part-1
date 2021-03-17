class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num){
       // Divide num by 60
       // Round down
       let hours = Math.floor(num/60);
       // Remainder is minutes
       let minutes = num % 60;
       // Return hours:minutes
       let results = hours + ":" + minutes;
       return results;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
        // split string
        // count letters in each word with a four loop
        // return number of words with more than 6 letters
        let str = input.split(” “);
        let numWords = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i].length > 6) {
                numWords++;
            };
        };
        return numWords;
    };

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
        // Assign dollar amount to each index of the array
        let billCount = [1, 5, 10, 20, 50, 100];
        // Multiply each bill by input
        array.forEach(element => {
           
        });
        // Add the totals of the dollar amounts
        // Return total amount
        return -1;
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input){
        return null;
    }

}

module.exports = ProblemSet;