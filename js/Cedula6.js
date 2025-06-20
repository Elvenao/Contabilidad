let cedula6_campo1 = ['cedula6MPD1', 'cedula6MPD2', 'cedula6MPD3', 'cedula6MPD4', 'cedula6MPD5']
let cedula6_campo2 = ['cedula6MOD1', 'cedula6MOD2', 'cedula6MOD3', 'cedula6MOD4', 'cedula6MOD5']
let cedula6_campo3 = ['cedula6CI1', 'cedula6CI2', 'cedula6CI3', 'cedula6CI4', 'cedula6CI5']
let cedula6_campo4 = ['cedula6SP1', 'cedula6SP2', 'cedula6SP3', 'cedula6SP4', 'cedula6SP5']
let cedula6_total = ['cedula6Total1', 'cedula6Total2', 'cedula6Total3', 'cedula6Total4', 'cedula6Total5']
let cedula6_nullAux = ['cedula6null1', 'cedula6null2', 'cedula6null3', 'cedula6null4', 'cedula6null5']
let cedula6_nullAux1 = ['cedula60a1', 'cedula60a2', 'cedula60a3', 'cedula60a4', 'cedula60a5']
let cedula6_nullAux2 = ['cedula60b1', 'cedula60b2', 'cedula60b3', 'cedula60b4', 'cedula60b5']
let cedula6_nullAux3 = ['cedula60c1', 'cedula60c2', 'cedula60c3', 'cedula60c4', 'cedula60c5']
let cedula6_nullAux4 = ['cedula60d1', 'cedula60d2', 'cedula60d3', 'cedula60d4', 'cedula60d5']

