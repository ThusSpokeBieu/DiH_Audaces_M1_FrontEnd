let primeNumbers = [];

function isPrime(getNumber){
    let divisors = [];
    for(var i = 1; i <= getNumber; i++){
        if(getNumber % i == 0){
            divisors.push(i);
        }
    }
    if(divisors.length === 2){
        primeNumbers.push(getNumber);
    }
}

for(var i = 0; i <= 1000; i++){
    isPrime(i);
}

console.log(primeNumbers)
console.log(`Existem ${primeNumbers.length} números primos do número 0 ao 1000.`)