// # rectangle
const length = 5
const width = 3

// find area of rectangle
console.log(length * width)

// find perimeter of rectangle
console.log((length + width) * 2)

// # circle
const radius = 5
const pi = Math.PI

// find diameter of circle
console.log(radius * 2)

// find circumference of circle
console.log(2 * pi * radius)

// find area of circle
console.log(pi * Math.pow(radius, 2))

// # triangle
const a = 80
const b = 65

// find angle of triangle
// console.log(Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2)))
console.log(180 - (a + b))

// # date
const date1 = new Date('2022-01-20')
const date2 = new Date('2022-01-22')

// find difference between days
console.log(Math.abs(date2 - date1) / (24 * 3600 * 1000))

const totalDays = 400
const daysInYear = 365
const daysInMonth = 30

// convert days to years, months and days
const years = (totalDays / daysInYear).toFixed()
const months = ((totalDays % daysInYear) / daysInMonth).toFixed()
// const days = totalDays - (years * daysInYear) - (months * daysInMonth)
const days = ((totalDays % daysInYear) % daysInMonth).toFixed()

console.log(`${years} years, ${months} months, ${days} days`)
