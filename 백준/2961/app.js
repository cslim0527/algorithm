const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\r')

solution(input.shift(), input)

function solution(N, arrays) {
  const result = []
  const ingredients = arrays.map(arr => arr.replace('\n', '').split(' ').map(Number))

  for (let i = 0; i < N; i++) {
    let perfection = 0

    // 한가지 재료만 비교할때
    if (i === 0) {
      const S = ingredients[i][0]
      const B = ingredients[i][1]
      perfection = Math.abs(S - B)
      
    // 두가지 이상 재료를 비교 할 때
    } else {
      for (let j = 0; j < N; j++) {
        let S = 0
        let B = 0
        for (let k = j; k < i + 1; k++) {
          S *= ingredients[k][0]
          B += ingredients[k][1]
        }

        perfection = Math.abs(S - B)
      }

    }
    

    result.push(perfection)
  }

  console.log(result)
}

