class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */

   timeConvert(num){
    // Calculate number of hours
        // Divide by 60
        // Round down the number
        let hours = Math.floor(num/60);
    // Calculate number of minutes
        // Get remainder of num/60
        let minutes = num % 60;
    // Craft your output
        // Return hours and minutes separated by a colon
        return `${hours}:${minutes}`;
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */

    countBigWords(input) {
    // Set a counter equal to 0
    let counter = 0;
    // Split the input into words
    let temp = input.split(" ");
    // Determine the length of each word by iterating over the array
        //If the word is greater than 6 letters, add 1 to a counter
        // If the word is less than or equal to 6 letters, go on to next word
        for(let i = 0; i < temp.length; i++) {
            if (temp[i].length > 6) {
                counter++;
            }
        }
    // Output the counter
        return counter;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
    // Set sum to zero
        let sum = 0;
    // Represent denominations of money
        let bills = [1,5,10,20,50,100];
    // Multiply the first number of bills by 1 and add to sum
    // Multiply the second number of bills by 5 and add to sum
    // Multiply the third number of bills by 10 and add to sum
    // Multiply the fourth number bills by 20 and add to sum
    // Multiply the fifth number bills by 50 and add to sum
    // Multiply the sixth number bills by 100 and add to sum
        for(let i = 0; i < input.length; i++ ){
            sum += input[i] * bills[i];
        }
        
    // Output sum
        return sum;   
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input){
    // Set a temp string
    let output = "";
    // Look at each character in the string
    for(let i = 0; i < input.length; i++) {
        // If character is a "A", change it to a "Z" and save in a new string
        if (input[i] === "A") {
            output += "Z";
        // If charachter is a "Z", change it to an "A" and save in new string
        } else {
            output += "A";
        }
    }
    // Output the new string
        return output;
    }
}

module.exports = ProblemSet;

