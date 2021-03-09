class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num){
       return `${parseInt( (num / 60), 10 )}:${num % 60}`;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
        const array = input.split(' ');
        let count = 0;

        array.forEach(word => {
            if(word.length > 6){
                count++;
            }
        });

        return count;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
        return ( 
            input[0] +
            input[1] * 5 +
            input[2] * 10 +
            input[3] * 20 + 
            input[4] * 50 +
            input[5] * 100
         );
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input){
        let str = '';

        input.split('').forEach(letter => {
            str += letter === 'A' ? 'Z' : 'A';
        });

        return str;
    }

}

module.exports = ProblemSet;