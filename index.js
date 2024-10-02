console.log("Hello World")

let isApproved = false
let firstName = undefined
let selectedColor = null

let person = {
  name: "Bailey",
  age: 30,
}

person.name = "Nicky"

person["name"] = "Mary"

console.log(person.name)

let selectedColors = ["red", "blue"]
selectedColors[2] = 1
console.log(selectedColors)

// Ternary Operator

let points = 110
let type = points > 100 ? "gold" : "silver"

console.log(type)

let age = 18
let canVote = age >= 18 ? "Yes" : "No"

console.log(canVote)

// Logical Operators

console.log(true && true)

let highIncome = true
let goodCreditScore = true
let eligibleForLoan = highIncome && goodCreditScore
console.log("Eligible", eligibleForLoan)

let applicationRefused = !eligibleForLoan
console.log("Application refused", applicationRefused)

// the result of a logical expression is not necessarily a true or false...

false || true
// true
false || "Bailey"
// 'Bailey'
false || 1
// 1
// Falsy & Truthy --> if something isn't Falsy, it's Truthy

// operator precedence

let x = 2 + 3 * 4
console.log(x)

// Exercise

let a = "red"
let b = "blue"

// swap vlue of variables

let c = a
a = b
b = c

console.log(a)
console.log(b)
