// convert celcius to fahreinheit
let celcius = 60
let fahreinheit = (celcius * 9 / 5) + 32
console.log(fahreinheit)

// check if number is even or odd
let n = 2
if (n % 2 == 0) {
  console.log('Even number')
} else {
  console.log('Odd number')
}

// check if number is prime
let num = 3
let prime = true

if (num <= 1) {
  prime = false
} else {
  for (let i = num - 1; i > 1; i--) {
    if ((num / i) % 1 === 0) {
      prime = false
      break
    }
  }
}

console.log(
  prime ? `${num} adalah bilangan prima` : `${num} bukan bilangan prima`
)

// find sum of the number
num = 5
let sum = 0

for (let i = 1; i <= num; i++) {
  sum += i
}

console.log(sum)

// find factorial of the number
num = 6
let factorial = 1

for (let i = 1; i <= num; i++) {
  factorial *= i
}

console.log(factorial)

// find fibonacci
num = 10
let x = 0
let y = 1
let result = 0

for (let i = 2; i <= num; i++) {
  result = x + y
  x = y
  y = result
}

console.log(y)
