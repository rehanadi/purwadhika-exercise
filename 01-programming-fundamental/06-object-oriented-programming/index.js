// 1. Create a function to calculate array of student data

function calculateStudents(students = []) {
  function getAge(birthDate) {
    return Math.round((new Date() - new Date(birthDate)) / (24 * 3600 * 1000 * 365))
  }
  
  // Convert age from date to number
  students.map(student => student.age = getAge(student.age))

  return {
    score: {
      highest: students.sort((a, b) => b.score - a.score)[0].score,
      lowest: students.sort((a, b) => a.score - b.score)[0].score,
      average: Math.round(students.reduce((acc, student) => acc + student.score, 0) / students.length)
    }, 
    age: {
      highest: students.sort((a, b) => b.age - a.age)[0].age,
      lowest: students.sort((a, b) => a.age - b.age)[0].age,
      average: Math.round(students.reduce((acc, student) => acc + student.age, 0) / students.length)
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
  age: '1995-01-01',
  score: 75
}, {
  name: 'Rehan',
  email: 'rehan@gmail.com',
  age: '1996-01-01',
  score: 80
}]

console.log(calculateStudents(students))

// 2. Create a program to create transaction

class Product {
  name
  price

  setProduct(name, price) {
    this.name = name
    this.price = price
  }
}

class Transaction extends Product {
  total
  qty
  
  constructor() {
    super()
  }

  addToCart(name, price, qty) {
    this.setProduct(name, price)
    this.qty = qty
    this.total = this.price * this.qty
  }

  showTotal() {
    return this.total
  }

  checkout() {
    return {
      name: this.name,
      price: this.price,
      qty: this.qty,
      total: this.total
    }
  }
}

const transaction = new Transaction()

transaction.addToCart('Adidas', 10000, 2)
console.log(transaction.showTotal())
console.log(transaction.checkout())
