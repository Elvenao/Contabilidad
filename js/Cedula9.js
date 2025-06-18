function CedulaIX(){
    localStorage.setItem("currentCedulaProceso2", "CedulaVIII")
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
                    <input class="inputs" id="cedula8_unidadesTerminadas" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula8_costoUnitario" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula8_costoProduccionTerminada" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula8_costoProduccionTerminada" placeholder="Escribe algo" type="text" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula8_costoProduccionTerminada" placeholder="Escribe algo" type="text" readonly>
                </td>
            </tr>
        </tbody>
    </table>`
    
    
}