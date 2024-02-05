// 1. Write a code to swap the case of each character from string
let text = 'The QuiCk BrOwN Fox'
let swap = ''

for (let i = 0; i < text.length; i++) {
  if (text[i] === text[i].toLowerCase()) {
    swap += text[i].toUpperCase()
  } else {
    swap += text[i].toLowerCase()
  }
}

console.log(swap)

// 2. Write a code to ﬁnd the largest of two given integers
let num1 = 42
let num2 = 27
let largest = num1 > num2 ? num1 : num2

console.log(largest)

// 3. Write a conditional statement to sort three numbers
let numA = 42
let numB = 27
let numC = 18

const nums = [numA, numB, numC].sort()

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}

// 4. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
let data = 'hello'

switch (typeof data) {
  case 'string':
    console.log(1)
    break;
  case 'number':
    console.log(2)
    break;
  default:
    console.log(3)
}

// 5. Write a code to change every letter a into * from a string of input
const unchangedText = 'An apple a day keeps the doctor away'
let changedText = ''

for (let i = 0; i < unchangedText.length; i++) {
  changedText += unchangedText[i].toLowerCase() === 'a' ? '*' : unchangedText[i]
}

console.log(changedText)
