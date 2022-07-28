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
const crearRegistroIngreso = () => {
    const cantidadIngresosNumber = Number(cantidadIngreso.value);
    let newIngreso = new NuevoRegistro(billeterasIngreso.value, cantidadIngresosNumber, categoriaIngresos.value, fechaIngresos.value);
    ingresos.push(newIngreso)
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
}

const sumarGasto = () =>{
    saldo = ingresos[ingresos.length -1].cantidad
    let nombre = billeteras[billeteras.length -1].nombre
    resultado = billeteras[billeteras.length -1].cantidad + saldo;
    console.log(nombre)
    console.log(resultado)
    let newBilletera = new NuevoBilletera(nombre, resultado);
    billeteras.push(newBilletera)
    localStorage.setItem("billeteras", JSON.stringify(billeteras));

}
const printSaldo = () => {
    containerBilleteras.innerHTML= "";
    elem = document.createElement("tr");
    for (const billetera of billeteras) {
        const {nombre, cantidad} = billetera
        elem.innerHTML = `<th class="btn-main-tougle h5 billeteraNueva">${nombre}</th> <th class="btn-main-tougle h5 billeteraNueva">$${cantidad}</th>`
        containerBilleteras.append(elem)
    }}  
const renderIngreso = () => {
    elem = document.createElement("tr");
    for (const ingreso of ingresos) {
        const {billetera, categoria, fecha, cantidad} = ingreso
        elem.innerHTML = `<td>${billetera}</td>
        <td class="categoria">${categoria}</td>
        <td>${fecha}</td>
        <td>$${cantidad}</td>`
        tablaIngresos.append(elem)
    }
}
const verificarStorageIngreso = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        for (const ingreso of ingresos) {
            const {billetera, categoria, fecha, cantidad} = ingreso
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
    renderIngreso()
    sumarGasto()
    printSaldo()
})
// Boton para modal de agregar INGRESO
btnMostrarIngreso.addEventListener("click", (e) => {
    e.preventDefault()
    agregarIngreso()
    agregarBilleteraModal()
})
