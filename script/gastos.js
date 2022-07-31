// Nombrando los selectores
const gastos = datoStorage = JSON.parse(localStorage.getItem("gastos")) ?? [];
const tablaGastos = document.querySelector("#tablaGastos");
const billeterasGastos = document.querySelector("#billeterasGastos");
const cantidadGastos = document.querySelector("#cantidadGastos");
const categoriaGastos = document.querySelector("#categoriaGastos");
const fechaGastos = document.querySelector("#fechaGastos");
const btnCancelarModalGasto = document.querySelector("#btnCancelarModalGasto");
const btnConfirmarModalGasto = document.querySelector("#btnConfirmarModalGasto");
const modalGastos = document.querySelector(".modalGastos");
const btnMostrarGasto = document.querySelector("#btnMostrarGasto");
let elem;
let resultado;
let saldo;
// Crea un nuevo Gasto con los valores en el formulario y push a localstorage
const crearRegistroGasto = () => {
    const cantidadGastosNumber = Number(cantidadGastos.value);
    let newGastos = new NuevoRegistro(billeterasGastos.value, cantidadGastosNumber, categoriaGastos.value, fechaGastos.value);
    gastos.push(newGastos)
    localStorage.setItem("gastos", JSON.stringify(gastos));
}
// Resta el valor de la billetera y el gasto para crear nuevo saldo
const restarGasto = () => {
    saldo = gastos[gastos.length - 1].cantidad
    let nombre = billeteras[billeteras.length - 1].nombre
    resultado = billeteras[billeteras.length - 1].cantidad - saldo;
    let newBilletera = new NuevoBilletera(nombre, resultado);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));

}
// Renderiza el nuevo saldo en el HTML, seccion billetera
const printSaldo = () => {
    containerBilleteras.innerHTML = "";
    elem = document.createElement("tr");
    for (const billetera of billeteras) {
        const { nombre, cantidad } = billetera
        elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th> <th class="btn-main-tougle h5 billeteraNueva">$${cantidad}</th>`
        containerBilleteras.append(elem)
    }
}
// Renderiza el nuevo gasto en el HTML, seccion tabla
const renderGasto = () => {
    elem = document.createElement("tr");
    for (const gasto of gastos) {
        const { billetera, categoria, fecha, cantidad } = gasto
        elem.innerHTML = `<td>${billetera}</td>
        <td class="categoria">${categoria}</td>
        <td>${fecha}</td>
        <td>$${cantidad}</td>`
        tablaGastos.append(elem)
    }
}
// Verifica los datos del localStorage y renderiza renderGasto de nuevo al recargar (F5)
const verificarStorageGasto = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        for (const gasto of gastos) {
            const { billetera, categoria, fecha, cantidad } = gasto
            const elem = document.createElement("tr");
            elem.innerHTML += `<td>${billetera}</td>
            <td class="categoria">${categoria}</td>
            <td>${fecha}</td>
            <td>$${cantidad}</td>`
            tablaGastos.append(elem)
        }
    }
}
verificarStorageGasto()
// Funcion para cancelar modal 
const cancelarModal = () => {
    modalGastos.classList.add('desactive')
    modalNuevaBilletera.classList.add('desactive')
}
// Funcion para mostrar modal de gasto
const agregarGasto = () => {
    modalGastos.classList.remove('desactive')
}
// Muestra el nombre de la billetera registrada en el modal de gasto
const agregarBilleteraModal = () => {
    for (const billetera of billeteras) {
        const { nombre } = billetera
        billeterasGastos.innerHTML += `<option value="${nombre}">${nombre}</option>`
    }
}
// Boton para CANCELAR modal GASTO
btnCancelarModalGasto.addEventListener("click", (e) => {
    e.preventDefault()
    cancelarModal()
})
// Boton para CONFIRMAR modal GASTO
btnConfirmarModalGasto.addEventListener("click", (e) => {
    e.preventDefault()
    crearRegistroGasto()
    cancelarModal()
    renderGasto()
    restarGasto()
    printSaldo()
})
// Boton para modal de agregar GASTO
btnMostrarGasto.addEventListener("click", (e) => {
    e.preventDefault()
    agregarGasto()
    agregarBilleteraModal()
})











