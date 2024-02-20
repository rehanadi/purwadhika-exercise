// 1. Create a function to convert Excel sheet column title to its corresponding column number.

function convertLettersToNumber(letters = '') {
  const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const mode = alphabet.length - 1
  let number = 0

  for(let i = 0; i < letters.length; i++){
    number = number * mode + alphabet.indexOf(letters[i])
  }

  return number
}

const letter = 'AB'

console.log(convertLettersToNumber(letter))

// 2. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function findNonDuplicate(arr = []) {
  return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item))
}

let nums = [1, 1, 2, 3, 3, 4]

console.log(findNonDuplicate(nums))

// 3. Given two strings s and t, return true if t is an anagram of s, and false otherwise

function anagram(a, b) {
  if (a.length !== b.length) return false

  const str1 = String(a).split('').sort().join('')
  const str2 = String(b).split('').sort().join('')

  return str1 === str2
}

let s = "anagram"
let t = "nagaram"

console.log(anagram(s, t))

// 4. You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbing(num) { 
  let a = 1
  let b = 1

  for (let i = 2; i <= num; i++) {
    let current = a + b
    b = a
    a = current
  }

  return a
}

let number = 2

console.log(climbing(number))
