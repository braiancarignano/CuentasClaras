// Nombrando los selectores
const cotizacionesDolar = document.querySelector("#cotizacionesDolar")
const cotizacionesEuro = document.querySelector("#cotizacionesEuro")
const cotizacionesDolarOficial = document.querySelector("#cotizacionesDolarOficial")
// Trae datos de una API y los renderiza en el HTML
const cotizaciones = async () => {
    try {
        const datos = await fetch(`https://api.bluelytics.com.ar/v2/latest`)
        const monedas = await datos.json()
        cotizacionesDolar.innerHTML =
            `<div class="cotizacion shadow mb-5 rounded">
        <h2 class="titleNombre h6">Dolar Blue</h2>
        <span class="precioCotizacion">Compra: $${monedas.blue.value_buy}.00</span>
        <span class="precioCotizacion">Venta: $${monedas.blue.value_sell}.00</span>
        </div>`

        cotizacionesEuro.innerHTML =
            `<div class="cotizacion shadow mb-5 rounded">
        <h2 class="titleNombre h6">Euro Blue</h2>
        <span class="precioCotizacion">Compra: $${monedas.blue_euro.value_buy}.00</span>
        <span class="precioCotizacion">Venta: $${monedas.blue_euro.value_sell}</span>
        </div>`
    }
    catch {
        Swal.fire({
            icon: 'error',
            title: 'Error 404',
            text: 'No se han encontrado los datos solicitados.',
        })
    }
}
cotizaciones()





