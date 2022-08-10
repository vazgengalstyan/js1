let mark = document.querySelector('#mark')
let num = document.querySelector('#number')
let num2 = document.querySelector('#number2')
let submit = document.querySelector('#submit')
let text = document.querySelector('#text')


submit.addEventListener("click", function () {
  if (mark.value === '+') {
    text.append(Number(num.value) + Number(num2.value)) 
  }else if (mark.value === '-') {
    text.append(Number(num.value) - Number(num2.value)) 
  }else if (mark.value === '/') {
    text.append(Number(num.value) / Number(num2.value)) 
  }else if (mark.value === '*') {
    text.append(Number(num.value) * Number(num2.value)) 
  }else{
    text.append('error')
  }
})

