// map => Diziyi iterate etmek için kullanılır.

// reduce => Accumulator ile diziyi iterate eder.

// filter => 
let  cart = [
    {id: 1, productName: "Phone", unitPrice: 4000},
    {id: 2, productName: "Computer", unitPrice: 8000},
    {id: 3, productName: "HDD", unitPrice: 300}
]

cart.map(product=>{ 
    console.log(product.id)
    console.log(product.productName + ": " + product.unitPrice)
    
})

let total = cart.reduce((acc, product) => acc + product.unitPrice , 0)

console.log("Cart Total: " + total)

let productsMin5000 = cart.filter(product=> product.unitPrice < 5000)
console.log(productsMin5000)
