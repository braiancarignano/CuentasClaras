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
const printBilletera = () => {
    elem = document.createElement("tr");
    for (const billetera of billeteras) {
        const {nombre, cantidad} = billetera
        elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th> <th class="btn-main-tougle h5 billeteraNueva">$${cantidad}</th>`
        containerBilleteras.append(elem)}
    }
const verificarStorage = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        const elem = document.createElement("tr");
        for (const billetera of billeteras) {
            const { nombre, cantidad} = billetera
            elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th> <th class="btn-main-tougle h5 billeteraNueva">$${cantidad}</th>`
            containerBilleteras.append(elem)
        }
    }
}
verificarStorage()
const crearBilletera = () => {
    const cantidadBilleteraNumber = Number(cantidadBilletera.value);
    let newBilletera = new NuevoBilletera(nombreBilletera.value, cantidadBilleteraNumber);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));
    console.log("paso billetera")
}
// alerta de error con libreria para billetera
const error = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ya ingresaste una billetera.',
    })
}
const agregarBilletera = () => {
    if(billeteras.length === 0){
    modalNuevaBilletera.classList.remove('desactive')}
    else{
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