// Array de objetos donde se almacenan los datos de los usuarios registrados
// Cree un usuario "admin" para poder interactuar con mas facilidad
const usuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [{ correo: "admin@gmail.com", contraseña: "administrador" }];
// Nombrando los selectores
const inicioEmail = document.querySelector("#inicioEmail")
const inicioContraseña = document.querySelector("#inicioContraseña")
const registroNombre = document.querySelector("#registroNombre")
const registroApellido = document.querySelector("#registroApellido")
const registroEmail = document.querySelector("#registroEmail")
const registroContraseña = document.querySelector("#registroContraseña")
const btnRegistrateInicio = document.querySelector("#btnRegistrateInicio");
const btnIngresarRegistro = document.querySelector("#btnIngresarRegistro");
const formularioIngreso = document.querySelector(".formularioIngreso");
const formularioRegistro = document.querySelector(".formularioRegistro");
const btnRegistrateRegistro = document.querySelector("#btnRegistrateRegistro");
const sesion = "Iniciado"

// Esta funcion hace que mientras exista "sesion" en el storage no se pueda iniciar sesion en otra cuenta. Hasta que se cierre sesion.
localStorage.getItem("sesion") && window.location.replace("../paginas/gastos.html");

// Constructor de usuarios
class NuevoUsuario {
    constructor(nombre, apellido, correo, contraseña) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.correo = correo,
            this.contraseña = contraseña
    }
}
// Se crea el usuario y se pushea al localStorage
const crearUsuario = () => {
    let newUsuario = new NuevoUsuario(registroNombre.value, registroApellido.value, registroEmail.value, registroContraseña.value);
    usuarios.push(newUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
// alerta de error con libreria
const error = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los datos ingresados son invalidos.',
    })
}
// Validacion para inicio de sesion, si hay una coincidencia entre un correo y una contraseña lo redirige al sitio 
// Y crea un dato "sesion" para que no se cierre la sesion y se mantenga el sitio abierto hasta que presione "cerrar sesion"
const validarUsuario = () => {
    for (const usuario of usuarios) {
        const { correo, contraseña } = usuario

        if (correo === inicioEmail.value && contraseña === inicioContraseña.value) {
            window.location.href = "../paginas/gastos.html";
            localStorage.setItem("sesion", sesion)
        }
        else {
            error()
        }
    }
}
//Botones para cambiar contenedor (Inicio Sesion - Registro)
btnRegistrateInicio.addEventListener("click", (e) => {
    e.preventDefault()
    formularioIngreso.classList.add('desactive')
    formularioRegistro.classList.remove('desactive')
})
//Botones para cambiar contenedor (Inicio Sesion - Registro)
btnIngresarRegistro.addEventListener("click", (e) => {
    e.preventDefault()
    formularioIngreso.classList.remove('desactive')
    formularioRegistro.classList.add('desactive')
})
// Boton para crear registro de usuario
formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    crearUsuario();
    formularioIngreso.classList.remove('desactive')
    formularioRegistro.classList.add('desactive')
})
// Evento validacion de usuario
formularioIngreso.addEventListener("submit", (e) => {
    e.preventDefault();
    validarUsuario()
})





