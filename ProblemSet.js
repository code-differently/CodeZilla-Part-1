class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num){
       // find number of hours and round down
       let hours = Math.floor(num/60);
       // find remaining minutes in addition to number of hours
       let mint = (num % 60);
        // combine both hours and minutes seprating them using colon
       let result = (hours + ":" + mint);
       return result;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
        // Split the input
        let arr = input.split(" ");
        // Start counter from 0
        let count = 0;
        //if array contains more than 6 lettes word, add 1 otherwise neglect word and keep moving further
        //until whole string input is completed
        arr.forEach(word =>{
            if (word.length > 6){
                count++;
            }
        
        });

        // return the count of all words with more than 6 letters
        return count;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
        // enter dollar values in array form
        let dollars = [1, 5, 10, 20, 50, 100];
         
        // create a placeholder to hold the sum of the denominations
        let sum = 0;

        // Iterate in array indices and get the value of each index position
        // go up to 6 values in index position
        for (let i = 0; i < 6; i++) {
            sum+= (input[i] * dollars[i]);
        }

        // get the results
        return sum;
        
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input){
        
        // get letters from A to Z and swap letter values
        // using regex with global parameter
        // 
        let swapChr = input.replace(/A/g, "_").replace(/Z/g, "A").replace(/_/g, "Z");
        
        // output results
        return swapChr;
    }

}

module.exports = ProblemSet;