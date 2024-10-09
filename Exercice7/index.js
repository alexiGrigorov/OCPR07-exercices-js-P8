const decimalInput = document.getElementById("decimalInput");
const binaryResult = document.getElementById("binaryResult");

function convertToBinary() {
  const deciamlNumber = Number.parseInt(decimalInput.value, 10);
  if (decimalInput.value != deciamlNumber) return;
  if (Number.isNaN(deciamlNumber)) return;
  binaryResult.innerText = deciamlNumber.toString(2);
}
