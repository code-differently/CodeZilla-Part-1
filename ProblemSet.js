class ProblemSet {

    /*
    Have the function timeConvert(num) take the num parameter being passed and 
    return the number of hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). Separate the number of hours 
    and minutes with a colon.
    */
   timeConvert(num){
       //calculate hour ( num / 60) and round it down
        const hour = Math.floor(num / 60);
        //calculate minutes (num % 60)
        const minutes = num % 60;
        //display values
       return `${hour}:${minutes}`
   }

    /*
    * Have the countBigWords(input) take the str string parameter being passed
    * and return the number of words with more than 6 letters
    * (e.g. "Never eat shredded wheat or cake" would return 1). Words will be
    * separated by single spaces.
    */
    countBigWords(input) {
        // code goes here
        //declare an array where to store biggest words
        let noOfBiggestWords = 0
            //check if word is greater than 6
            input.split(' ').forEach(i =>{ 
            if(i.length >6)
            //store the word in the biggestWord array
            noOfBiggestWords ++});
        
            
        return noOfBiggestWords;
    }

    /*
    * Have the countingBills(input) take in an array containing counts of
    * denominations of dollars and return the total amount of money represented. 
    * (e.g. [0, 2, 0, 1, 3, 0] would return 180) The array represents 0 ones, 2 fives,
    * 0 tens, 1 twenty, 3 fifties, and 0 one hundreds
    */
    countingBills(input) {
        //map for currency
        const billsValue = [1, 5, 10, 20, 50, 100];
        //have a variable to store result
        let result= 0;

         input.map((i, index) => {
            result = result +( i * billsValue[index]);
            
        })   
        return result;
    }

    /**
     * Have the function flip(input) take the input parameter, comprised of As and Zs being passed and
     * return the string with each character flipped. For example: if the input string is "AAZZA" then your
     * program should return the string "ZZAAZ".
     */

    flip(input){
        let finalWord =[];
        input.split('').forEach( i =>{ i === 'Z'? finalWord.push('A') : finalWord.push('Z')})
        return finalWord.join('');
    }

}

module.exports = ProblemSet;