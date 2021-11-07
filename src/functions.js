 function addToCart(quantity, productName = "Elma") {
     console.log("Sepete eklendi : " + productName + " adet : " + quantity)
 }

 //addToCart("Elma")
 addToCart(10)
 //addToCart()

 let sayHello = () => {
    console.log("Hello World!")
 }

 sayHello()

 let sayHello2 = function () {
     console.log("Hello World 2!")
 }
 sayHello2()