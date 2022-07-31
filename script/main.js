// Nombrando los selectores
const resultadoGastos = JSON.parse(localStorage.getItem('resultadoGasto')) ?? [];
const billeteras = datoStorage = JSON.parse(localStorage.getItem("billeteras")) ?? [];
const btnCancelarModalBilletera = document.querySelector("#btnCancelarModalBilletera");
const btnConfirmarModalBilletera = document.querySelector("#btnConfirmarModalBilletera");
const modalNuevaBilletera = document.querySelector(".modalNuevaBilletera");
const btnCrearBilletera = document.querySelector("#btnCrearBilletera");
const mostrarModalAgregarBilletera = document.querySelector("#mostrarModalAgregarBilletera");
const nombreBilletera = document.querySelector("#nombreBilletera");
const cantidadBilletera = document.querySelector("#cantidadBilletera");
const containerBilleteras = document.querySelector("#containerBilleteras");
// Funcion para poder cerrar sesion borrando el dato ingresado al localstorage de "iniciado"
const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("sesion")
    window.location.replace("../index.html")
})
// Clase constructora para billetera
class NuevoBilletera {
    constructor(nombre, cantidad) {
        this.nombre = nombre,
            this.cantidad = cantidad
    }
}
// Clase constructora para registro de ingreso/gasto
class NuevoRegistro {
    constructor(nombre, cantidad, categoria, fecha) {
        this.billetera = nombre,
            this.cantidad = cantidad,
            this.categoria = categoria,
            this.fecha = fecha
    }
}
// Renderiza la billetera en el HTML
const printBilletera = () => {
    elem = document.createElement("tr");
    for (const billetera of billeteras) {
        const { nombre, cantidad } = billetera
        elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th> <th class="btn-main-tougle h5 billeteraNueva">$${cantidad}</th>`
        containerBilleteras.append(elem)
    }
}
// Verifica si hay billetera en el localStorage despues de actualizar la pagina (F5) y renderiza en HTML
const verificarStorage = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        const elem = document.createElement("tr");
        for (const billetera of billeteras) {
            const { nombre, cantidad } = billetera
            elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th> <th class="btn-main-tougle h5 billeteraNueva">$${cantidad}</th>`
            containerBilleteras.append(elem)
        }
    }
}
verificarStorage()
// Crea la billetera y sube al localStorage
const crearBilletera = () => {
    const cantidadBilleteraNumber = Number(cantidadBilletera.value);
    let newBilletera = new NuevoBilletera(nombreBilletera.value, cantidadBilleteraNumber);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));
}
// Alerta de error con libreria para billetera
const error = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ya ingresaste una billetera.',
    })
}
// Agrega la billetera y si ya esta creada da un error
const agregarBilletera = () => {
    if (billeteras.length === 0) {
        modalNuevaBilletera.classList.remove('desactive')
    }
    else {
        error()
    }
}
// Boton para CANCELAR modal BILLETERA
btnCancelarModalBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    cancelarModal()
})
// Boton para CONFIRMAR modal BILLETERA
btnConfirmarModalBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    crearBilletera()
    cancelarModal()
    printBilletera()
})
// Boton para modal de agregar BILLETERA
btnCrearBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    agregarBilletera()
})