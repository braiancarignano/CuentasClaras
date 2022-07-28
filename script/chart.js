const btnMostrarGrafico = document.querySelector("#btnMostrarGrafico");
const ctx = document.getElementById('myChart');
const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}
const graficoGastos = JSON.parse(localStorage.getItem('gastos'))
const graficoIngresos = JSON.parse(localStorage.getItem('ingresos'))
const errorGrafico = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa un GASTO y un INGRESO para mostrar el grafico.',
        footer: '<a href="">Si ya lo hiciste y no funciona presione AQUÍ</a>',
    })
}
const permitirGrafico = () => {
    if(graficoGastos === null || graficoIngresos === null){
        errorGrafico()
    }
    else{
        renderGrafico()
    }
}
const renderGrafico = () => {
    const resumenIngresos = graficoIngresos.reduce((acc,elemento) => acc + elemento.cantidad, 0)
    const resumenGastos = graficoGastos.reduce((acc,elemento) => acc + elemento.cantidad, 0)
    const data = {
        labels: ["Ingresos", "Gastos"],
        datasets: [{
            data: [resumenIngresos,resumenGastos],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }
     new Chart(ctx, { type: "doughnut", data})
}

// Boton para MOSTRAR GRAFICO
btnMostrarGrafico.addEventListener ("click", (e) => {
    e.preventDefault()
    permitirGrafico()
})


