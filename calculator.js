const calculator ={
    displayValue: '0',
    firstOperand : null,
    waitingForSecondOperand : false,
    operator : null
}

function updateDisplay (){
    let display = document.querySelector (".screen")
    display.value= calculator.displayValue
}
const keys = document.querySelector(".keys")
keys. addEventListener('click', (event) =>{
    let target = event.target
    if(target.classList.contains('operator')){
        return
    }

    if (target.classList.contains('clear-screen')){
        calculator.displayValue = '0'
        updateDisplay()
        return
    }
    inputDigit(target.value)
    updateDisplay()
})

function inputDigit (digit){
    if(
        calculator.displayValue == '0') {
            calculator.displayValue = digit
        } else{
            calculator.displayValue += digit
        }
}







updateDisplay();