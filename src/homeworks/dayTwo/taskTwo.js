// Task 2: Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız

function areFriendlyNumbers(number1, number2) {
    let bigNumber = number1
    if (number2 > bigNumber) {
        bigNumber = number2
    }
    let total1 = 0
    let total2 = 0

    for (let i = 1; i < bigNumber; i++) {
        if (number1 % i == 0 && i != number1) {
            total1 += i
        }
        
        if (number2 % i == 0 && i != number2) {
            total2 += i
        }
    }

    if (total1 == number2 && total2 == number1) {
        return true
    }
    return false
}
let number1 = 220
let number2 = 284
console.log("Number1 = " + number1 + " and Number2 = " + number2 + " are Friendly Numbers? : " +  areFriendlyNumbers(number1, number2))