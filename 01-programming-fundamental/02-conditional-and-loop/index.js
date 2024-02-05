/*
1. Convert celcius to fahreinheit
*/
let celcius = 60
let fahreinheit = (celcius * 9 / 5) + 32
console.log(fahreinheit)

/*
2. Check if number is even or odd
*/
let n = 2
if (n % 2 == 0) {
  console.log('Even number')
} else {
  console.log('Odd number')
}

/*
3. Check if number is prime
*/
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

/*
4. Find summary of the number
*/
num = 5
let sum = 0

for (let i = 1; i <= num; i++) {
  sum += i
}

console.log(sum)

/*
5. Find factorial of the number
*/
num = 6
let factorial = 1

for (let i = 1; i <= num; i++) {
  factorial *= i
}

console.log(factorial)

/*
6. Find first N fibonacci numbers
*/
num = 10
let temp1 = 0
let temp2 = 1
let calc = 0

for (let i = 2; i <= num; i++) {
  calc = temp1 + temp2
  temp1 = temp2
  temp2 = result
}

console.log(temp2)
