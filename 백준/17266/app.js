const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
// 문제를 Number 형태로 변환하는게 뭐엿지?? -> 교헌님이 했던거 다시 물어보기

solution(input)

function solution(input) {
  const bridge = input[0] * 1
  const lamps = input[1] * 1
  const positions = input[2].split(' ').map(n => n * 1)
  console.log(bridge, lamps, positions)
//  설치된 가로등의 빛의 범위가 bridge의 길이보다 같거나 커야한다.

}