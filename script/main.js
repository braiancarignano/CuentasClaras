// Funcion para poder cerrar sesion borrando el dato ingresado al localstorage de "iniciado"
const cerrarSesion = document.querySelector("#cerrarSesion");
cerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("sesion")
    window.location.replace("../index.html")
    console.log(cerrarSesion)
})
const billeteras = datoStorage = JSON.parse(localStorage.getItem("billeteras")) ?? [];
const gastos = [];
const ingresos = [];
const billeterasIngreso = document.querySelector("#billeterasIngreso");
const cantidadIngreso = document.querySelector("#cantidadIngreso");
const categoriaIngresos = document.querySelector("#categoriaIngresos");
const fechaIngresos = document.querySelector("#fechaIngresos");
const billeterasGastos = document.querySelector("#billeterasGastos");
const cantidadGastos = document.querySelector("#cantidadGastos");
const categoriaGastos = document.querySelector("#categoriaGastos");
const fechaGastos = document.querySelector("#fechaGastos");
const btnCancelarModalIngreso = document.querySelector("#btnCancelarModalIngreso");
const btnCancelarModalGasto = document.querySelector("#btnCancelarModalGasto");
const btnCancelarModalBilletera = document.querySelector("#btnCancelarModalBilletera");
const btnConfirmarModalIngreso = document.querySelector("#btnConfirmarModalIngreso");
const btnConfirmarModalGasto = document.querySelector("#btnConfirmarModalGasto");
const btnConfirmarModalBilletera = document.querySelector("#btnConfirmarModalBilletera");
const modalIngresos = document.querySelector(".modalIngresos");
const modalGastos = document.querySelector(".modalGastos");
const modalNuevaBilletera = document.querySelector(".modalNuevaBilletera");
const btnMostrarGasto = document.querySelector("#btnMostrarGasto");
const btnMostrarIngreso = document.querySelector("#btnMostrarIngreso");
const btnCrearBilletera = document.querySelector("#btnCrearBilletera");
const mostrarModalAgregarBilletera = document.querySelector("#mostrarModalAgregarBilletera");
const nombreBilletera = document.querySelector("#nombreBilletera");
const cantidadBilletera = document.querySelector("#cantidadBilletera");
const containerBilleteras = document.querySelector("#containerBilleteras");
let elem;

class NuevoBilletera {
    constructor(nombre, saldo) {
        this.nombre = nombre,
            this.saldo = saldo
    }
}
class NuevoRegistro {
    constructor(nombre, saldo, categoria, fecha) {
        this.billetera = nombre,
            this.saldo = saldo,
            this.categoria = categoria,
            this.fecha = fecha
    }
}
const borrar = () => {
    elem.innerHTML = '';
    containerBilleteras.append(elem)
    console.log("dasdasd")
}

const crearBilletera = () => {
    let newBilletera = new NuevoBilletera(nombreBilletera.value, cantidadBilletera.value);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));
    console.log("paso billetera")
}
const crearRegistroIngreso = () => {
    let newIngreso = new NuevoRegistro(billeterasIngreso.value, cantidadIngreso.value, categoriaIngresos.value, fechaIngresos.value);
    ingresos.push(newIngreso)
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
    console.log("paso Ingreso")
}
const crearRegistroGasto = () => {
    let newGastos = new NuevoRegistro(billeterasGastos.value, cantidadGastos.value, categoriaGastos.value, fechaGastos.value);
    gastos.push(newGastos)
    localStorage.setItem("gastos", JSON.stringify(gastos));
    console.log("paso Gastos")
}

const cancelarModal = () => {
    modalIngresos.classList.add('desactive')
    modalGastos.classList.add('desactive')
    modalNuevaBilletera.classList.add('desactive')
}
const agregarBilletera = () => {
    modalNuevaBilletera.classList.remove('desactive')
}
const agregarGasto = () => {
    modalIngresos.classList.add('desactive')
    modalGastos.classList.remove('desactive')
}
const agregarIngreso = () => {
    modalGastos.classList.add('desactive')
    modalIngresos.classList.remove('desactive')
}
const printBilletera = () => {
    for (const billetera of billeteras) {
        const { nombre } = billetera
        elem.innerHTML = `<li class="btn-main-tougle h5 lista" href="#">${nombre}</li>
        <button type="submit" onClick="borrar()" class="btn btnMostrarGasto">Registrar Gasto</button></a>`
        containerBilleteras.append(elem)
        console.log("pasando")
    }
}
const verificarStorage = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        for (const billetera of billeteras) {
            const { nombre } = billetera
            const elem = document.createElement("ul");
            elem.innerHTML = `<li class="btn-main-tougle h5 lista" href="#">${nombre}</li>
            <button type="submit" onClick="borrar()" class="btn btnMostrarGasto">Registrar Gasto</button></a>`
            containerBilleteras.append(elem)
        }
    }
}
verificarStorage()



// Boton para CANCELAR modal INGRESO
btnCancelarModalIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    cancelarModal()
})
// Boton para CANCELAR modal GASTO
btnCancelarModalGasto.addEventListener("click", (e) => {
    e.preventDefault()
    cancelarModal()
})
// Boton para CANCELAR modal BILLETERA
btnCancelarModalBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    cancelarModal()
})
// Boton para CONFIRMAR modal INGRESO
btnConfirmarModalIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    crearRegistroIngreso()
    cancelarModal()
})
// Boton para CONFIRMAR modal GASTO
btnConfirmarModalGasto.addEventListener("click", (e) => {
    e.preventDefault()
    crearRegistroGasto()
    cancelarModal()
})
// Boton para CONFIRMAR modal BILLETERA
btnConfirmarModalBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    crearBilletera()
    cancelarModal()
    elem = document.createElement("ul");
    printBilletera()
})
// Boton para modal de agregar INGRESO
btnMostrarIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    agregarIngreso()
})
// Boton para modal de agregar GASTO
btnMostrarGasto.addEventListener("click", (e) => {
    e.preventDefault()
    agregarGasto()
})
// Boton para modal de agregar BILLETERA
btnCrearBilletera.addEventListener("click", (e) => {
    e.preventDefault()
    agregarBilletera()
})