// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).

function lowest(numbers = []) {
  let result = numbers[0]

  for (number of numbers) {
    if (result > number) result = number
  }

  return result
}

function highest(numbers = []) {
  let result = numbers[0]

  for (number of numbers) {
    if (result < number) result = number
  }

  return result
}

function average(numbers = []) {
  const sum = numbers.reduce((acc, value) => acc + value, 0)
  return sum / numbers.length
}

function lowestSort(numbers = []) {
  return numbers.sort((a, b) => a - b)[0]
}

function highestSort(numbers = []) {
  return numbers.sort((a, b) => b - a)[0]
}

let numbers1 = [12, 5, 23, 18, 4, 45, 32]

console.log(lowest(numbers1))
console.log(highest(numbers1))
console.log(average(numbers1))
console.log(lowestSort(numbers1))
console.log(highestSort(numbers1))

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'

function concatWords(words = []) {
  return [ ...words.slice(0, words.length - 1), 'and ' + words[words.length - 1] ].join(', ')
}

let fruits = ['apple', 'banana', 'cherry', 'date']

console.log(concatWords(fruits))

// 3. Write a function to split a string and convert it into an array of words

function splitWords(words = []) {
  return words.split(' ')
}

let text1 = 'Hello World'

console.log(splitWords(text1))

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length

function calculateNumbers(numbers1 = [], numbers2 = []) {
  if (numbers1.length !== numbers2.length) return []
  const result = numbers1.map((number1, index) => number1 + numbers2[index])
  return result
}

let num1 = [1, 2, 3]
let num2 = [3, 2, 4]

console.log(calculateNumbers(num1, num2))

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array

function addElement(arr = [], newValue) {
  return arr.indexOf(newValue) === -1 ? [...arr, newValue] : arr
}

let numbers2 = [1, 2, 3, 4]
let newNumber = 4

console.log(addElement(numbers2, newNumber))

newNumber = 7

console.log(addElement(numbers2, newNumber))

// 6. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function removeOddNumbers(numbers = []) {
  return numbers.filter(number => number % 2 === 0)
}

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(removeOddNumbers(numbers3))

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements)

function limitNumbers(max = 1, ...numbers) {
  return numbers.slice(0, max)
}

let maxSize = 5

console.log(limitNumbers(maxSize, 5, 10, 24, 3, 6, 7, 8))

// 8. Write a function that will combine 2 given array into one array

function combineArrays(arr1 = [], arr2 = []) {
  return arr1.concat(arr2)
}

let numbers4 = [1, 2, 3]
let numbers5 = [4, 5, 6]

console.log(combineArrays(numbers4, numbers5))

// 9. Write a function to find duplicate values in an array

function findDuplicate(arr = []) {
  const duplicate = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item))
  const unique = [...new Set(duplicate)]
  
  return unique
}

let numbers6 = [1, 2, 2, 2, 3, 3, 4, 5, 5]

console.log(findDuplicate(numbers6))

// 10. Write a function to find the difference in 2 given array

function findDifference(arr1 = [], arr2 = []) {
  let difference1 = arr1.filter(item => !arr2.includes(item))
  let difference2 = arr2.filter(item => !arr1.includes(item))
  let differenceAll = difference1.concat(difference2)
  
  return differenceAll
}

let numbers7 = [1, 2, 3, 4, 5]
let numbers8 = [3, 4, 5, 6, 7]

console.log(findDifference(numbers7, numbers8))

// 11. Based on the array below write a function that will return primitive data types only

function primitive(arr = []) {
  return arr.filter(item => typeof item !== 'object' || item === null)
}

let list = [1, [], undefined, {}, "string", {}, [], null]

console.log(primitive(list))

// 12. Write a function from a given array of numbers and return the second smallest number

function secondSmallest(numbers = []) {
  const sort = numbers.sort((a, b) => a - b)
  return sort[1]
}

let numbers9 = [5, 3, 1, 7, 2, 6]

console.log(secondSmallest(numbers9))

// 13. Write a function from a given array of mixed data types and return the sum of all the number

function sumMixed(arr = []) {
  return arr.reduce((acc, value) => acc + ( !isNaN(value) ? Number(value) : 0 ), 0)
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2]

console.log(sumMixed(mixedArray))

// 14. Write a function from the below array of number that will return sum of duplicate values

function sumDuplicate(numbers = []) {
  const duplicate = numbers.filter(number => {
    return numbers.indexOf(number) !== numbers.lastIndexOf(number)
  })

  const sum = duplicate.reduce((acc, value) => acc + value, 0)
  return sum
}

let numbers10 = [10, 20, 40, 10, 50, 30, 10, 60, 10]

console.log(sumDuplicate(numbers10))

// 15. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor

function game(selection) {
  const answers = ['paper', 'rock', 'scissor']
  const answer = answers[Math.floor(Math.random() * answers.length)]
  const win = (selection === 'paper' && answer === 'rock') ||
              (selection === 'rock' && answer === 'scissor') ||
              (selection === 'scissor' && answer === 'paper')
  const draw = selection === answer

  return ('Answer is ' + answer + ', you ') + (win ? 'win' : (draw ? 'draw' : 'lose'))
}

console.log(game('rock'))
