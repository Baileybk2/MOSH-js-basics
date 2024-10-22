// ARRAYS

// Adding Elements

// const numbers = [3, 4]

// // End

// numbers.push(5, 6)
// console.log(numbers)

// // Beginning

// numbers.unshift(1, 2)
// console.log(numbers)

// // Middle

// numbers.splice(2, 0, "a", "b")
// console.log(numbers)

// Finding Elements

// Primitives

const numbers1 = [1, 2, 3, 1, 4]

console.log(numbers1.indexOf("a"))
console.log(numbers1.indexOf(1))

// add a second arguement to above console log called "from index"... this is the index at which the search will begin
console.log(numbers1.indexOf(1, 2))

console.log(numbers1.lastIndexOf(1))

console.log(numbers1.lastIndexOf(1) !== -1)
// better way of writing above console log
console.log(numbers1.includes(1))

// Reference Types

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
]

// this returns false because technically these are two differnet objects, they are in two different places in memory

console.log(courses.includes({ id: 1, name: "a" }))

// objects are reference types, so the "find" method should be used

let course = courses.find(function (course) {
  return (course.name = "a")
})

console.log(course)

// Removing Elements
let numbers2 = [1, 2, 3, 4]

// // End
// const last = numbers2.pop()
// console.log(last)

// // Beginning
// const first = numbers2.shift()
// console.log(first)

// Middle
numbers2.splice(2, 1)
console.log(numbers2)

// Emptying an Array

numbers2 = []
let another = numbers2

console.log(numbers2)
console.log(another)

// or use numbers2.length = 0 and this will empty the array
// or use splice method, numnbers2.splice(0, numbers2.length)

// Combining and Slicing Arrays

const first1 = [1, 2, 3]
const second = [4, 5, 6]

// const combined = first1.concat(second)
// console.log(combined)

// const slice = combined.slice(3)
// console.log(slice)

// Spread Operater

const combined = [...first1, ...second]
console.log(combined)

const copy = [...combined]
console.log(copy)

// Iterating an Array

const nums = [1, 2, 3]

// first way
for (let num of nums) console.log(num)

// second way
nums.forEach((num, index) => console.log(index, num))

// Joining Arrays

const joined = nums.join(",")
console.log(joined)

const message = "this is my first message"
const parts = message.split(" ")
console.log(parts)

const arrayCombined = parts.join("-")
console.log(arrayCombined)

// Sorting Arrays

const words = ["pear", "papaya", "apple", "tomato", "banana"]
words.sort()
console.log(words)

words.reverse()
console.log(words)

const numbies = [9, 2, 5, 1, 7, 4, 3, 8]
numbies.sort()
console.log(numbies)

numbies.reverse()
console.log(numbies)

const classes = [
  { id: 1, name: "spanish" },
  { id: 2, name: "biology" },
  { id: 3, name: "history" },
]

classes.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
})
console.log(classes)

// Testing the Elements of an Array

const nums2 = [-10, -2, 0, 4, 5]

// the every() method terminates the function at the first instance of it finding an element that doesnt match the criteria of the funciton
const allPositive = nums2.every(function (value) {
  return value >= 0
})

console.log(allPositive)

// the some() method checks to see if there is at least one element that matches the criteria.

const somePositive = nums2.some(function (value) {
  return value >= 0
})

console.log(somePositive)

// Filtering an array

const filtered = nums2.filter((n) => n >= 0)
console.log(filtered)

// Mapping an Array

const items = filtered.map((n) => {
  return { value: n }
})

console.log(items)

// Reducing an Array

const nums3 = [1, -1, 2, 3]

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = nums3.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(sum)

// reduce example
const people = [
  { name: "Bailey", age: 37 },
  { name: "Nicky", age: 47 },
  { name: "Kyoshi", age: 27 },
  { name: "Azula", age: 57 },
]

const oldestAge = people.reduce((accumulator, currentValue) => {
  if (currentValue.age > accumulator) {
    return currentValue.age
  }
  return accumulator
}, 0)
console.log("Reduce exercise:", oldestAge)

// Exercise 1: Array from Range

let arrayFromRange = (min, max) => {
  const output = []
  for (let i = min; i <= max; i++) output.push(i)
  return output
}

const numbers = arrayFromRange(-10, 4)

console.log(numbers)

// Exercise 2: Includes

let includes = (array, searchElement) => {
  for (let element of array) {
    if (element === searchElement) {
      return true
    }
    return false
  }
}

const moreNumbers = [1, 2, 3, 4]

console.log(includes(moreNumbers, 1))

// Exercise 3: Except

let except = (array, excluded) => {
  const output = []
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element)
    }
  }
  return output
}

const output = except(moreNumbers, [1, 2])
console.log(output)

// Exercise 4: Moving an Element

let move = (array, index, offset) => {
  const output = [...array]
  const element = output.splice(index, 1)[0]
  output.splice(index + offset, 0, element)
  return output
}

const output2 = move(moreNumbers, 0, 2)
console.log(output2)

// Exercise 5: Count Occurences

const countOccurances = (array, searchElement) => {
  let count = 0
  for (let element of array) {
    if (element === searchElement) {
      count++
    }
  }
  return count
}

const count = countOccurances(moreNumbers, 1)
console.log(count)

// Exercise 6:

// easy implementation

// let getMax = (array) => {
//   let highest = array.sort().pop()
//   return highest
// }

// reduce method!
const getMax = (array) =>
  array.reduce((accumulator, currentValue) => {
    if (currentValue > accumulator) {
      return currentValue
    }
    return accumulator
  }, 0)

const max = getMax(moreNumbers)
console.log(max)

// Exercise 7: Movies

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
]

const movieTitles = (array) => {
  let movies = array.filter((movie) => {
    if (movie.year === 2018 && movie.rating >= 4) return movie
  })
  let titles = movies
    .map((movie) => movie.title)
    .sort()
    .reverse()
  return titles
}

const newMovies = movieTitles(movies)
console.log(newMovies)
