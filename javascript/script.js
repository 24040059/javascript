// --- SELECTORES ---
const botonSelector = document.querySelector("#botonSelector");
const textoSelector = document.querySelector("#textoSelector");

botonSelector.addEventListener("click", () => {
  textoSelector.style.color = "purple";
  textoSelector.textContent = "¡El texto ha cambiado gracias a un selector!";
});

// --- EVENTOS ---
const botonEvento = document.querySelector("#botonEvento");
const mensajeEvento = document.querySelector("#mensajeEvento");

botonEvento.addEventListener("click", () => {
  mensajeEvento.textContent = "Has hecho clic, este es un evento funcionando 🎉";
  mensajeEvento.style.color = "green";
});

// --- FUNCIONES ---
const botonFuncion = document.querySelector("#botonFuncion");
const nombreInput = document.querySelector("#nombreInput");

function saludar(nombre) {
  alert(`¡Hola, ${nombre}! Esta es una función en acción.`);
}

botonFuncion.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  if (nombre) {
    saludar(nombre);
  } else {
    alert("Por favor, escribe tu nombre.");
  }
});

