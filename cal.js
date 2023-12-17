let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function setOperator(op) {
    display.value += ' ' + op + ' ';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
