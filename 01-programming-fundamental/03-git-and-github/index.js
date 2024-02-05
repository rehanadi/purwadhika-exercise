// 1. Write a code to display the multiplication table of a given integer
let num = 9
let msg = ''

for (let i = 1; i <= num; i++) {
  msg += `${i === 1 ? '' : ', '}${num} x ${i}`
}

console.log(msg)

// 2. Write a code to check whether a string is a palindrome or not
let str = 'katak'
let strReserve = str.split('').reverse().join('')

console.log(str === strReserve ? 'palindrome' : 'not palindrome')

// 3. Write a code to convert centimeter to kilometer
let cm = 100000
let km = cm / 100000

console.log(`${km} km`)

// 4. Write a code to format number as currency (IDR)
let amount = 1000
let formatAmount = amount.toLocaleString('in-ID', {
  style: 'currency',
  currency: 'IDR'
})

console.log(formatAmount)

// 5. Write a code to remove the ﬁrst occurrence of a given “search string” from a string
let string = 'Hello world'
let src = 'ell'
let result = string.replace(src, '')

console.log(result)

// 6. Write a code to capitalize the ﬁrst letter of each word in a string
let uncapitalize = 'hello world'
let split = uncapitalize.split(' ')

for (let i = 0; i < split.length; i++) {
  split[i] = split[i].slice(0, 1).toUpperCase() + split[i].slice(1)
}

let capitalize = split.join(' ')
console.log(capitalize)

// 7. Write a code to reverse a string
let unreserve = 'hello'
let reserve = str.split('').reverse().join('')

console.log(reserve)

// 8. Write a code to swap the case of each character from string
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

// 9. Write a code to ﬁnd the largest of two given integers
let num1 = 42
let num2 = 27
let largest = num1 > num2 ? num1 : num2

console.log(largest)

// 10. Write a conditional statement to sort three numbers
let numA = 42
let numB = 27
let numC = 18

const nums = [numA, numB, numC].sort()

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}

// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type
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

// 12. Write a code to change every letter a into * from a string of input
const unchangedText = 'An apple a day keeps the doctor away'
let changedText = ''

for (let i = 0; i < unchangedText.length; i++) {
  changedText += unchangedText[i].toLowerCase() === 'a' ? '*' : unchangedText[i]
}

console.log(changedText)
