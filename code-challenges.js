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

// const (tempsArray)  = [42, 350, 212]
// let boilingPoint = "212"

//     for (let boilingPoint = 212; boilingPoint < tempsArray.lentgh; i++) {

//       if tempsArray >= boilingPoint return `Temp is above boiling point`}{ 
//       if else (const) (tempsArray === boilingPoint) return `Temp is at boing point`}{
//       if else (const) tempsArray <= boingPoint return `Temp is below boiling point`}{
//       else  return `Something went wrong`} 
      
//       console.log(tempsArray.lentgh)

// Pseudo code:

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
    // Expected output: "212 is at boiling point"

    // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:


const padres1984WorldSeriesRuns = [`2`, `5`, `2`, `2`, `4`]
const padres1998WorldSeriesRuns = [`6`, `3`, `5`, `3`]

const combinedArray = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns);

    //  console.log(combinedArray.length)

    //  --->9 
    // I've decided to go with the concat method because I do not fully understand how to execute a join just yet. Also .length will produce the number of items.

    // Expected output: 9

    // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

    // Pseudo code:

    // const currentCohort = "Bravo 2023"

const currentCohort = [Bravo, 2023]

currentCohort.reverse(currentCohort)

    console.log(currentCohort)

    // Expected output: "3202 ovarB"

    // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

    // Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
    // const givenValueOne = 42

    // let givenValueOne = 42
    // let wanted = 2

    // Let matchOne = myNumbers.find(item == 42) ;{
    //     if (givenValue1 === item); return `${7}`
    // }

    // console.log(`last index number is 2`)

    // Expected output: 7

const givenValue2 = 10
    // Expected output: 8

    // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

    // Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
    // Expected output: [82, 80, 79, 77, 76, 73, 72]

// sanDiegoSummerTemperatures.sort(compareFunction);
// console.log(sanDiegoSummerTemperatures)

// {
    
// Function compareFunction(a, b)
    // 1. < 0 ... a comes first
    // 2. 0 ... nothing will change
    // 3. > 0 ... b comes first


// return a - b; 
// }

// let(sanDiegoSummerTemperatures.sort)
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// sanDiegoWinterTemperatures.sort(compareFunction);
// console.log(sanDiegoWinterTemperatures)
{
    
// Function compareFunction(a, b)
    // 1. < 0 ... a comes first
    // 2. 0 ... nothing will change
    // 3. > 0 ... b comes first


return a - b; 

}
