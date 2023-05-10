const cajaTexto = document.getElementById('text-area');
const mensaje = document.getElementById('mensaje');
const parrafoAviso = document.querySelector('.parrafo1');
const parrafoMensaje = document.querySelector('.parrafo2');
const btnCopiar = document.getElementById('btn-copiar');

btnCopiar.style.display = "none";

function validarTexto() {
    let textoEscrito = document.querySelector('.text-area').value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (!validador || validador === 0) {
        swal ( "¡ Solo son permitidas letras minúsculas y sin acentos! " ) ;
    }
}

function encriptar(textEncriptada) {
    let matrizEncriptacion = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textEncriptada = textEncriptada.toLowerCase();

    for (let i=0;i < matrizEncriptacion.length;i++) {
        if (textEncriptada.includes(matrizEncriptacion[i][0])) {
            textEncriptada = textEncriptada.replaceAll(matrizEncriptacion[i][0], matrizEncriptacion[i][1]);
        }
    }
    return textEncriptada;
}

function btnEncriptar() {
    if (cajaTexto.value == "") {
        parrafoAviso.style.color = "red";
        swal ( "Ups","¡Ningún mensaje fue encontrado!","error");
    }else if(!validarTexto()) {
        const textoEncriptado = encriptar(cajaTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        cajaTexto.value = "";
        parrafoAviso.style.display = "none";
        parrafoMensaje.style.display = "none";
        btnCopiar.style.display = "block";
    }
}

function desencriptar(textDesencriptada) {
    let matrizEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textDesencriptada = textDesencriptada.toLowerCase();

    for (let i = 0; i < matrizEncriptacion.length;i++){
        if(textDesencriptada.includes(matrizEncriptacion[i][0])) {
            textDesencriptada = textDesencriptada.replaceAll(matrizEncriptacion[i][1], matrizEncriptacion[i][0]);
        }
    }
    return textDesencriptada;
}

function btnDesencriptar() {
    if (cajaTexto.value == "") {
        parrafoAviso.style.color = "red";
        swal ( "Ups","¡Ningún mensaje fue encontrado!","error");
    }
    else if (!validarTexto()) {
        const textoEncriptado = desencriptar(cajaTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        cajaTexto.value = "";
        parrafoAviso.style.display = "none";
        parrafoMensaje.style.display = "none";
    }
}

function copiarTexto() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    swal("Muy bien", "¡ Texto Copiado!", "success");
}