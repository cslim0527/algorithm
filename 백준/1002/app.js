const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const T = input.shift()

for (let i = 0; i < T; i++) {
  solution(input[i])
}

// Math.sqrt 를 사용하는 경우 출력 초과가 나올 수 있다.
function getDistance(turret_1, turret_2) {
  return Math.pow((turret_1.x - turret_2.x),2) + Math.pow((turret_1.y - turret_2.y),2)
}

function solution(info) {
  const [x1, y1, r1, x2, y2, r2] = info.split(' ').map(s => Number(s))
  let turret_1 = {}
  let turret_2 = {}

  if (r1 > r2) {
    turret_1 = {
      x: x1,
      y: y1,
      r: r1
    }

    turret_2 = {
      x: x2,
      y: y2,
      r: r2
    }
  } else {
    turret_2 = {
      x: x1,
      y: y1,
      r: r1
    }

    turret_1 = {
      x: x2,
      y: y2,
      r: r2
    }
  }

  const sum_r = (turret_1.r + turret_2.r) ** 2
  const sub_r = (turret_1.r - turret_2.r) ** 2
  const d = getDistance(turret_1, turret_2)

  if (sub_r < d && d < sum_r) {
    console.log(2)
  }
  else if ((sub_r === d && d !== 0) || sum_r === d) {
    console.log(1)
  }
  else if (sum_r < d || sub_r > d) {
    console.log(0)
  }
  else if (d === 0) {
    if (turret_1.r === turret_2.r ) {
      console.log(-1)
    } else {
      console.log(0)
    }
  }
}
