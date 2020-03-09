
var display = document.getElementById("calculatorDisplay");
var number

// -----------------------Numbers-------------------------------------------------------------------------------------------------
function getNumber(number){
    display.innerHTML += number;
}
// ----------------------Operators-------------------------------------------------------------------------------------------------
function getOperator(operator){
    display.innerHTML += operator
}
// ----------------------Clear-----------------------------------------------------------------------------------------------------
function clearButton () {
    display.innerHTML = " "
}
// ----------------------Result----------------------------------------------------------------------------------------------------
function buttonEquals(){
    display.innerHTML = eval (display.innerHTML)
}

