// Task 1 : JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//         Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function writeIsPrimeNumber(number, isPrime) {
    console.log("Number : " + number + " => isPrime : " + isPrime)
}

function isPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 1) {
            writeIsPrimeNumber(numbers[i], false)
        }  

        else {
            let primeControl = true
            for (let k = 2; k < numbers[i]; k++) {
                if (numbers[i] % k == 0) {
                    primeControl = false
                    break
                }
            }
            writeIsPrimeNumber(numbers[i], primeControl)
        }
    }
}

isPrime(1,2,3,4,5,6,7,8,9,10)