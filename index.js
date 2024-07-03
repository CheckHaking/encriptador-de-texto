document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.contenedor__texto__encriptado');
    const textoEncriptado = document.getElementById('encrypted_text');
    const mensajeNoEncontrado = contenedor.querySelector('.mensaje-no-encontrado');
    const mensajeIngresa = contenedor.querySelector('.mensaje-ingresa');
    const botonCopiar = contenedor.querySelector('.boton__copiar');
    const imagen = contenedor.querySelector('img');

    // Función para actualizar la visibilidad de la imagen y los mensajes
    function actualizarVisibilidad() {
        if (textoEncriptado.textContent.trim() === '') {
            contenedor.classList.add('has-no-text');
            mensajeNoEncontrado.style.display = 'block';
            mensajeIngresa.style.display = 'block';
            botonCopiar.style.display='none';
            imagen.style.display = 'block';
        } else {
            contenedor.classList.remove('has-no-text');
            mensajeNoEncontrado.style.display = 'none';
            mensajeIngresa.style.display = 'none';
            botonCopiar.style.display='block';
            imagen.style.display = 'none';
        }
    }

    actualizarVisibilidad(); // Verificar la visibilidad al cargar la página

    // Función de encriptar
    window.encriptar = function() {
        let text = document.getElementById("texto_usuario").value;
        let encrypted = document.getElementById("encrypted_text");

        let textoCifrado = text
            .replace(/a/gi, "ai")
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        if (text.length !== 0) {
            encrypted.textContent = textoCifrado;
        } else {
            alert("Debes ingresar un texto");
        }

        actualizarVisibilidad(); // Actualizar la visibilidad después de encriptar
    }

    // Función de desencriptar
    window.desencriptar = function() {
        let encryptedText = textoEncriptado.textContent;
        let parrafo = document.getElementById("encrypted_text");

        let textoDescifrado = encryptedText
            .replace(/ufat/gi, "u")
            .replace(/ober/gi, "o")
            .replace(/imes/gi, "i")
            .replace(/enter/gi, "e")
            .replace(/ai/gi, "a");

        if (encryptedText.length !== 0) {
            parrafo.textContent = textoDescifrado;
        } else {
            alert("No hay texto encriptado para desencriptar");
        }
    }
});


function copiarTexto() {
    // Obtener el elemento que contiene el texto encriptado
    let textoCopiado = document.getElementById('encrypted_text');
    
    // Crear un rango de selección
    let range = document.createRange();
    range.selectNode(textoCopiado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // Intentar copiar el texto seleccionado
    try {
        document.execCommand('copy');
        alert("Texto copiado!");
    } catch (err) {
        console.error('No se pudo copiar el texto', err);
        alert('No se pudo copiar el texto. Intenta seleccionarlo manualmente y copiarlo.');
    }

    // Limpiar la selección
    window.getSelection().removeAllRanges();
}