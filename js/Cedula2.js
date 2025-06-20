let cedula2_campo1 = ['cedula2MPD1', 'cedula2MPD2', 'cedula2MPD3', 'cedula2MPD4', 'cedula2MPD5']
let cedula2_campo2 = ['cedula2MOD1', 'cedula2MOD2', 'cedula2MOD3', 'cedula2MOD4', 'cedula2MOD5']
let cedula2_campo3 = ['cedula2CI1', 'cedula2CI2', 'cedula2CI3', 'cedula2CI4', 'cedula2CI5']
let cedula2_total = ['cedula2Total1', 'cedula2Total2', 'cedula2Total3', 'cedula2Total4', 'cedula2Total5']
let cedula2_nullAux = ['cedula2null1', 'cedula2null2', 'cedula2null3', 'cedula2null4', 'cedula2null5']
let cedula2_nullAux1 = ['cedula20a1', 'cedula20a2', 'cedula20a3', 'cedula20a4', 'cedula20a5']
let cedula2_nullAux2 = ['cedula20b1', 'cedula20b2', 'cedula20b3', 'cedula20b4', 'cedula20b5']
let cedula2_nullAux3 = ['cedula20c1', 'cedula20c2', 'cedula20c3', 'cedula20c4', 'cedula20c5']

function CedulaII(){
    localStorage.setItem("currentCedula", "CedulaII")
    let div = document.getElementById("content")
    let button = document.getElementById("cedula1")
    let button2 = document.getElementById("cedula2")
    let button3 = document.getElementById("cedula3")
    let button4 = document.getElementById("cedula4")
    button.setAttribute("style","background-color: #ccc; ")
    button2.setAttribute("style","background-color: #908989; ")
    button3.setAttribute("style","background-color: #ccc; ")
    button4.setAttribute("style","background-color: #ccc; ")
    div.innerHTML = `<table id="myTable">
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
                    <select class="inputs cedula2_mySelected" id="cedula2_Select1" name="">
                        <option value="0a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula2_1" placeholder="Escribe algo" type="number" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula2_1" placeholder="Escribe algo" type="number" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula2_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula2_1" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula2_1" placeholder="Escribe algo" type="number" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula2_mySelected" id="cedula2_Select2" name="">
                        <option value="0b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula2_2" placeholder="Escribe algo" type="number" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula2_2" placeholder="Escribe algo" type="number" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula2_2" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula2_2" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula2_2" placeholder="Escribe algo" type="number" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula2_mySelected" id="cedula2_Select3" name="">
                        <option value="0c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula2_3" placeholder="Escribe algo" type="number" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula2_3" placeholder="Escribe algo" type="number" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula2_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula2_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula2_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <input class='inputs cedula2_4' placeholder="Totales" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula2_4' id="cedula2Total1" placeholder="Total" type="number"  readonly>
                </td>
                <td>
                    <input class='inputs cedula2_4' id="cedula2Total2" placeholder="Total" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula2_4' id="cedula2Total3" placeholder="Total" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula2_4' value="-" id="cedula2Total4" placeholder="-" type="number" readonly>
                </td>
                <td>
                    <input class='inputs cedula2_4' id="cedula2Total5" placeholder="Total" type="number" readonly>
                </td>
                
            </tr>
        </tbody>
    </table>`

    const selects = document.querySelectorAll(".cedula2_mySelected");
    selects.forEach(select => {
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
    
    selects.forEach(select => {
        localStorage.setItem(select.id, select.value)
        values = Array.from(selects).map(s => s.value);
        [...select.options].forEach(option =>{
            if(values.includes(option.value) && option.value != '0a' && option.value != '0b' && option.value != '0c' && !select.value.includes(option.value)){
                option.disabled = true
            }
            else{
                option.disabled = false
            }
        })
        
        cedula2_asignCampo(cedula2_campo1,"cedula2_Select1",".cedula2_1")
        cedula2_asignCampo(cedula2_campo2,"cedula2_Select2",".cedula2_2")
        cedula2_asignCampo(cedula2_campo3,"cedula2_Select3",".cedula2_3")
        select.addEventListener('change',()=>{
            localStorage.setItem(select.id, select.value)
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Agregar 'selected' al que fue seleccionado
            const seleccionado = select.options[select.selectedIndex];
            seleccionado.setAttribute("selected", "selected");


            values = Array.from(selects).map(s => s.value)
            document.querySelectorAll(".cedula2_mySelected").forEach(element =>{
                [...element.options].forEach(option =>{
                    if(values.includes(option.value) && option.value != '0a' && option.value != '0b' && option.value != '0c' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            cedula2_asignCampo(cedula2_campo1,"cedula2_Select1",".cedula2_1")
            cedula2_asignCampo(cedula2_campo2,"cedula2_Select2",".cedula2_2")
            cedula2_asignCampo(cedula2_campo3,"cedula2_Select3",".cedula2_3")
            cedula2_onInputRefresh(cedula2_campo1,"cedula2_Select1")
            cedula2_onInputRefresh(cedula2_campo2,"cedula2_Select2")
            cedula2_onInputRefresh(cedula2_campo3,"cedula2_Select3")
            
        })
        if(localStorage.getItem("cedula2_Select1") != null){
            cedula2_onRefresh(cedula2_campo1)
            cedula2_onRefresh(cedula2_campo2)
            cedula2_onRefresh(cedula2_campo3)
        }
    })

    cedula2_nullAux.forEach(element =>{
        localStorage.removeItem(element)
    })

    cedula2_onInputRefresh(cedula2_campo1,"cedula2_Select1")
    cedula2_onInputRefresh(cedula2_campo2,"cedula2_Select2")
    cedula2_onInputRefresh(cedula2_campo3,"cedula2_Select3")

    
    cedula2_onInput(cedula2_campo1,"cedula2_Select1")
    cedula2_onInput(cedula2_campo2,"cedula2_Select2")
    cedula2_onInput(cedula2_campo3,"cedula2_Select3")

}

function cedula2_onInput(campo,Select){
    let UnidadesTerminadas = localStorage.getItem("cedula1"+document.getElementById(Select).value+"5")
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
                if(Number(field3.value) / Number(field4.value) == "Infinity"){
                    resultAux = 0
                }else{
                    resultAux = (Number(field3.value) / Number(field4.value)).toFixed(4)
                }
                if(isNaN(resultAux)){
                    resultAux = 0
                    
                }
                field5.value = resultAux
                localStorage.setItem(campo[4], resultAux)
            }
            cedula2_calculateTotales()
        })
    })
}



function cedula2_onInputRefresh(campo,Select){
    let UnidadesTerminadas = localStorage.getItem("cedula1"+document.getElementById(Select).value+"5")
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
        if(isNaN(resultAux)){
            resultAux = 0
            
        }
        field5.value = resultAux
        localStorage.setItem(campo[4], resultAux)
    }
    cedula2_calculateTotales()
}

function cedula2_calculateTotales(){
    let i = 0
    cedula2_total.forEach(element => {
        let resultado
        let monto1 = localStorage.getItem(cedula2_campo1[i])
        let monto2 = localStorage.getItem(cedula2_campo2[i])
        let monto3 = localStorage.getItem(cedula2_campo3[i])
        if(element != "cedula2Total4" && element != "cedula2Total3"){
            resultado = !isNaN(monto1) ? Number(monto1) : 0
            resultado += !isNaN(monto2) ? Number(monto2) : 0 
            resultado += !isNaN(monto3) ? Number(monto3) : 0
            console.log(element)
            document.getElementById(element).value =  resultado
            localStorage.setItem(element,resultado)
        }else if(element == "cedula2Total3"){
            
            monto1 = localStorage.getItem(cedula2_campo1[i])
            monto2 = localStorage.getItem(cedula2_campo2[i])
            monto3 = localStorage.getItem(cedula2_campo3[i])
            
            resultado = !isNaN(monto1) ? Number(monto1) : 0
            resultado += !isNaN(monto2) ? Number(monto2) : 0 
            resultado += !isNaN(monto3) ? Number(monto3) : 0
            document.getElementById(element).value =  resultado
            localStorage.setItem(element,resultado)

        }
        i++
    })
}

function cedula2_onRefresh(campo){
    campo.forEach(element => {
        document.getElementById(element).value = localStorage.getItem(element)
    })
}

function cedula2_onChange(campo){
    campo.forEach(element => {
        document.getElementById(element).addEventListener('input',()=>{
            if(!cedula2_nullAux1.includes(campo[0]) && !cedula2_nullAux2.includes(campo[0]) && !cedula2_nullAux3.includes(campo[0])){
                localStorage.setItem(element,document.getElementById(element).value)
            }
        })
    })
}

function cedula2_asignCampo(campo,Select,campoClass){
    let j = 0
    for(let i = 0; i < campo.length; i++){
        campo[i] = "cedula2" + localStorage.getItem(Select) + Number(i+1)
    }
    if(localStorage.getItem(campo[0]) == null){
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            
            if(!cedula2_nullAux1.includes(campo[0]) && !cedula2_nullAux2.includes(campo[0]) && !cedula2_nullAux3.includes(campo[0])){
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
                document.getElementById(element).value = '' ;
            }else{
                document.getElementById(element).value = localStorage.getItem(element);
            }
        })
    }
    cedula2_onChange(campo)
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