// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
// Psuedo previous work
                
// const boilingPoint =  "212"
// const numsArray = "42", "350", "212"

// for (let boilingPoint = "212"; boilingPoint < numsArray; i++) {
//   if (numsArray >= boilingPoint) {
//     return `42 is below boing point`
//   }
//   if (numsArray === boilingPoint) {
//     return `350 is at boinling point`
//   }
//   if  (numsArray <= boilingPoint) {
//     return `212 is above boinling point`
//   }
//   else {
//     return `something went wrong`
//   }
// }
// const tempOne = 42

// const tempTwo = 350

// const tempThree = 212

// console.log(numsArray) 
 //output ---> nothing happened. it just logged blank. No errors but no output either. I worked this one issue for about 7 hours. and could not figure out why it just would not log anything not even an error. 
    // week-1-assessment-dmooredidit git:(week-1-assessment-dm) ✗ node code-challenges.js  <-----
    // ➜  week-1-assessment-dmooredidit git:(week-1-assessment-dm) ✗ node code-challenges.js  <-----
    // ➜  week-1-assessment-dmooredidit git:(week-1-assessment-dm) ✗ node code-challenges.js  <-----
    // ➜  week-1-assessment-dmooredidit git:(week-1-assessment-dm) ✗ <-----

// 

    // Pseudo code: 
// creat function named determine that takes in number and determine if the that number is below, at, or above boiling point using conditional statements. 
// input: number
// output: string that states if given number is below at or above boiling point
// example: 
// input 42 
// output: "42 is below boiling point"
// process: 
// set up conditions that will return statements possible method conditional statements
// these conditions will be comparing given number to boiling point. boiling point is 212
// return given number in a string that states is above at or below boiling point

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
    // Expected output: "212 is at boiling point"

    const determine = (number) => {
        if(number === 212){
            return `${number} is at boiling point`
        } else if(number > 212){
            return `${number} is above boiling point`
        } else if(number < 212){
            return `${number} is below boiling point`
        }
    }
   console.log(determine(temperature1))
   console.log(determine(temperature2))
   console.log(determine(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// combine 2 arrays using .concat and return length 
// input: 2 arrays
// output: 1 array
// process: create new const called bothSeriesArray join the two arrays using .concat the console.log combined array.length. using .lentgh returns the number length of whatever your calling for the length on.  


// const padres1984WorldSeriesRuns = [`2`, `5`, `2`, `2`, `4`]
// const padres1998WorldSeriesRuns = [`6`, `3`, `5`, `3`]

// const bothSeriesArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

// console.log(bothSeriesArray.length)

    // Output ----> 9 (I had to console.log on an external practice page because my console.log is not working on my machine, but it assured me that I executed the code correctly)
    // Explaination: I would go with the .concat method then just consolog the new array (bothSeries) .lenght because, if im not mistaken, join will merge both arrays to creat new number altogether.

    // Expected output: 9


    // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

    // Pseudo code: 
    // split Bravo 2023 to convert into a string ""
    //Reverse "Bravo 2023" to read "3202 ovarB"
    // join

const currentCohort = "Bravo 2023" 
// change string into an array and stored in a variable because .split is an accesssor
    // let cohortArray = currentCohort.split("")

//  reverse order of values in the array variable not needed because .reverse is a mutator 
    // console.log(cohortArray.reverse())
// changing array into a string by .join values into a stringbased on location of spacing
    // console.log(cohortArray.join(""))

// refactored 
console.log(currentCohort.split("").reverse().join(""))



    // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:take in array use sort to sort temps largest to smallest
    // input:  arrays
    // output:  string
    // preocess creat function to take arrays. consolelog my array(index) create let statement
// output ----> .reverse is not a function all my notes said that I could do it the way I was doing it but it was not console logging. I kept getting reverse is not a function.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
    const givenValueOne = 42

    for (let i = 0; i<myNumbers.length; i++) {
    
    console.log(givenValueOne[i])
    }

//----> undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
//  maybe i need one on one instructions to be able to break down these problems and get my process down so I know exactly what is going on with this code.

    // let givenValueOne = 42
    // let wanted = 2
    

    // Expected output: 7

    const givenValue2 = 10
    // Expected output: 8

    // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

    // Pseudo code: take in array use sort to sort temps largest to smallest
    // input: 2 arrays
    // output: 1 new array
    // preocess creat function to take in and sort arrays. using .sort to place all temps in order. use compare statements to compare temps against one another. 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
    // Expected output: [82, 80, 79, 77, 76, 73, 72]


// console.log(sanDiegoSummerTemperatures)



const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

    
