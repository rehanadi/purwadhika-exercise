// 1. Find area of rectangle
const length = 5
const width = 3
console.log(length * width)

// 2. Find perimeter of rectangle
console.log((length + width) * 2)

// 3. Find diameter of circle
const radius = 5
const pi = Math.PI
console.log(radius * 2)

// Find circumference of circle
console.log(2 * pi * radius)

// Find area of circle
console.log(pi * Math.pow(radius, 2))

// 4. Find angle of triangle
const a = 80
const b = 65
console.log(180 - (a + b))

// 5. Find difference between days
const date1 = new Date('2022-01-20')
const date2 = new Date('2022-01-22')

console.log(Math.abs(date2 - date1) / (24 * 3600 * 1000))

// 6. Convert days to years, months and days
const totalDays = 400
const daysInYear = 365
const daysInMonth = 30

const years = (totalDays / daysInYear).toFixed()
const months = ((totalDays % daysInYear) / daysInMonth).toFixed()
const days = ((totalDays % daysInYear) % daysInMonth).toFixed()

console.log(`${years} years, ${months} months, ${days} days`)
