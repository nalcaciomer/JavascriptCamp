// Task 4: 1000'e kadarki tüm asal sayıları listeleyen programı yazınız
let range = 1000;
let primeCount = 0;
for (let i = 2; i <= range; i++) {
  let isPrime = true;
  for (let k = 2; k < i; k++) {
    if (i % k == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeCount += 1;
    listPrimeNumbers(i, primeCount);
  }
}

function listPrimeNumbers(primeNumber, count) {
  console.log(count + ". " + "Prime Number: " + primeNumber);
}
