function getValue(val) {
    var input = document.getElementById("inputField");
    input.value += val;
}

function clrAll() {
    var input = document.getElementById("inputField");
    input.value = "";
}

function squareNum() {
    var input = document.getElementById("inputField");
    input.value = input.value * input.value;
}

function deleteChar() {
    var input = document.getElementById("inputField");
    input.value = input.value.slice(0, -1);
}

function equal() {
    var input = document.getElementById("inputField");
    var result = eval(input.value);
    input.value = result;
}