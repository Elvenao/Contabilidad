function CedulaIV(){
    localStorage.setItem("currentCedula", "CedulaIV")
    let div = document.getElementById("content")
    let button = document.getElementById("cedula1")
    let button2 = document.getElementById("cedula2")
    let button3 = document.getElementById("cedula3")
    let button4 = document.getElementById("cedula4")
    button.setAttribute("style","background-color: #ccc; ")
    button2.setAttribute("style","background-color: #ccc; ")
    button3.setAttribute("style","background-color: #ccc; ")
    button4.setAttribute("style","background-color: #908989; ")
    div.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Unidades Terminadas</td>
            <td>Costo Unitario</td>
            <td>Costo de la Producción Terminada</td>
            </tr>
        </thead>
        <tbody id="mainTable">
            <tr>
                <td>
                    <input class="inputs" id="unidadesTerminadas" placeholder="Escribe algo" type="text" id="campo1" readonly>
                </td>
                <td>
                    <input class="inputs" id="costoUnitario" placeholder="Escribe algo" type="text" id="campo1" readonly>
                </td>
                <td>
                    <input class="inputs" id="costoProduccionTerminada" placeholder="Escribe algo" type="text" id="campo1" readonly>
                </td>
            </tr>
        </tbody>
    </table>`
    
    let unidadesTerminadas = localStorage.getItem("cedula1MPD4") == null ? 0 : localStorage.getItem("cedula1MPD4")
    let costoUnitario = localStorage.getItem("cedula2Total5") == null ? 0 : localStorage.getItem("cedula2Total5")
    document.getElementById("unidadesTerminadas").value = unidadesTerminadas
    document.getElementById("costoUnitario").value = costoUnitario == "Infinity" ? 0 : costoUnitario
    let resultado = Number(unidadesTerminadas) * Number(costoUnitario)
    document.getElementById("costoProduccionTerminada").value = resultado == "Infinity" ? 0 : resultado
}