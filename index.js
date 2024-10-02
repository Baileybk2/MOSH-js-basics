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

// Section 4: CONTROL FLOW

// Exercise 1: IF ELSE

// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 20

if (hour >= 6 && hour < 12) {
  console.log("Good Morning!")
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!")
} else {
  console.log("Good Evening!")
}

// Exercise 2: SWITCH CASE

// compare the value of a variable against a bunch of other values.. exact logic can be doen with an if else statement as well..
// however, switch case is is cleaner an easier to read when checking a single value against multiple values

// switch (expression) {
//   case value1:
//     // Code to run if expression === value1
//     break
//   case value2:
//     // Code to run if expression === value2
//     break
//   default:
//   // Code to run if expression doesn't match any case
// }

let role = "guest"

switch (role) {
  case "guest":
    console.log("Guest user")
    break

  case "moderator":
    console.log("Moderator user")
    break

  default:
    console.log("Unknown user")
}

// Exercise 3: FOR LOOP

for (let i = 0; i < 5; i++) {
  console.log("Hello World")
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i)
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i)
}

// Exercise 4: WHILE LOOP

let i = 0
while (i <= 5) {
  if (i % 2 !== 0) console.log(i)
  i++
}

// Exercise 5: DO WHILE
// the condiiton gets evaluatied last, so the statement will evaluate and then stop once it reads the condition..
// this is much less common

// let i = 9
// do {
//   if (i % 2 !== 0) console.log(i)
//   i++
// } while (i <= 5)

// Exercise 6: FOR IN

const woman = {
  name: "Bailey",
  age: 30,
}

for (let key in woman) console.log(key, woman[key])

const colors = ["red", "green", "blue"]
for (let color in colors) console.log(colors[color])

// Exercise 7:
