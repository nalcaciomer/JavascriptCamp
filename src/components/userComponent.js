import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Ömer", "Nalçacı", "Çorum")

let user2 = new User(2, "Engin", "Demiroğ", "Ankara")

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

let customer = {id:1, firstName: "Engin"}

// prototyping
customer.lastName = "Demiroğ"

console.log(customer)


console.log("----------------------------")

userService.load()

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)