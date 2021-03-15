class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
    */
    timeConvert(num) {

// Calculate number of hours
    // Divide number by 60 & round down the results
    let hours = Math.floor(num / 60);
// Calculate the number of minutes
    // Use modulus operator to save remainder to variable
    let minutes = num % 60;
    // Position hours variable on left of ' : ' Position minutes variable to the right of colon
    return `${hours}:${minutes}`;
}

    /*
    * Have the countBigWords(input) take the str string parameter being passed 
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
    // convert string of words to an array of words separated by spaces
    let inputArray = input.split(' ');
    // create a variable to keep count of the number of words longer than 6 characters
    let bigWordCount = 0
    // step thru the length of the array and count the length of each word
    for (let i = 0; i < inputArray.length; i++)
    // compare the length of each word in the array to 6
        if (inputArray[i].length > 6) {
    // if the word is longer than 6, increase bigWordCount by 1
            bigWordCount++;
        }
    return bigWordCount;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
    // create an array to hold bill values
        let billArray = [1, 5, 10, 20, 50, 100];
    // create a variable to hold the sum of the bills
        let sum = 0;
    // iterate through the array one index at a time
        for (let i = 0; i < input.length; i++) {
    // multiply each element in billArray by the element of the input array
    // set sum equal to zero and add the product of each set of array elements to sum
            sum += input[i] * billArray[i];
        }
    return sum;
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input)
    {
        //Replace each A with a Z.  Replace each Z with an A.
        //First becomes last and last becomes first.
        // create an array to store the output
        let flipArray = [];
        // iterate through input
        for (let i = 0; i < input.length; i++) {
        // if A replace with Z and put in array
            if (input[i] === 'A') {
                flipArray.push('Z');
        // if not A (assume it is Z) and replace with A and put in array
            } else {
                flipArray.push('A');
            }
        }
        // convert array back to a string
        return flipArray.join('');
    }

}

module.exports = ProblemSet;