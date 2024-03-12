const { Orders } = require('./process')

let orders = new Orders(["nasi goreng","mie goreng", "ayam mentega", "capcay kuah"])

orders.runQueue()
