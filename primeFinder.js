var givenNum = 0;
function showPrimes(limit) {
    var factors = 0;
    var numberOfPrimes = 0;
    var primeList = [];
    // set number equal to 2 because 2 is the first prime number.
    // the first for loop just count up to the desired number
    for (number = 2; number <= limit; number++) {

        // Iterates through number dividing each time to see if the number is a factor
        for(n=1; n <= number; n++) { // num =2
           
            if (number % n === 0) {
                factors++;
            }

            if (factors > 2) {
                break;
            }
        }

        // check if the number is prime by seeing if it 2 factors
        if (factors == 2) {
            console.log(number);
            primeList.push(number);
            numberOfPrimes++;
        } 
        //
        //
        factors=0;
    }
    console.log("Number of primes numbers between 1 and " + limit + " is " + numberOfPrimes);
    return primeList;
}

console.log(showPrimes(givenNum));