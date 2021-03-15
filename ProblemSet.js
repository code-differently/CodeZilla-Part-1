class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num){
     //calculate number of hours
     // divide by 60
     //rounding down
     let hours = Math.floor(num / 60);

     //calculate number of minutes
     // find the remainder after dividing by 60
     let mins = num % 60;
     //craft the output
     let convertedTime = `${hours}:${mins}`;

     return convertedTime;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
      // code goes here
      //break string into separate words
      let words = input.split(" ");
      //create a count
      let counter = 0;
      //iterate through each word in the string
      for (let i = 0; i < words.length; i++) {
        //check if each word's length is greater that 6
        //if it is increase the counter by 1
        if (words[i].length > 6) {
          counter++;
        }
      }

      //return the counter

      return counter;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
      //have an array of different bills
      //assign values to each bill
      //multiply each bill value by counter
      let ones = input[0] * 1;
      let fives = input[1] * 5;
      let tens = input[2] * 10;
      let twenties = input[3] * 20;
      let fifties = input[4] * 50;
      let hundreds = input[5] * 100;

      //add a counter for each array position

      //add all those together
      let total = ones + fives + tens + twenties + fifties + hundreds;
      return total;
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