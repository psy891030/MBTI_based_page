import { results, mbtis } from "./data.js"

//http://127.0.0.1:5500/results.html?medi=esfj
//medi 가 가지고 있는 갑을 가져오는 방법
const medi = new URLSearchParams(location.search).get('medi')
console.log(medi)
const result = results[mbtis[medi]]

console.log(result)

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.result .box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
characterEl.src = result.character

boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})

// jobEls.forEach(function (jobEl, index) {
//   jobEl.innerHTML = result.jobs[index]
// })

lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg