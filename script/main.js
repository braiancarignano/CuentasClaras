// Funcion para poder cerrar sesion borrando el dato ingresado al localstorage de "iniciado"
const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () =>{
localStorage.removeItem("sesion")
window.location.replace("../index.html")
console.log(cerrarSesion)
})
const billeteras= [];
const modalIngresos = document.querySelector(".modalIngresos");
const modalGastos = document.querySelector(".modalGastos");
const btnMostrarGasto = document.querySelector("#btnMostrarGasto");
const btnMostrarIngreso = document.querySelector("#btnMostrarIngreso");
const btnCrearBilletera = document.querySelector("#btnCrearBilletera");


class NuevoBilletera {
    constructor(nombre, saldo) {
        this.nombre = nombre,
            this.saldo = saldo
    }
}
const crearBilletera = () => {
    let newBilletera = new NuevoBilletera(registroNombre.value, registroApellido.value, registroEmail.value, registroContraseña.value);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));
}

//Botones para cambiar contenedor (Inicio Sesion - Registro)
btnMostrarGasto.addEventListener("click", (e) => {
    e.preventDefault()
    modalGastos.classList.remove('desactive')
    modalIngresos.classList.add('desactive')
})
btnMostrarIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    modalGastos.classList.add('desactive')
    modalIngresos.classList.remove('desactive')
})
// Boton para modal de agregar billetera
btnMostrarGasto.addEventListener("click", (e) => {
    e.preventDefault()
    
})