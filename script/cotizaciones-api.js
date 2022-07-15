
const cotizacionesDolar = document.querySelector("#cotizacionesDolar")
const cotizacionesEuro = document.querySelector("#cotizacionesEuro")
const cotizaciones = async () => {
    try{
        const datos = await fetch(`https://api.bluelytics.com.ar/v2/latest`)
        const monedas = await datos.json()
        cotizacionesDolar.innerHTML = 
        `<div class="cotizacion">
        <h2 class="titleNombre h6">Dolar Blue</h2>
        <span class="precioCotizacion">Compra: $${monedas.blue.value_buy}.00</span>
        <span class="precioCotizacion">Venta: $${monedas.blue.value_sell}.00</span>
        </div>`

        cotizacionesEuro.innerHTML = 
        `<div class="cotizacion">
        <h2 class="titleNombre h6">Euro Blue</h2>
        <span class="precioCotizacion">Compra: $${monedas.blue_euro.value_buy}.00</span>
        <span class="precioCotizacion">Venta: $${monedas.blue_euro.value_sell}</span>
        </div>`

    }
    catch{
        
    }
}
cotizaciones()




