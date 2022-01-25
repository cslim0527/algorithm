const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim()

solution(input)

function solution(n) {
  const arrays = []
  const nums = []
  for (let i = n; i >= 1; i--) {
    const temp_arr = [n]
    temp_arr.push(i)

    while(true) {
      const prevprev = temp_arr[temp_arr.length - 2]
      const prev = temp_arr[temp_arr.length - 1]
      const next = prevprev - prev
      if (next >= 0) {
        temp_arr.push(next)
      } else {
        arrays.push(temp_arr)
        nums.push(temp_arr.length)
        break
      }
    }
  }

  const target_idx = nums.findIndex(n => n === Math.max(...nums))
  console.log(arrays[target_idx].length)
  console.log(arrays[target_idx].join(' '))
}