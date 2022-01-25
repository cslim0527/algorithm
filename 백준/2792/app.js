const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

solution(input)

function solution(input) {
  const answer = []
  const people = input[0].split(' ')[0]
  const color_length = input[0].split(' ')[1]
  input.shift()
  const colors = input.map(color => Number(color)).sort()
  const max = colors[colors.length-1]
  const jealousy = Array.from({length: max}, (_, idx) => idx + 1)

  let left = jealousy[0]
  let right = jealousy[jealousy.length]

  while(left <= right) {
    let mid = jealousy[Math.floor(jealousy.length/2)]

    let total = 0
    for (let i = 0; i < colors.length; i++) {
      const get_min = colors[i] % mid
      const min_people = get_min === 0 ? get_min : get_min + 1
      total += min_people
    }

    if (total < people.length) {
      mid--
      answer.push(mid)
    } else {
      mid++
    }
  }


}