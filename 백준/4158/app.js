const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const [n, m] = input.shift().split(' ').map(Number)
input.pop()

solution(input.splice(0, n).map(s => Number(s)), input.splice(0, m).map(s => Number(s)))

function solution(SG, SY) {
  console.log(SG, SY)
  let sg_idx = 0
  let sy_idx = 0
  let answer = 0

  while (true) {
    if (sg_idx === SG.length || sy_idx === SY.length) {
      break
    }

    if (SG[sg_idx] < SY[sy_idx]) {
      sg_idx++
    }
    else if (SG[sg_idx] > SY[sy_idx]) {
      sy_idx++
    } else {
      sg_idx++
      sy_idx++
      answer++
    }
  }

  console.log(answer)
}

// function solution(SG, SY) {
//   let idx = 0
//   let answer = []
//
//   let lt = 0
//   let rt = SG.length - 1
//
//     while(SG.length && SY.length) {
//       console.log('start while')
//
//       let mid = Math.floor((lt + rt) / 2)
//       if (SG[mid] === SY[idx]) {
//         answer.push(SY[idx])
//         SG.splice(mid, 1)
//         SY.splice(idx, 1)
//         idx++
//         break
//       }
//
//       if (SG[mid] > SY[idx]) {
//         rt = mid - 1
//       }
//       else {
//         lt = mid + 1
//       }
//     }
//
//   console.log('답', answer)
// }

/*
  [이분탐색 기본형]
  임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음
  N개의 수중 한개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성 하세요.
  단, 중복값은 존재하지 않습니다.

  첫 줄에 정렬 후 M의 값의 위치 번호를 출력 한다.

  left point variable
  right point variable
  mid point variable = Math.floor((left + right) / 2)
 */

// function practice(target, arr) {
//   let answer
//
//   // 정렬
//   arr.sort((a, b) => a - b)
//
//   let lt = 0
//   let rt = arr.length - 1
//
//   while(lt <= rt) {
//     let mid = Math.floor((lt + rt) / 2)
//     if (arr[mid] === target) {
//       answer = mid + 1 // 찾았을때 탐색 횟수
//       break
//     }
//
//     else if (arr[mid] > target) {
//       rt = mid - 1
//     }
//     else {
//       lt = mid + 1
//     }
//   }
//
//   console.log(answer)
// }
// const arr = [23, 87, 65, 12, 57, 32, 99, 81]
// practice(32, arr)