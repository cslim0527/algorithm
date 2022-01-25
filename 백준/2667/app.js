const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')

const N = input.shift()
const arr = input.map(inner => inner.split('').filter(n => n !== '\r').map(s => Number(s)))

solution(N, arr)

function solution(N, arr) {
  let cnt = []
  let home = 1

  // 아래, 위, 좌, 우
  const dx = [0, 0, -1, 1]
  const dy = [-1, 1, 0, 0]

  function DFS(x, y) {
      arr[x][y] = 0
      for (let k = 0; k < 4; k++) {
        let nx = dx[k] + x
        let ny = dy[k] + y
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && arr[nx][ny] === 1) {
          home += 1;
          DFS(nx, ny)
        }
      }
      return null
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 1) {
        DFS(i, j)
        cnt.push(home)
        home = 1
      }
    }
  }

  cnt.sort((a, b) => a - b)

  const answer = [cnt.length, ...cnt]
  console.log(answer.join('\n'))
}
