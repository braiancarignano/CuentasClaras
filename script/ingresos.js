const ingresos = [];
const billeterasIngreso = document.querySelector("#billeterasIngreso");
const cantidadIngreso = document.querySelector("#cantidadIngreso");
const categoriaIngresos = document.querySelector("#categoriaIngresos");
const fechaIngresos = document.querySelector("#fechaIngresos");
const btnCancelarModalIngreso = document.querySelector("#btnCancelarModalIngreso");
const btnConfirmarModalIngreso = document.querySelector("#btnConfirmarModalIngreso");
const modalIngresos = document.querySelector(".modalIngresos");
const btnMostrarIngreso = document.querySelector("#btnMostrarIngreso");
let elem;
const crearRegistroIngreso = () => {
    let newIngreso = new NuevoRegistro(billeterasIngreso.value, cantidadIngreso.value, categoriaIngresos.value, fechaIngresos.value);
    ingresos.push(newIngreso)
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
    console.log("paso Ingreso")
}
const cancelarModal = () => {
    modalIngresos.classList.add('desactive')
    modalNuevaBilletera.classList.add('desactive')
}
const agregarBilleteraModal = () => {
    for (const billetera of billeteras) {
        const { nombre } = billetera
        billeterasIngreso.innerHTML += `<option value="${nombre}">${nombre}</option>`
    }
}
agregarBilleteraModal()
const agregarIngreso = () => {
    modalIngresos.classList.remove('desactive')
}
// Boton para CANCELAR modal INGRESO
btnCancelarModalIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    cancelarModal()
})
// Boton para CONFIRMAR modal INGRESO
btnConfirmarModalIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    crearRegistroIngreso()
    cancelarModal()
})
// Boton para modal de agregar INGRESO
btnMostrarIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    agregarIngreso()
})
