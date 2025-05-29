function appendValue(value) {
    document.getElementById("calce").value += value;
}

function clearDisplay() {
    document.getElementById("calce").value = '';
}

function deleteLast() {
    const display = document.getElementById("calce");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById("calce").value);
        document.getElementById("calce").value = result;
    } catch {
        document.getElementById("calce").value = "Error";
    }
}