function CedulaVI(){
    localStorage.setItem("currentCedulaProceso2", "CedulaVI")
    let valuesProceso2
    let divProceso2 = document.getElementById("content2")
    let button5 = document.getElementById("cedula5")
    let button6 = document.getElementById("cedula6")
    let button7 = document.getElementById("cedula7")
    let button8 = document.getElementById("cedula8")
    let button9 = document.getElementById("cedula9")
    let button10 = document.getElementById("cedula10")
    button5.setAttribute("style","background-color: #ccc; ")
    button6.setAttribute("style","background-color: #908989; ")
    button7.setAttribute("style","background-color: #ccc; ")
    button8.setAttribute("style","background-color: #ccc; ")
    button9.setAttribute("style","background-color: #ccc; ")
    button10.setAttribute("style","background-color: #ccc; ")
    divProceso2.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Elemento</td>
            <td>Inventario Inicial de Producción en Proceso</td>
            <td>Costo Incurrido</td>
            <td>Costo Total</td>
            <td>Unidades Equivalentes Totales</td>
            <td>Costo Unitario</td>
            </tr>
        </thead>
        <tbody id="mainTable">
            <tr>
                <td>
                    <select class="inputs cedula6_mySelected" id="cedula6_Select1" name="">
                        <option value="01a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula6_1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula6_1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs cedula6_1" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_1" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_1" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula6_mySelected" id="cedula6_Select4" name="">
                        <option value="01d">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula6_4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula6_4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs cedula6_4" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_4" placeholder="Escribe algo" type="number" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_4" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula6_mySelected" id="cedula6_Select2" name="">
                        <option value="01b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula6_2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula6_2" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula6_2" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_2" placeholder="Escribe algo" type="number" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_2" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula6_mySelected" id="cedula6_Select3" name="">
                        <option value="01c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula6_3" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula6_3" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any"  onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula6_3" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_3" placeholder="Escribe algo" type="number" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula6_3" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <input class='inputs cedula6_5' placeholder="Totales" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula6_5' id="cedula6Total1" placeholder="Total" type="number"  readonly>
                </td>
                <td>
                    <input class='inputs cedula6_5' id="cedula6Total2" placeholder="Total" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula6_5' id="cedula6Total3" placeholder="Total" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula6_5' value="-" id="cedula6Total4" placeholder="-" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula6_5' id="cedula6Total5" placeholder="Total" type="number" readonly>
                </td>
                
            </tr>
            
        </tbody>
    </table>`

    const cedula6_selects = document.querySelectorAll(".cedula6_mySelected");
    cedula6_selects.forEach(select => {
        const storedValue = localStorage.getItem(select.id);
        if (storedValue !== null) {
            // Quitar selected actual
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Buscar la opción con ese value
            const opcion = [...select.options].find(opt => opt.value === storedValue);
            if (opcion) {
                opcion.setAttribute("selected", "selected");
            }
        }
    });
    
    cedula6_selects.forEach(select => {
        localStorage.setItem(select.id, select.value)
        values = Array.from(cedula6_selects).map(s => s.value);
        [...select.options].forEach(option =>{
            if(values.includes(option.value) && option.value != '01a' && option.value != '01b' && option.value != '01c' && option.value != '01d' && !select.value.includes(option.value)){
                option.disabled = true
            }
            else{
                option.disabled = false
            }
        })
        cedula6_asignCampo(cedula6_campo1,"cedula6_Select1",".cedula6_1")
        cedula6_asignCampo(cedula6_campo2,"cedula6_Select2",".cedula6_2")
        cedula6_asignCampo(cedula6_campo3,"cedula6_Select3",".cedula6_3")
        cedula6_asignCampo(cedula6_campo4,"cedula6_Select4",".cedula6_4")
        select.addEventListener('change',()=>{
            localStorage.setItem(select.id, select.value)
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Agregar 'selected' al que fue seleccionado
            const seleccionado = select.options[select.selectedIndex];
            seleccionado.setAttribute("selected", "selected");


            values = Array.from(cedula6_selects).map(s => s.value)
            document.querySelectorAll(".cedula6_mySelected").forEach(element =>{
                [...element.options].forEach(option =>{
                    if(values.includes(option.value) && option.value != '01a' && option.value != '01b' && option.value != '01c' && option.value != '01d' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            cedula6_asignCampo(cedula6_campo1,"cedula6_Select1",".cedula6_1")
            cedula6_asignCampo(cedula6_campo2,"cedula6_Select2",".cedula6_2")
            cedula6_asignCampo(cedula6_campo3,"cedula6_Select3",".cedula6_3")
            cedula6_asignCampo(cedula6_campo4,"cedula6_Select4",".cedula6_4")
            cedula6_onInputRefresh(cedula6_campo1,"cedula6_Select1")
            cedula6_onInputRefresh(cedula6_campo2,"cedula6_Select2")
            cedula6_onInputRefresh(cedula6_campo3,"cedula6_Select3")
            cedula6_onInputRefresh(cedula6_campo4,"cedula6_Select4")
            
        })
        if(localStorage.getItem("cedula6_Select1") != null){
            cedula6_onRefresh(cedula6_campo1)
            cedula6_onRefresh(cedula6_campo2)
            cedula6_onRefresh(cedula6_campo3)
            cedula6_onRefresh(cedula6_campo4)
        }
    })

    cedula6_nullAux.forEach(element =>{
        localStorage.removeItem(element)
    })

    cedula6_nullAux2.forEach(element =>{
        localStorage.removeItem(element)
    })
    cedula6_nullAux3.forEach(element =>{
        localStorage.removeItem(element)
    })
    cedula6_nullAux4.forEach(element =>{
        localStorage.removeItem(element)
    })


    cedula6_onInputRefresh(cedula6_campo1,"cedula6_Select1")
    cedula6_onInputRefresh(cedula6_campo2,"cedula6_Select2")
    cedula6_onInputRefresh(cedula6_campo3,"cedula6_Select3")
    cedula6_onInputRefresh(cedula6_campo4,"cedula6_Select4")

    
    cedula6_onInput(cedula6_campo1,"cedula6_Select1")
    cedula6_onInput(cedula6_campo2,"cedula6_Select2")
    cedula6_onInput(cedula6_campo3,"cedula6_Select3")
    cedula6_onInput(cedula6_campo4,"cedula6_Select4")
}

function cedula6_onInput(campo,Select){
    let UnidadesTerminadas = localStorage.getItem("cedula5"+document.getElementById(Select).value+"5")
    campo.forEach(element =>{
        document.getElementById(element).addEventListener('input', () =>{
            const field1 = document.getElementById(campo[0]).value
            const field2 = document.getElementById(campo[1]).value
            let  field3 = document.getElementById(campo[2])
            const field4 = document.getElementById(campo[3])
            let  field5 = document.getElementById(campo[4])
            if(field1 != null && field2 != null){
                field3.value = Number(field1) + Number(field2)
                localStorage.setItem(campo[2],Number(field1) + Number(field2))
            }else if(field1 != null && field2 == null){
                localStorage.setItem(campo[2],Number(field1))
                field3.value = field1 
            }else if(field1 == null && field2 != null){
                localStorage.setItem(campo[2], Number(field2))
                field3.value = field2
            }
            if(UnidadesTerminadas != null){
                field4.value = UnidadesTerminadas
                localStorage.setItem(campo[3],UnidadesTerminadas)
            }
            if(field4.value != null && field3.value != null){
                let resultAux
                if((Number(field3.value) / Number(field4.value)) == "Infinity"){
                    resultAux = 0
                }else{
                    resultAux = (Number(field3.value) / Number(field4.value))
                }
                field5.value = resultAux
                localStorage.setItem(campo[4], resultAux)
            }
            cedula6_calculateTotales()
        })
    })
}



function cedula6_onInputRefresh(campo,Select){
    
    let UnidadesTerminadas = localStorage.getItem("cedula5"+document.getElementById(Select).value+"5")
    const field1 = document.getElementById(campo[0]).value
    const field2 = document.getElementById(campo[1]).value
    let  field3 = document.getElementById(campo[2])
    const field4 = document.getElementById(campo[3])
    let  field5 = document.getElementById(campo[4])
    if(field1 != null && field2 != null){
        field3.value = Number(field1) + Number(field2)
        localStorage.setItem(campo[2],Number(field1) + Number(field2))
    }else if(field1 != null && field2 == null){
        localStorage.setItem(campo[2],Number(field1))
        field3.value = field1 
    }else if(field1 == null && field2 != null){
        localStorage.setItem(campo[2], Number(field2))
        field3.value = field2
    }
    if(UnidadesTerminadas != null){
        field4.value = UnidadesTerminadas
        localStorage.setItem(campo[3],UnidadesTerminadas)
    }
    if(field4 != null && field3 != null){
        let resultAux
        if(Number(field3.value) / Number(field4.value) == "Infinity"){
            resultAux = 0
        }else{
            resultAux = (Number(field3.value) / Number(field4.value)).toFixed(4)
        }
        field5.value = resultAux
        localStorage.setItem(campo[4], resultAux)
    }
    cedula6_calculateTotales()
}

function cedula6_calculateTotales(){
    let i = 0
    cedula6_total.forEach(element => {
        let resultado
        let monto1 = localStorage.getItem(cedula6_campo1[i])
        let monto2 = localStorage.getItem(cedula6_campo2[i])
        let monto3 = localStorage.getItem(cedula6_campo3[i])
        let monto4 = localStorage.getItem(cedula6_campo4[i])
        if(element != "cedula6Total4"){
            resultado = !isNaN(monto1) ? Number(monto1) : 0
            resultado += !isNaN(monto2) ? Number(monto2) : 0 
            resultado += !isNaN(monto3) ? Number(monto3) : 0
            resultado += !isNaN(monto4) ? Number(monto4) : 0
            document.getElementById(element).value =  resultado
            localStorage.setItem(element,resultado)
        }
        i++
    })
}

function cedula6_onRefresh(campo){
    campo.forEach(element => {
        document.getElementById(element).value = localStorage.getItem(element)
    })
}

function cedula6_onChange(campo){
    campo.forEach(element => {
        document.getElementById(element).addEventListener('input',()=>{
            if(!cedula6_nullAux1.includes(campo[0]) && !cedula6_nullAux2.includes(campo[0]) && !cedula6_nullAux3.includes(campo[0]) && !cedula6_nullAux4.includes(campo[0])){
                localStorage.setItem(element,document.getElementById(element).value)
            }
        })
    })
}

function cedula6_asignCampo(campo,Select,campoClass){
    let j = 0
    for(let i = 0; i < campo.length; i++){
        campo[i] = "cedula6" + localStorage.getItem(Select) + Number(i+1)
    }
    if(localStorage.getItem(campo[0]) == null){
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            
            if(!cedula6_nullAux1.includes(campo[0]) && !cedula6_nullAux2.includes(campo[0]) && !cedula6_nullAux3.includes(campo[0]) && !cedula6_nullAux4.includes(campo[0])){
                localStorage.setItem(campo[j],element.value)
            }else{
                element.value = ''
            }
            
            j++
        })
    }else {
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            j++
        })
        campo.forEach(element => {
            if(localStorage.getItem(element) === null){
                console.log("GOLADFLADf")
                document.getElementById(element).value = '' ;
            }else{
                document.getElementById(element).value = localStorage.getItem(element);
            }
        })
    }
    cedula6_onChange(campo)
}

function enforceMinMax(element) {
    let value = parseFloat(element.value);
    if (!isNaN(value)) {
        if (value > 1) {
            element.value = 1;
        } else if (value < 0) {
            element.value = 0;
        }
    }
}