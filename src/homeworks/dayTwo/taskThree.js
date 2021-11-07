// Task 3: 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız
let total = 0
for (let i = 2; i <= 1000; i++) {
    for (let k = i; k >= 1; k--) {
        if (i % k == 0) {
            total += k
        }
    }  
    
    if (total == 2 * i) {
        console.log("Number : " + i + " is a Perfect Number.")
    }
    total = 0
}