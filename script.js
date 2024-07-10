// scripts.js

// Función para encriptar el texto
function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar el texto
function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para copiar el texto y resaltar el borde del textarea
function copyText() {
    const outputText = document.getElementById('outputText');
    const inputText = document.getElementById('inputText');

    // Seleccionar el texto dentro de outputText
    const range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copiar el texto seleccionado
    document.execCommand('copy');

    // Quitar la selección
    window.getSelection().removeAllRanges();

    // Resaltar el borde del textarea inputText
    inputText.style.border = '2px solid gold';

    // Quitar el resaltado después de 1 segundo
    setTimeout(() => {
        inputText.style.border = '1px solid #ccc';
    }, 1000);
}

// Función para limpiar el textarea
function clearTextarea() {
    document.getElementById('inputText').value = '';
}

// Función para validar el texto
function validateInput(text) {
    return text.replace(/[^a-z\s]/g, ''); // Remueve caracteres no permitidos
}

// Obtener los elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');

// Añadir eventos a los botones
encryptButton.addEventListener('click', () => {
    const validText = validateInput(inputText.value);
    inputText.value = validText;
    outputText.textContent = encrypt(validText);
    clearTextarea();
});

decryptButton.addEventListener('click', () => {
    const validText = validateInput(inputText.value);
    inputText.value = validText;
    outputText.textContent = decrypt(validText);
    clearTextarea();
});

copyButton.addEventListener('click', copyText);

// Añadir evento para validar mientras se escribe
inputText.addEventListener('input', () => {
    inputText.value = validateInput(inputText.value);
});
