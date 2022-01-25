const id_list = ["muzi", "frodo", "apeach", "neo"] // 이용자 ID
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"] // 각 이용자가 신고한 이용자의 ID
const k = 2

function solution(id_list, report, k) {
  let data = {}

  report.forEach(item => {
    const key = item.split(' ')[1]
    const value = item.split(' ')[0]
    if (data[key]) {
      data[key].push(value)
    } else {
      data[key] = [value]
    }
  })

  const deduplication = Object.keys(data).map(key =>  [...new Set(data[key])])

  const answer = id_list.map(user => {
    let count = 0
    deduplication.forEach(singoja => {
      const hasName = singoja.includes(user)
      if (hasName && singoja.length >= k) {
        count++
      }
    })
    return count
  })

  return answer
}

solution(id_list, report, k)