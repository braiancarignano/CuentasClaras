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

const crearRegistroGasto = () => {
    const cantidadGastosNumber = Number(cantidadGastos.value);
    let newGastos = new NuevoRegistro(billeterasGastos.value, cantidadGastosNumber, categoriaGastos.value, fechaGastos.value);
    gastos.push(newGastos)
    localStorage.setItem("gastos", JSON.stringify(gastos));
}
const restarGasto = () =>{
    saldo = gastos[gastos.length -1].cantidad
    let nombre = billeteras[billeteras.length -1].nombre
    resultado = billeteras[billeteras.length -1].cantidad - saldo;
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
const renderGasto = () => {
    elem = document.createElement("tr");
    for (const gasto of gastos) {
        const {billetera, categoria, fecha, cantidad} = gasto
        elem.innerHTML = `<td>${billetera}</td>
        <td class="categoria">${categoria}</td>
        <td>${fecha}</td>
        <td>$${cantidad}</td>`
        tablaGastos.append(elem)
    }
}
const verificarStorageGasto = () => {
    if (!!datoStorage && datoStorage.length > 0) {
        for (const gasto of gastos) {
            const {billetera, categoria, fecha, cantidad} = gasto
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
const cancelarModal = () => {
    modalGastos.classList.add('desactive')
    modalNuevaBilletera.classList.add('desactive')
}
const agregarGasto = () => {
    modalGastos.classList.remove('desactive')
}
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











