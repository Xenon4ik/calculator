const resultElement = document.getElementById('result')
const input1=document.getElementById('input_1')
const input2=document.getElementById('input_2')
const button = document.getElementById('submit')
const buttonPlus = document.getElementById('plus')
const buttonMin = document.getElementById('minuse')
const buttonMult = document.getElementById('multiplie')
const buttonDivi = document.getElementById('divided')
const resultsList = document.getElementById('list_results')

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

function chooseAction(inp1, inp2, symbol){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if(symbol == '+'){
        return num1+num2
    }else if(symbol == '-'){
        return num1-num2
    }else if(symbol == '*'){
        return num1*num2
    }else if(symbol == '/'){
        return num1/num2
    }
}
button.onclick = function(){
    
    resultElement.textContent = chooseAction(input1, input2, action)
    // resultsList.innerHTML = `<li class="result_calculation">
    // <span>${resultElement.textContent}</span></li>
    // `
    resultsList.insertAdjacentHTML('afterbegin', `<li class="result_calculation">
                                                  <span>${input1.value+action+input2.value+'='+resultElement.textContent}</span></li> `)

}

