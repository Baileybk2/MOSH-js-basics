// FUNCTIONS

let walk = () => {
  console.log("walk")
}

walk()

// arguements
// what if we want flexibility with the number of arguments that are passed in a function?

// Arguments Object
function sum(a, b) {
  let total = 0
  for (let value of arguments) total += value
  return total
}

console.log(sum(1, 2, 3, 4, 5))

// Rest Operator
// the rest operator allows us to pass a varying number of arguements and they go in to an array

function sumArgs(...args) {
  return args.reduce((a, b) => a + b)
}

console.log(sumArgs(1, 2, 3, 4, 5, 10))

// ex:
function sumPrices(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b)
  return total * (1 - discount)
}

console.log(sumPrices(0.1, 20, 30))

// Exercise 1: Sum of Arguments

function sumValues(...values) {
  if (values.length === 1 && Array.isArray(values[0])) values = [...values[0]]
  return values.reduce((a, b) => a + b)
}

console.log("Exercise 1:", sumValues([1, 2, 3, 4]))

// Exercise 2: Area of a Circle

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius
  },
}

console.log(circle.area)

// Exercise 3: Error Handling

let countOccurances = (array, searchElement) => {
  if (!Array.isArray(array)) throw new Error("Invalid array")

  return array.reduce((accumulator, current) => {
    const occurance = current === searchElement ? 1 : 0
    return accumulator + occurance
  })
}

try {
  const numbers = [1, 2, 3, 4]
  const count = countOccurances(numbers, 1)
  console.log("Exercise 3:", count)
} catch (e) {
  console.log(e.message)
}
