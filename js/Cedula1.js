let campo1 = ['cedula1MPD1', 'cedula1MPD2', 'cedula1MPD3', 'cedula1MPD4', 'cedula1MPD5']
let campo2 = ['cedula1MOD1', 'cedula1MOD2', 'cedula1MOD3', 'cedula1MOD4', 'cedula1MOD5']
let campo3 = ['cedula1CI1', 'cedula1CI2', 'cedula1CI3', 'cedula1CI4', 'cedula1CI5']
let nullAux = ['cedula1null1', 'cedula1null2', 'cedula1null3', 'cedula1null4', 'cedula1null5']
let nullAux1 = ['cedula10a1', 'cedula10a2', 'cedula10a3', 'cedula10a4', 'cedula10a5']
let nullAux2 = ['cedula10b1', 'cedula10b2', 'cedula10b3', 'cedula10b4', 'cedula10b5']
let nullAux3 = ['cedula10c1', 'cedula10c2', 'cedula10c3', 'cedula10c4', 'cedula10c5']
function CedulaI(){
    localStorage.setItem("currentCedula", "CedulaI")
    let valuesProceso2 
    let contadorProceso2 = 1
    let div = document.getElementById("content")
    let button = document.getElementById("cedula1")
    let button2 = document.getElementById("cedula2")
    let button3 = document.getElementById("cedula3")
    let button4 = document.getElementById("cedula4")
    button.setAttribute("style","background-color: #908989; ")
    button2.setAttribute("style","background-color: #ccc; ")
    button3.setAttribute("style","background-color: #ccc; ")
    button4.setAttribute("style","background-color: #ccc; ")
    
    div.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Elemento</td>
            <td style="width:18vw;">Unidades de Inventario Final de Produccion en Proceso</td>
            <td>% Grado de Avance</td>
            <td style="width:20vw;">Unidades Equivalentes de Inventario Final de Producción en Proceso</td>
            <td>Unidades Terminadas</td>
            <td>Unidades Equivalentes Totales</td>
            
            </tr>
        </thead>
        <tbody id="mainTable">
            <tr>
                <td>
                    <select class="inputs mySelected" id="Select1" name="">
                        <option value="0a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs campo1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs campo1" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs campo1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo1" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected" id="Select2" name="">
                        <option value="0b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs campo2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo2" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo2" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs campo2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo2" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected" id="Select3" name="">
                        <option value="0c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs campo3" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo3" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo3" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs campo3" placeholder="Escribe algo" type="number" id="campo" min="0"  step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs campo3" id="campo" value="-" readonly>
                </td>
                
            </tr>
            
        </tbody>
    </table>
    `
    //Metodo para poner el atributo selected al option seleccionado
    const selects = document.querySelectorAll(".mySelected");
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
    //Metodo para desactivar los options que hayan sido seleccionados cuando haya cambios
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
        asignCampo(campo1,"Select1",".campo1")
        asignCampo(campo2,"Select2",".campo2")
        asignCampo(campo3,"Select3",".campo3")
        select.addEventListener('change',()=>{
            localStorage.setItem(select.id, select.value)
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Agregar 'selected' al que fue seleccionado
            const seleccionado = select.options[select.selectedIndex];
            seleccionado.setAttribute("selected", "selected");


            values = Array.from(selects).map(s => s.value)
            document.querySelectorAll(".mySelected").forEach(element =>{
                [...element.options].forEach(option =>{
                    if(values.includes(option.value) && option.value != '0a' && option.value != '0b' && option.value != '0c' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            asignCampo(campo1,"Select1",".campo1")
            asignCampo(campo2,"Select2",".campo2")
            asignCampo(campo3,"Select3",".campo3")
            onInputRefresh(campo1)
            onInputRefresh(campo2)
            onInputRefresh(campo3)
            
        })
        if(localStorage.getItem("Select1") != null){
            onRefresh(campo1)
            onRefresh(campo2)
            onRefresh(campo3)
        }
    })

    nullAux.forEach(element =>{
        localStorage.removeItem(element)
    })
    onInputRefresh(campo1)
    onInputRefresh(campo2)
    onInputRefresh(campo3)

    
    onInput(campo1)
    onInput(campo2)
    onInput(campo3)
}

/*
    Metodo para calcular los resultados calculables cuando haya un evento de tipo input en los elementos <input>
*/
function onInput(campo){
    campo.forEach(element =>{
        document.getElementById(element).addEventListener('input', () =>{
            const field1 = document.getElementById(campo[0]).value
            const field2 = document.getElementById(campo[1]).value
            let  field3 = document.getElementById(campo[2])
            const field4 = document.getElementById(campo[3]).value
            let  field5 = document.getElementById(campo[4])
            if(field1 != null && field2 != null){
                field3.value = formatNumber(field1 * field2)
                localStorage.setItem(campo[2], formatNumber(field1 * field2))
            }else field3.value = '-'

            if(field3 != '-' && field4 != null){
                field5.value = Number(field3.value) + Number(field4)
                localStorage.setItem(campo[4], Number(field3.value) + Number(field4))
            }else if(field4 != null){
                field5.value = Number(field4)
                localStorage.setItem(campo[4], Number(field4))
            }else if(field3.value != '-'){
                field5.value = Number(field3.value)
                localStorage.setItem(campo[4], Number(field3.value))
            }else{
                field5.value = '-'
            }
        })
    })
}
/*
    Metodo para calcular los resultados cuando el boton Cedula I haya sido presionado
*/
function onInputRefresh(campo){
    const field1 = document.getElementById(campo[0]).value
    const field2 = document.getElementById(campo[1]).value
    let  field3 = document.getElementById(campo[2])
    const field4 = document.getElementById(campo[3]).value
    let  field5 = document.getElementById(campo[4])
    if(field1 != null && field2 != null){
        field3.value = formatNumber(field1 * field2)
    }else field3.value = '-'

    if(field3 != '-' && field4 != null){
        field5.value = Number(field3.value) + Number(field4)
        localStorage.setItem(campo[4], Number(field3.value) + Number(field4))
    }else if(field4 != null){
        field5.value = Number(field4)
        localStorage.setItem(campo[4], Number(field4))
    }else if(field3.value != '-'){
        field5.value = Number(field3)
        localStorage.setItem(campo[4], Number(field3))
    }else{
        field5.value = '-'
    }
}

/*
    Metodo para crear un Item en localStorage para todos los inputs de manera automatica
*/

function onRefresh(campo){
    campo.forEach(element => {
        document.getElementById(element).value = localStorage.getItem(element)
    })
}

/*
    Metodo para actualizar los items de los inputs cuando haya un evento de tipo input
 */

function onChange(campo){
    campo.forEach(element => {
        document.getElementById(element).addEventListener('input',()=>{
            if(!nullAux1.includes(campo[0]) && !nullAux2.includes(campo[0]) && !nullAux3.includes(campo[0])){
                localStorage.setItem(element,document.getElementById(element).value)
            }
        })
    })
}
/*
    Metodo para asignarles de forma automatica el id a los inputs de acuerdo al option seleccionado, ademas de inicializar el 
    item en localStorage con key igual a su id
*/
function asignCampo(campo,Select,campoClass){
    let j = 0
    for(let i = 0; i < campo.length; i++){
        campo[i] = "cedula1" + localStorage.getItem(Select) + Number(i+1)
    }
    if(localStorage.getItem(campo[0]) == null){
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            
            if(!nullAux1.includes(campo[0]) && !nullAux2.includes(campo[0]) && !nullAux3.includes(campo[0])){
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
        console.log()
        campo.forEach(element => {
            if(localStorage.getItem(element) === null){
                document.getElementById(element).value = '' ;
            }else{
                document.getElementById(element).value = localStorage.getItem(element);
            }
        })
    }
    onChange(campo)
}

/*
    Metodo para no aceptar numeros negativos ni numeros mayores a 0 para el grado de avance
*/

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