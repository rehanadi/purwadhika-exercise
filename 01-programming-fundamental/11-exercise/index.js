// 1. Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majority(arr = []) {
  return arr.filter(i => arr.filter(x => x === i).length > arr.length / 2)[0] || 0

  /*
  let result = []
  
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter(item => item === arr[i]).length

    const exist = result.find(item => item.element === arr[i])

    if (!exist) {
      result.push({
        element: arr[i],
        count: count
      })
    }
  }

  const element = result.sort((a, b) => b.count - a.count)[0].element

  return element
  */
}

let nums = [3, 2, 3, 4, 4, 4, 4]

console.log(majority(nums))

// 2. Create a function to convert roman numeral to integer.

function romanToNumber(str) {
  const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0

  for (let i = 0; i < str.length; i++) {
    const currentNumeral = romanNumerals[str[i]]
    const nextNumeral = romanNumerals[str[i + 1]]

    // console.log(i, str[i], currentNumeral, nextNumeral)

    if (nextNumeral && currentNumeral < nextNumeral) {
        result -= currentNumeral
    } else {
        result += currentNumeral
    }

    // console.log(result)
  }

  return result
}

let str = 'MCMXCIV'

console.log(romanToNumber(str))

// 3. Given an integer numRows, return the ﬁrst numRows of Pascal's triangle.

function pascalTriangle(numRows = 1) {
  let result = []

  for (let i = 0; i <= numRows; i++) {
    const temp = []

    for (let j = 0; j < i; j++) {
      let item = 1

      if (j === 0 || j === i - 1) {
        item = 1
      } else {
        const prevItem = result[i - 1]
        item = prevItem[j - 1] + prevItem[j]
      }

      temp.push(item)
    }

    result.push(temp)
  }

  result.shift()

  return result
}

let numRows = 7

console.log(pascalTriangle(numRows))

// 4. You are given an array prices where prices[i] is the price of a given stock on the i day.

function maximumProfit(prices = []) {
  let maximumProfit = 0

  for (let i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i]
  
      if (profit > maximumProfit) {
        maximumProfit = profit
      }
    }
  }

  return maximumProfit
}

const prices = [7, 1, 5, 3, 6, 4]

console.log(maximumProfit(prices))
