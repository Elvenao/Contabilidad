function CedulaIX(){
    localStorage.setItem("currentCedulaProceso2", "CedulaIX")
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
    button8.setAttribute("style","background-color: #ccc; ")
    button9.setAttribute("style","background-color: #908989; ")
    button10.setAttribute("style","background-color: #ccc; ")
    divProceso2.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Unidades Terminadas</td>
            <td>Unidades Vendidas</td>
            <td>Inventario Final</td>
            <td>Costo Unitario</td>
            <td>Costo Total del Inventario final de la Produccion Terminada</td>
            </tr>
        </thead>
        <tbody id="myTable2">
            <tr>
                <td>
                    <input class="inputs" id="cedula9_unidadesTerminadas" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula9_unidadesVendidas" placeholder="Escribe algo" type="text" oninput="lessThanExisting(this)" onkeydown="ifZero(this)">
                </td>
                <td>
                    <input class="inputs" id="cedula9_InventarioFinal" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula9_costoUnitario" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula9_costoTotalInventarioFinal" placeholder="Escribe algo" type="text" readonly>
                </td>
            </tr>
        </tbody>
    </table>`

    const elements = ["cedula9_unidadesTerminadas","cedula9_unidadesVendidas"]
    const cedula9_keys = ["cedula5MPD4", "cedula5MOD4", "cedula5CI4", "cedula5SP4"];
    let cedula9_unidadesTerminadas = "0";
    let cedula9_costoUnitario = localStorage.getItem("cedula6Total5") == null ? 0 : localStorage.getItem("cedula6Total5")
    for (let key of cedula9_keys) {
        let val = localStorage.getItem(key);
        if (val != null && val.trim() != "") {
            cedula9_unidadesTerminadas = val;
            break;
        }
    }
    document.getElementById("cedula9_unidadesTerminadas").value = cedula9_unidadesTerminadas
    if(localStorage.getItem("cedula9_unidadesVendidas") != null){
        document.getElementById("cedula9_unidadesVendidas").value = localStorage.getItem("cedula9_unidadesVendidas")
    }
    document.getElementById("cedula9_unidadesVendidas").addEventListener('input',function(){
        localStorage.setItem("cedula9_unidadesVendidas",this.value)
    })   
    
    elements.forEach(element => {
        document.getElementById(element).addEventListener("input", function(){
            let terminadas = document.getElementById(elements[0]).value == null ? 0 : document.getElementById(elements[0]).value
            let vendidas = document.getElementById(elements[1]).value == null ? 0 : document.getElementById(elements[1]).value
            let resultado = Number(terminadas) - Number(vendidas)
            document.getElementById("cedula9_InventarioFinal").value = resultado
            localStorage.setItem("cedula9_InventarioFinal", resultado)

            let costoTotal = formatNumber(cedula9_costoUnitario * resultado)
            document.getElementById("cedula9_costoTotalInventarioFinal").value = costoTotal
            localStorage.setItem("cedula9_costoTotalInventarioFinal",costoTotal)
        })
    })

    if(localStorage.getItem("cedula9_InventarioFinal") != null){
       document.getElementById("cedula9_InventarioFinal").value = localStorage.getItem("cedula9_InventarioFinal")
    }

    if(localStorage.getItem("cedula9_costoTotalInventarioFinal") != null){
       document.getElementById("cedula9_costoTotalInventarioFinal").value = localStorage.getItem("cedula9_costoTotalInventarioFinal")
    }
    
    document.getElementById("cedula9_costoUnitario").value = cedula9_costoUnitario


}

function lessThanExisting(element){
    let existing = document.getElementById("cedula9_unidadesTerminadas").value
    let value = parseInt(element.value);
    
    if (!isNaN(value)) {
        
        if (value > existing) {
            element.value = "";
        } else if (value < 0) {
            element.value = "";
        }
    }
}
function ifZero(element){
    let value = parseInt(element.value);
    if(value == 0){
        element.value = ""
    }
}