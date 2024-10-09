const button = document.getElementById("myButton");

const message = document.createElement("p");
button.parentElement.appendChild(message);

function handleClick() {
  message.textContent = "Bonjour, vous avez cliqué sur le bouton !";
}

button.addEventListener("click", handleClick);
