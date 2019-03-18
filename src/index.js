module.exports = function getZerosCount(number, base) {
  // your implementation

    const primes = getMapPrime(base);
    let resultZeros = [];

    for (let [prime, PrimePower] of primes) {
        let poweredPrime = prime;
        let tmp = 1;
        let countNumber = 0;

        while ( poweredPrime <= number) {
            countNumber += Math.floor(number / poweredPrime);
            tmp++;
            poweredPrime = Math.pow(prime, tmp);
        }

        countNumber = Math.floor(countNumber / PrimePower);
        resultZeros.push(countNumber);
    }
    return Math.min.apply(Math, resultZeros);
};

function getMapPrime(number) {
    let result = new Map();
    for (let i = 2; i <= number ; i++) {
        if (isPrime(i)) {
            while (number % i === 0) {
                number = number / i;
                if (result.has(i)) {
                    result.set(i, result.get(i) + 1);
                } else {
                    result.set(i, 1);
                }
            }
        }
    }
    return result;
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}