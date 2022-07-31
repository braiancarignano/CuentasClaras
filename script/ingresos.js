// Nombrando los selectores
const ingresos = datoStorage = JSON.parse(localStorage.getItem("ingresos")) ?? [];
const tablaIngresos = document.querySelector("#tablaIngresos");
const billeterasIngreso = document.querySelector("#billeterasIngreso");
const cantidadIngreso = document.querySelector("#cantidadIngreso");
const categoriaIngresos = document.querySelector("#categoriaIngresos");
const fechaIngresos = document.querySelector("#fechaIngresos");
const btnCancelarModalIngreso = document.querySelector("#btnCancelarModalIngreso");
const btnConfirmarModalIngreso = document.querySelector("#btnConfirmarModalIngreso");
const modalIngresos = document.querySelector(".modalIngresos");
const btnMostrarIngreso = document.querySelector("#btnMostrarIngreso");
let elem;
// Crea un nuevo Ingreso con los valores en el formulario y push a localstorage
const crearRegistroIngreso = () => {
    const cantidadIngresosNumber = Number(cantidadIngreso.value);
    let newIngreso = new NuevoRegistro(billeterasIngreso.value, cantidadIngresosNumber, categoriaIngresos.value, fechaIngresos.value);
    ingresos.push(newIngreso)
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
}
// Suma el valor de la billetera y el ingreso para crear nuevo saldo
const sumarIngreso = () => {
    saldo = ingresos[ingresos.length - 1].cantidad
    let nombre = billeteras[billeteras.length - 1].nombre
    resultado = billeteras[billeteras.length - 1].cantidad + saldo;
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
// Renderiza el nuevo ingreso en el HTML, seccion tabla
const renderIngreso = () => {
    elem = document.createElement("tr");
    for (const ingreso of ingresos) {
        const { billetera, categoria, fecha, cantidad } = ingreso
        elem.innerHTML = `<td>${billetera}</td>
        <td class="categoria">${categoria}</td>
        <td>${fecha}</td>
        <td>$${cantidad}</td>`
        tablaIngresos.append(elem)
    }
}
// Verifica los datos del localStorage y renderiza renderIngreso de nuevo al recargar (F5)
const verificarStorageIngreso = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        for (const ingreso of ingresos) {
            const { billetera, categoria, fecha, cantidad } = ingreso
            const elem = document.createElement("tr");
            elem.innerHTML += `<td>${billetera}</td>
            <td class="categoria">${categoria}</td>
            <td>${fecha}</td>
            <td>$${cantidad}</td>`
            tablaIngresos.append(elem)
        }
    }
}
verificarStorageIngreso()
// Funcion para cancelar modal 
const cancelarModal = () => {
    modalIngresos.classList.add('desactive')
    modalNuevaBilletera.classList.add('desactive')
}
// Funcion para mostrar modal de ingreso
const agregarIngreso = () => {
    modalIngresos.classList.remove('desactive')
}
// Muestra el nombre de la billetera registrada en el modal de ingreso
const agregarBilleteraModal = () => {
    for (const billetera of billeteras) {
        const { nombre } = billetera
        billeterasIngreso.innerHTML += `<option value="${nombre}">${nombre}</option>`
    }
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
    renderIngreso()
    sumarIngreso()
    printSaldo()
})
// Boton para modal de agregar INGRESO
btnMostrarIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    agregarIngreso()
    agregarBilleteraModal()
})
