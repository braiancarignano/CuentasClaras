const gastos = datoStorage = JSON.parse(localStorage.getItem("gastos")) ?? [];
const resultadoGasto = datoStorage = JSON.parse(localStorage.getItem("gastos")) ?? [];
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
const crearRegistroGasto = () => {
    let newGastos = new NuevoRegistro(billeterasGastos.value, cantidadGastos.value, categoriaGastos.value, fechaGastos.value);
    billeteras.forEach(object =>{
        let resta = object.cantidad - cantidadGastos.value;
        resultadoGasto.push(resta)
        localStorage.setItem("resultadoGasto", JSON.stringify(resultadoGasto));
    });
    gastos.push(newGastos)
    localStorage.setItem("gastos", JSON.stringify(gastos));
    console.log("paso Gastos")
}

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
agregarBilleteraModal()
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
})
// Boton para modal de agregar GASTO
btnMostrarGasto.addEventListener("click", (e) => {
    e.preventDefault()
    agregarGasto()
})











