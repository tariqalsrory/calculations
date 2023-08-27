function appendToResult(value) {
    document.getElementById('operation').value += value;
}

function calculateResult() {
    var result = eval(document.getElementById('operation').value);
    document.getElementById('result').value = result;
}

function clearResult() {
    document.getElementById('operation').value = '';
    document.getElementById('result').value = '';
}

