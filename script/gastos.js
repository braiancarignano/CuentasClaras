const gastos = datoStorage = JSON.parse(localStorage.getItem("gastos")) ?? [];
const resultadoGasto = datoStorage = JSON.parse(localStorage.getItem("resultadoGasto")) ?? [];
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
let resultado

// restando el valor del gasto a la billetera para despues mostrar el nuevo saldo de la billetera a la vez que se crea el gasto
// ------------------  NO FUNCIONA BIEN ----------------------------
const crearRegistroGasto = () => {
    let newGastos = new NuevoRegistro(billeterasGastos.value, cantidadGastos.value, categoriaGastos.value, fechaGastos.value);
    gastos.push(newGastos)
    localStorage.setItem("gastos", JSON.stringify(gastos));
    billeteras.forEach(billetera =>{       
        resultado = billetera.cantidad - cantidadGastos.value;
        resto = resultado
        if (resultado < billetera.cantidad){
            let resultado2 = resultado - cantidadGastos.value;
            console.log(resultado2)
            console.log("pasooo")
        }
        console.log(resultado)
        // resultadoGasto.push(resultado2)
        localStorage.setItem("resultadoGasto", JSON.stringify(resultadoGasto));
    });
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











