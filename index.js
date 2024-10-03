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

// Write a function that takes two numbers and returns the maximum of the two.

let maxOfTwo = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

// or use ternary..
// return (num1 > num2) ? num1 : num2

console.log(maxOfTwo(10, 7))
console.log(maxOfTwo(30, 31))
console.log(maxOfTwo(1.3, 0.7))
console.log(maxOfTwo(4, 4))

// Exercise 8:

let isLandscape = (width, height) => {
  return width > height
}

console.log(isLandscape(50, 23))
console.log(isLandscape(2, 58))

// Exercise 9: FIZZBUZZ
// Divisiible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by 3 and 5 = FizzBuzz
// Not? = input
// not a number => "Not a Number"

let fizzBuzz = (number) => {
  if (typeof number !== "number") {
    return "Not a number"
  } else if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz"
  } else if (number % 3 === 0) {
    return "Fizz"
  } else if (number % 5 === 0) {
    return "Buzz"
  } else {
    return number
  }
}

console.log(fizzBuzz(true))
console.log(fizzBuzz(9))
console.log(fizzBuzz(10))
console.log(fizzBuzz(15))
console.log(fizzBuzz(4))
console.log(fizzBuzz("Bailey"))

// Exercise 10: DEMERIT NUMBER

// Speed limit = 70
// 5km above -> 1 point -> Math.floor()
// 12 points -> suspended (60 km above)

let checkSpeed = (speed) => {
  const speedLimit = 70
  const kmPerPoint = 5
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok")
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) {
      console.log("License Suspended")
    } else {
      console.log("Points", points)
    }
  }
}

checkSpeed(50)
checkSpeed(70)
checkSpeed(71)
checkSpeed(115)
checkSpeed(190)

// Exercise 11: Show Numbers

let showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i, "EVEN")
    } else {
      console.log(i, "ODD")
    }
  }
}

showNumbers(10)

// Exercise 12:

const array = [0, null, undefined, "", 0, 1, 2, 3, 4, 5]

let countTruthy = (array) => {
  let count = 0
  for (let value of array) if (value) count++
  return count
}

console.log(countTruthy(array))
