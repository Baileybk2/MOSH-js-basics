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

// Exercise 8: write a function that returns true if a item is landscape, and false if it is vertical

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

// Exercise 11: Show Numbers, write a function that returns EVEN if the number is even and ODD if the number is odd, up to the limit

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

// Exercise 12: write a function that takes an array and returns the count of items in the array that are TRUTHY

const array = [0, null, undefined, "", 0, 1, 2, 3, 4, 5]

let countTruthy = (array) => {
  let count = 0
  for (let value of array) if (value) count++
  return count
}

console.log(countTruthy(array))

// Exercise 13: write a function that takes an object and returns the properties that are of type "string"

const movie = {
  title: "a",
  year: 2018,
  rating: 4.5,
  director: "b",
}

let showProperties = (object) => {
  for (let key in object) {
    if (typeof object[key] === "string") console.log(key, object[key])
  }
}

showProperties(movie)

// Exercise 14: write a function that returns all of the multiples of 3 and 5 up to a certain limit added together

let sum = (limit) => {
  let sum = 0

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum
}

console.log(sum(10))

// Exercise 15: write a function that takes the average of an array of grades and returns a letter grade based on the average.

// first find average and store in variable
// find sum
// then find average by dividing sum by marks.length
// then compare it to grade ranges
// 1-59 = F
// 60-69 = D
// and so on

const marks = [80, 80, 40]

let calculateGrade = (marks) => {
  let sum = 0

  for (let mark of marks) {
    sum += mark
  }

  let average = sum / marks.length

  if (average < 60) {
    return "F"
  } else if (average < 70) {
    return "D"
  } else if (average < 80) {
    return "C"
  } else if (average < 90) {
    return "B"
  } else {
    return "A"
  }
}

console.log(calculateGrade(marks))

// Exercise 16: write a function that prints stars to the console that corresponds to the number of the row

let showStars = (rows) => {
  for (let row = 1; row <= rows; row++) {
    pattern = ""
    for (let i = 0; i < row; i++) {
      pattern += "*"
    }
    console.log(pattern)
  }
}

showStars(6)

// Exercise 17: Prime numbers
// Prime = factors are only 1 and itself, cannot be divided evenly by any other number

let showPrimes = (limit) => {
  // outer loop is used to iterate through numbers up to limit
  for (let number = 2; number <= limit; number++) {
    // inner loop is used for finding the factors of that number
    let isPrime = true
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      console.log(number)
    }
  }
}

showPrimes(10)

// OBJECTS REVIEW
// object oriented programming (OOP)
// ex:

const circleCircle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw")
  },
}

circleCircle.draw()
// if a function is part of an object we call that a method
// drawing the draw method on the circle object

// what if we want to create two cicle objects?
// FACTORUY FUNCTION
// we have defined our logic now in only one place so we can make different circle objects

let createCircle = (radius) => {
  return {
    radius,
    draw() {
      console.log("draw")
    },
  }
}

const circle1 = createCircle(1)
console.log(circle1)
circle1.draw()

const circle2 = createCircle(2)
console.log(circle2)

// CONSTRUCTOR FUNCTION
// job of this function is to create an object

function Circle(radius) {
  this.radius = radius
  this.draw = function () {
    console.log("draw")
  }
}

Circle.call({}, 1)

const another = new Circle(1)
console.log(another)

// adding properties

const circle3 = {
  radius: 1,
}

circle3.color = "yellow"
circle3.draw = function () {}

console.log(circle3)

// MATH methods

Math.random()
Math.round()
Math.max()
Math.min()

// String methods

const message = "This is my first message"
console.log(message.length)
console.log(message.includes("my"))
console.log(message.includes("not"))
console.log(message.startsWith("This"))
console.log(message.startsWith("this"))
console.log(message.indexOf("my"))
console.log(message.replace("first", "second"))
console.log(message)
console.log(message.toUpperCase())
console.log(message.split(" "))

const anotherString = new String("hi")

// template literals

const name = "Nicky"
const newMessage = `Hi ${name}, 

Thank you for joinging my mailing list.

Regards, 
Bailey`

console.log(newMessage)

// OBJECT EXERCISES

// Exercise 1: create an object with street, city, and zip code properties, also create function that displays all properties of object along with value

const address = {
  street: "Whitfield Ave",
  city: "Sarasota",
  zipCode: 34243,
}

let showAddress = (address) => {
  for (let key in address) {
    console.log(key, address[key])
  }
}

showAddress(address)

// Exercise 2: write both a factory and constructor function to initialize an address object.

// FACTORY function

let createAddress = (street, city, zipCode) => {
  return {
    street,
    city,
    zipCode,
  }
}

const addressOne = createAddress("Whitfield Ave", "Sarasota", 34243)
console.log(addressOne)

// CONSTRUCTOR function

function Address(street, city, zipCode) {
  this.street = street
  this.city = city
  this.zipCode = zipCode
}

const anotherAddress = new Address("Whitfield Ave", "Sarasota", 34243)
console.log(anotherAddress)

// Exercise 3: use the constructor function above to create two address objects

const evenAnotherAddress = new Address("Whitfield Ave", "Sarasota", 34243)

let areEqual = (anotherAddress, evenAnotherAddress) => {
  return (
    anotherAddress.street === evenAnotherAddress.street &&
    anotherAddress.city === evenAnotherAddress.city &&
    anotherAddress.zipCode === evenAnotherAddress.zipCode
  )
}

let areSame = (anotherAddress, evenAnotherAddress) => {
  return anotherAddress === evenAnotherAddress
}

console.log(areEqual(anotherAddress, evenAnotherAddress))
console.log(areSame(anotherAddress, evenAnotherAddress))

let address3 = anotherAddress

console.log(areSame(anotherAddress, address3))

// Exercise

const blogPost = {
  title: "Hello World",
  body: "This is my very first blog post!",
  author: "Bailey Beck",
  views: 62,
  comments: [
    {
      author: "a",
      body: "b",
    },
    {
      author: "c",
      body: "d",
    },
  ],
  isLive: true,
}

console.log(blogPost)

// Exercise 5: create a constructor function to create a post object that has not been published yet

function Post(title, body, author) {
  this.title = title
  this.body = body
  this.author = author
  this.views = 0
  this.comments = []
  this.isLive = false
}

let newPost = new Post(
  "Constructor function",
  "This is my second blog post.",
  "Nicky"
)

console.log(newPost)

// Exercise 6: create a array of objects, a price range object (Yelp). What properties should these objects have?

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$", tooltip: "Inexpensive", minPerPerson: 21, maxPerPerson: 30 },
]

let restaurants = [{ averagePerPerson: 5 }]
