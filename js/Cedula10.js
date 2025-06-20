function CedulaX(){
    localStorage.setItem("currentCedulaProceso2", "CedulaX")
    let valuesProceso2
    let divProceso2 = document.getElementById("content2")
    let button5 = document.getElementById("cedula5")
    let button6 = document.getElementById("cedula6")
    let button7 = document.getElementById("cedula7")
    let button8 = document.getElementById("cedula8")
    let button9 = document.getElementById("cedula9")
    let button10 = document.getElementById("cedula10")
    button5.setAttribute("style","background-color: #ccc; ")
    button6.setAttribute("style","background-color: #ccc ; ")
    button7.setAttribute("style","background-color: #ccc; ")
    button8.setAttribute("style","background-color: #ccc;  ")
    button9.setAttribute("style","background-color: #ccc; ")
    button10.setAttribute("style","background-color: #908989; ")
    divProceso2.innerHTML = `
        <div style="display: flex; justify-content: center; gap: 40px;">
    <!-- Tabla 1 -->
    <div>
        <h3 style="text-align: center;">Ventas</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;">
        <div class="inputs" >Unidades Vendidas</div>
        <div class="inputs"  >Precio de<br>Venta</div>
        <div class="inputs" >Importe</div>

        <input class="inputs" id="cedula10_unidadesVendidas1" type="number" placeholder="-" readonly>
        <input class="inputs" id="cedula10_precioDeVenta" type="number" placeholder="Escribe algo" oninput="enforceNegatives(this)" onkeydown="notDoubleMinus(this)">
        <input class="inputs" id="cedula10_ImporteVenta1" type="number" placeholder="-" readonly>
        </div>
    </div>

    <!-- Tabla 2 -->
    <div>
        <h3 style="text-align: center;">Costos de lo vendido</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;">
        <div class="inputs" >Unidades Vendidas</div>
        <div class="inputs">Costo Unitario Promedio</div>
        <div class="inputs">Importe</div>

        <input class="inputs" id="cedula10_unidadesVendidas2" type="number" placeholder="-" readonly >
        <input class="inputs" id="cedula10_CUP" type="number" placeholder="-" readonly>
        <input class="inputs" id="cedula10_ImporteVenta2" type="number" placeholder="-" readonly>
        </div>
    </div>
    </div>

    `
    let cedula10_costoUnitario = localStorage.getItem("cedula6Total5") == null ? 0 : localStorage.getItem("cedula6Total5")
    const cedula10_unidadesVendidas = ["cedula10_unidadesVendidas1","cedula10_unidadesVendidas2"]
    let cedula10_unidadesVendidasValor = localStorage.getItem("cedula9_unidadesVendidas")
    cedula10_unidadesVendidas.forEach(element =>{
        document.getElementById(element).value = cedula10_unidadesVendidasValor
    })   

    document.getElementById("cedula10_CUP").value = cedula10_costoUnitario
    document.getElementById("cedula10_ImporteVenta2").value = formatNumber(Number(cedula10_costoUnitario) * Number(cedula10_unidadesVendidasValor))
    document.getElementById("cedula10_precioDeVenta").addEventListener('input', ()=>{
        let PV = document.getElementById("cedula10_precioDeVenta").value
        let resultado = formatNumber(Number(cedula10_unidadesVendidasValor)*Number(PV))
        localStorage.setItem("cedula10_precioDeVenta", PV)
        document.getElementById("cedula10_ImporteVenta1").value = resultado
        localStorage.setItem("cedula10_ImporteVenta1",resultado)
    })
    document.getElementById("cedula10_ImporteVenta1").value = localStorage.getItem("cedula10_ImporteVenta1")
    document.getElementById("cedula10_precioDeVenta").value = localStorage.getItem("cedula10_precioDeVenta")

}

function enforceNegatives(element) {
    let value = parseFloat(element.value)
    if (!isNaN(value)) {
        if (value < 0) {
            element.value = 0
        }
    }else{
        element.value = ""
    }
}

