// ARRAYS

// Adding Elements

const numbers = [3, 4]

// End

numbers.push(5, 6)
console.log(numbers)

// Beginning

numbers.unshift(1, 2)
console.log(numbers)

// Middle

numbers.splice(2, 0, "a", "b")
console.log(numbers)

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
