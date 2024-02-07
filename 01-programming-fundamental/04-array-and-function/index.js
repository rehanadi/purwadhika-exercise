// 1. Create a function that can create a triangle pattern according to the height we provide
function triangleHeight(height = 0) {
  let number = 1
  let result = ''
  
  for (let i = 1; i <= height; i++) {
    result += i === 1 ? '' : '\n'
    
    for (let j = 1; j <= i; j++) {
      result += (j === 1 ? '' : ' ') + String(number).padStart(2, '0')
      number++
    }
  }

  return result
}

console.log(triangleHeight(5))

// 2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz"
function fizzBuzz(number = 0) {
  let result = ''
  
  for (let i = 1; i <= number; i++) {
    result += `${i === 1 ? '' : ', '}${i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : (i % 3 === 0 ? 'Fizz' : (i % 5 === 0 ? 'Buzz' : i))}`
  }

  return result
}

console.log(fizzBuzz(15))

// 3. Create a function to calculate Body Mass Index (BMI)
function calculateBMI(weight = 1, height = 1) {
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1)
  let result = ''

  if (bmi < 18.5) {
    result = 'less weight'
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result = 'ideal'
  } else if (bmi >= 25 && bmi <= 29.9) {
    result = 'overweight'
  } else if (bmi >= 30 && bmi <= 39.9) {
    result = 'very overweight'
  } else {
    result = 'obesity'
  }

  return result
}

let weightInKg = 72
let heightInCm = 170

console.log(calculateBMI(weightInKg, heightInCm))

// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
function removeOddNumbers(numbers = []) {
  return numbers.filter(number => number % 2 === 0)
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 5. Write a function to split a string and convert it into an array of words
function splitString(text = '') {
  return text.split(' ')
}

console.log(splitString('Hello World'))
