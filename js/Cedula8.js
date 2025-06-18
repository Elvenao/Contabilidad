function CedulaVIII(){
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
    button8.setAttribute("style","background-color: #908989; ")
    button9.setAttribute("style","background-color: #ccc; ")
    button10.setAttribute("style","background-color: #ccc; ")
    divProceso2.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Unidades Terminadas</td>
            <td>Costo Unitario</td>
            <td>Costo de la Producción Terminada</td>
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
            </tr>
        </tbody>
    </table>`
    
    let cedula8_unidadesTerminadas = localStorage.getItem("cedula5MPD4") == null ? 0 : localStorage.getItem("cedula5MPD4")
    let cedula8_costoUnitario = localStorage.getItem("cedula7Total5") == null ? 0 : localStorage.getItem("cedula7Total5")
    document.getElementById("unidadesTerminadas").value = cedula8_unidadesTerminadas
    document.getElementById("costoUnitario").value = costoUnitario == "Infinity" ? 0 : costoUnitario
    let resultado = Number(unidadesTerminadas) * Number(costoUnitario)
    document.getElementById("costoProduccionTerminada").value = resultado == "Infinity" ? 0 : resultado
}