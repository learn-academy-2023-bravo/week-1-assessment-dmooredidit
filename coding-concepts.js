// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: indigo will be added to the end of the array
// b)\

// Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 2
// b) Verify and explain: ---> "10" if I'm not mistaken, .length of the index not the actual text.

// --------------------2) What will this log? Error or nothing 

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: Error because there isn't (4) different greetings. it would be differnt it there were at least (3) other greetings 
// b) Verify and explain: ---> 0 there is no other greetings besides the one

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: JavaScript
// b) Verify and explain: ---> Ruby because we called the index to start at 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Saturday Sunday
// b) Verify and explain: ---> weekendDays.toUpperCase is not a function                          

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number, string, boolean, undefined
// b) Verify and explain: ---> Number there was no set end so it called the one and finished its job
