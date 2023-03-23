import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0  //현재 질문 번호가 몇번인지 카운트용
let medicine = ''   //최종 결과를 담는 변수

function renderQuestion() { //질문 출력하는 함수
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number //number 속성에 innerHTML을 쓰면 HTML 속성을 더해줄 수 있어
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) { //다음 질문으로 넘어가는 함수, 결과를 넘어가기 전에 저장해줄꺼야
  if(currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  medicine = medicine + question.choices[choiceNumber].value

  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage() { //마지막 결과 데이터 보여주는 화면
  //페이지 이동 방법 : location.herf뒤에 주소를 넣너주면 됨
  location.href = '/results.html?medi=' + medicine  //쿼리 스트링 방식
}

choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})

renderQuestion()