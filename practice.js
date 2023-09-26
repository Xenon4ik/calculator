const resultElement = document.getElementById('result')
const input1=document.getElementById('input_1')
const input2=document.getElementById('input_2')
const button = document.getElementById('submit')
const buttonPlus = document.getElementById('plus')
const buttonMin = document.getElementById('minuse')
const buttonMult = document.getElementById('multiplie')
const buttonDivi = document.getElementById('divided')

let action = '-'

buttonPlus.onclick = function(){
    action='+'

}
buttonMin.onclick = function(){
    action='-'
    
}
buttonMult.onclick = function(){
    action='*'

}
buttonDivi.onclick = function(){
    action='/'
}

button.onclick = function(){
    if (action == '+'){
        resultElement.textContent = Number(input1.value) + Number(input2.value)
    }
    if (action == '-'){
        resultElement.textContent = Number(input1.value) - Number(input2.value)
    }
    if (action == '*'){
        resultElement.textContent = Number(input1.value) * Number(input2.value)
    }
    if (action == '/'){
        resultElement.textContent = Number(input1.value) / Number(input2.value)
     }
}

