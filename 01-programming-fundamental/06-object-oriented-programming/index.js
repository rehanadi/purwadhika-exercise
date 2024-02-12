// 1. Create a function to calculate array of student data

function calculateStudents(students = []) {
  function getAgeNumber(birthDate) {
    return Math.floor((new Date() - new Date(birthDate)) / (24 * 3600 * 1000 * 365))
  }
  
  // Convert age from date to number
  students.map(student => student.age = getAgeNumber(student.age))

  return {
    score: {
      highest: students.sort((a, b) => b.score - a.score)[0].score,
      lowest: students.sort((a, b) => a.score - b.score)[0].score,
      average: Math.floor(students.reduce((acc, student) => acc + student.score, 0) / students.length)
    }, 
    age: {
      highest: students.sort((a, b) => b.age - a.age)[0].age,
      lowest: students.sort((a, b) => a.age - b.age)[0].age,
      average: Math.floor(students.reduce((acc, student) => acc + student.age, 0) / students.length)
    }
  } 
}

const students = [{
  name: 'Rehan',
  email: 'rehan@gmail.com',
  age: '1994-01-01',
  score: 90
}, {
  name: 'Adi',
  email: 'adi@gmail.com',
  age: '1997-01-01',
  score: 75
}, {
  name: 'Purwana',
  email: 'purwana@gmail.com',
  age: '2001-01-01',
  score: 80
}]

console.log(calculateStudents(students))

// 2. Create a program to create transaction

class Product {
  name
  price

  constructor() {
    this.name
    this.price
  }
}

class Transaction extends Product {
  products
  total
  qty
  
  constructor() {
    super()
    this.products = []
    this.total = 0
    this.qty = 0
  }

  addToCart() {
    this.products.push({
      name: this.name,
      price: this.price,
      qty: this.qty
    })

    this.total += this.price * this.qty
  }

  showTotal() {
    return this.total
  }

  checkout() {
    return {
      total: this.showTotal(),
      products: this.products
    }
  }
}

const transaction = new Transaction()

transaction.name = 'Adidas'
transaction.price = 100000
transaction.qty = 2
transaction.addToCart()

transaction.name = 'Nike'
transaction.price = 200000
transaction.qty = 3
transaction.addToCart()

transaction.name = 'Rebook'
transaction.price = 300000
transaction.qty = 4
transaction.addToCart()

console.log(transaction.showTotal())
console.log(transaction.checkout()) 
