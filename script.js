let resultElement = document.getElementById("result");

function clearDisplay() {
    resultElement.value = "";
}

function deleteLastChar() {
    let currentValue = resultElement.value;
    resultElement.value = currentValue.slice(0, -1);
}

function appendToDisplay(value) {
    resultElement.value += value;
}

function calculate() {
    try {
        resultElement.value = eval(resultElement.value);
    } catch (error) {
        resultElement.value = "Error";
    }
}

function calculatePercentage() {
    try {
        resultElement.value = eval(resultElement.value + "/100");
    } catch (error) {
        resultElement.value = "Error";
    }
}
