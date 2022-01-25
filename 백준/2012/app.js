const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

solution(input)

function solution(n) {
  n.shift()
  const answer = n.sort((a, b) => a - b).reduce((acc, cur, idx) => {
    const rank = idx + 1
    const my = Number(cur)
    return acc += Math.abs(my - rank)
  }, 0)

  console.log(answer)
}
