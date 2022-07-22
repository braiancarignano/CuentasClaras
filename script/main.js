// Funcion para poder cerrar sesion borrando el dato ingresado al localstorage de "iniciado"
const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("sesion")
    window.location.replace("../index.html")
    console.log(cerrarSesion)
})
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

class NuevoBilletera {
    constructor(nombre, cantidad) {
        this.nombre = nombre,
            this.cantidad = cantidad
    }
}
class NuevoRegistro {
    constructor(nombre, cantidad, categoria, fecha) {
        this.billetera = nombre,
            this.cantidad = cantidad,
            this.categoria = categoria,
            this.fecha = fecha
    }
}

const printSaldo = () => {
    elem = document.createElement("tr");
    for (const resultadoGasto of resultadoGastos) {
        elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva saldo">$${resultadoGasto}</th>`
        containerBilleteras.append(elem)
    }}
    const verificarStorageSaldo = () => {
        if (!!datoStorage && datoStorage.length > 0) {
            for (const resultadoGasto of resultadoGastos) {
                const elem = document.createElement("tr");
                elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva saldo">$${resultadoGasto}</th>`
                containerBilleteras.append(elem)
            }}
    }
    verificarStorageSaldo()
const printBilletera = () => {
    elem = document.createElement("tr");
    for (const billetera of billeteras) {
        const {nombre, cantidad} = billetera
        elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th>`
        containerBilleteras.append(elem)}
    }
const verificarStorage = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        for (const billetera of billeteras) {
            const { nombre, cantidad} = billetera
            const elem = document.createElement("tr");
            elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th>`
            containerBilleteras.append(elem)
        }
    }
}

verificarStorage()
const crearBilletera = () => {
    let newBilletera = new NuevoBilletera(nombreBilletera.value, cantidadBilletera.value);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));
    console.log("paso billetera")
}
const agregarBilletera = () => {
    modalNuevaBilletera.classList.remove('desactive')
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
    printSaldo()
})
// Boton para modal de agregar BILLETERA
btnCrearBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    agregarBilletera()
})