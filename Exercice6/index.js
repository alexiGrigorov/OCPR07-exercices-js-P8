const display = document.getElementById("display");

function appendToDisplay(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  // Check for division by zero
  if (/\/\s*0/.test(display.value)) {
    display.value = "Division by zero is not allowed";
    return;
  }
  display.value = eval(display.value);
}
