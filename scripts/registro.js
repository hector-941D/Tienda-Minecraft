function obtenerUsuario(){
    let nombre = document.getElementById("nombre");
    if(validarString(nombre.value, 2, 20)){
        nombre.classList.remove("border-red");
        return nombre;
    }else{
        alert("nombre no válido");
        nombre.classList.add("border-red");
        nombre.focus();
        return null;
    }
}

function obtenerContraseña(){
    let contraseña = document.getElementById("contraseña");
    if(validarString(contraseña.value, 8, 30)){
        contraseña.classList.remove("border-red");
        return contraseña;
    }else{
        alert("contraseña no válida");
        contraseña.classList.add("border-red");
        contraseña.focus();
        return null;
    }
}

function obtenerCorreo(){
    let correo = document.getElementById("correo");
    if(validarString(correo.value, 12, 50)){
        correo.classList.remove("border-red");
        return correo;
    }else{
        alert("correo no válido");
        correo.classList.add("border-red");
        correo.focus();
        return null;
    }
}
function validarString(text, min, max){
    if (typeof text !== "string") {
        return false;
    }
    let trimmedText = text.trim();
    if(trimmedText.length >= min && trimmedText.length <= max){
        return true;
    }else{
        return false;
    }
}

function validarCorreo(text, min, max){
    if (typeof text !== "string") {
        return false;
    }
    let trimmedText = text.trim();
    if(trimmedText.length >= min && trimmedText.length <= max){
        return true; //validar correo de alguna forma...
    }else{
        return false;
    }
}