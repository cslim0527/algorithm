const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\r').map(str => str.replace('\n', ''))

for (let i = 0; i < input.length; i++) {
  if (input[i].indexOf('-') > -1) {
    return
  }
  solution(input[i], i+1)
}

function solution(str, idx) {
  const queue = []
  let temp = str.split('')
  let count = 0

  if (!str.length) {
    console.log(`${idx}. 0`)
  }
  queue.push(temp.shift())

  while(temp.length) {
    queue.push(temp.shift())

    if (!queue[queue.length - 2]) {
      queue.push(temp.shift())
    }

    const last = queue[queue.length - 2] + queue[queue.length - 1]
    if (last === '{}') {
        queue.pop()
        queue.pop()
    } else if (last === '{{') {
      queue.pop()
      queue.pop()
      count += 1
    } else if (last === '}{') {
      queue.pop()
      queue.pop()
      count += 2
    } else if (last === '}}') {
      queue.pop()
      queue.pop()
      count += 1
    }
  }

  console.log(`${idx}. ${count}`)
}
