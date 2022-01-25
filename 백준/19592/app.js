const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
// 문제를 Number 형태로 변환하는게 뭐엿지?? -> 교헌님이 했던거 다시 물어보기
// https://goodteacher.tistory.com/m/444

const T = input[0]
input.shift()

for (let i = 0; i < T; i++) {
  const info = input[i*2].split(' ')
  const V = input[(i*2) + 1].split(' ')

  solution(info, V)
}


// function solution(info, V) {
//   let answer = []
//   const N = info[0] - 1
//   const X = info[1]
//   const Y = info[2]
//
//   let result = []
//   // X / V[i] === 일반적으로 걸리는 시간
//   for (let i = 0; i < info.length; i++) {
//     const time = X / V[i]
//     result.push(time)
//   }
//
//   // 내림차순 정렬
//   result.sort((a, b) => a - b)
//
//   // console.log('일반적 결과: ', result)
//
//   // 부스터 안쓰고 1등이 가능 할때 === 공동 우승이 없으면서, 내 시간이 1등 일때
//   const is_one_top = result.filter(time => result[0] === time)
//   const my_normal_result =  X / V[N]
//   if (result[0] === my_normal_result && is_one_top.length === 1) {
//     answer.push(0)
//   }
//
//   // 부스터 최대치 썻는데 1등 아닐때
//   const my_max_speed_time =  1 + (X - Y) / V[N]
//   const without_top = result.slice(1)
//   const is_win = without_top.some(time => time <= my_max_speed_time)
//
//   if (is_win) {
//     answer.push(-1)
//
//   }
//
//   // 1 + (X - Z) / V[N] === 부스터 써서 걸리는 시간
//   // 이분탐색
//   let l = 0
//   let r = Y
//   let m = 0
//
//   while (true) {
//     if (l > r) {
//       break;
//     }
//
//     m = (l + r) / 2
//     const boost = 1 + (X - m) / V[N]
//     if (boost >= result[0]) {
//       l = m + 1
//     } else {
//       r = m - 1
//     }
//   }
//
//   answer.push(l)
// }

function solution(info, V) {
  const N = info[0] - 1
  const X = info[1]
  const Y = info[2]
  const result = []
  let answer = null

  // X / V[i] === 일반적으로 걸리는 시간
  for (let i = 0; i < info.length; i++) {
    const time = X / V[i]
    result.push(time)
  }

  // 내림차순 정렬
  result.sort((a, b) => a - b)

  const is_best_length = V.filter(speed => speed >= V[N]).length

  const top = result[0]
  const my_max = 1 + (X - Y) / V[N]
  if (is_best_length === 1) { // 나의 속도가 가장 빠를때 (부스터를 안써도 1등 일때)
    answer = 0
  } else if (my_max >= top) { // 부스터를 최대한 써도 안될때
    answer = -1
  } else {
    // 나머지 경우
    let left = 0
    let right = Y
    let mid = 0

    while (true) {
      if (left > right) {
        break
      }

      mid = Math.floor((left + right) / 2)
      const booster = 1 + (X - mid) / V[N]
      if (booster >= result[0]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    answer = left
  }

  console.log(answer)
}