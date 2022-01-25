const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const N = input.shift()
solution(N, input)

// FIXME: 원본 배열을 사용하지 않고 다시 풀어보기
function solution(N, arrays) {
  const board = []
  const col_result = []
  const row_result = []
  
  // 2차원 배열 변환
  for (let i = 0; i < N; i++) {
    board[i] = arrays[i].replace('\r', '').split('')
  }

  // 가로 탐색
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      const current = board[i][j - 1]
      const next = board[i][j]

      const temp_a = board[i][j]
      const temp_b = board[i][j - 1]

      if (current !== next) {
        board[i][j - 1] = temp_a
        board[i][j] = temp_b

        for (let row = 0; row < N; row++) {
          let col = 1
          let cnt = 2

          while(true) {
            // 범위를 넘어가면 종료
            if (!col) {
              break
            }

            const current = board[row][col - 1]
            const next = board[row][col]

            if (current === next) { // 현재 구슬 색과 다음 구슬 색이 같을 때 그 다음 경우 탐색
              col++
              cnt++
            } else { // 현재 구슬 색과 다음 구슬 색이 같지 않을때 길이 저장 후 종료
              if (col === 1) {
                col_result.push(1)
              } else {
                col_result.push(cnt)
              }
              break
            }
          }
        }
      }
    }
  }

  // 세로 탐색
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      const current = board[j - 1][i]
      const next = board[j][i]

      const temp_a = board[i][j]
      const temp_b = board[i][j - 1]

      if (current !== next) {
        board[j - 1][i] = temp_a
        board[j][i] = temp_b

        for (let col = 0; col < N; col++) {
          let row = 1
          let cnt = 2

          while(true) {
            // 범위를 넘어가면 종료
            if (!row) {
              break
            }

            const current = board[row - 1][col]
            const next = board[row][col]

            if (current === next) { // 현재 구슬 색과 다음 구슬 색이 같을 때 그 다음 경우 탐색
              row++
              cnt++
            } else { // 현재 구슬 색과 다음 구슬 색이 같지 않을때 길이 저장 후 종료
              if (row === 1) {
                row_result.push(1)
              } else {
                row_result.push(cnt)
              }
              break
            }
          }
        }
      }
    }
  }

  const best_case = Math.max(Math.max(...col_result), Math.max(...row_result))
  console.log(best_case)
}

