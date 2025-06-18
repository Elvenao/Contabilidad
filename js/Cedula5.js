let proceso2_cedula5_campo1 = ['cedula5MPD1', 'cedula5MPD2', 'cedula5MPD3', 'cedula5MPD4', 'cedula5MPD5']
let proceso2_cedula5_campo2 = ['cedula5MOD1', 'cedula5MOD2', 'cedula5MOD3', 'cedula5MOD4', 'cedula5MOD5']
let proceso2_cedula5_campo3 = ['cedula5CI1', 'cedula5CI2', 'cedula5CI3', 'cedula5CI4', 'cedula5CI5']
let proceso2_cedula5_campo4 = ['cedula5SP1', 'cedula5SP2', 'cedula5SP3', 'cedula5SP4', 'cedula5SP5']
let proceso2_cedula5_nullAux = ['cedula5null1', 'cedula5null2', 'cedula5null3', 'cedula5null4', 'cedula5null5']
let proceso2_cedula5_nullAux1 = ['cedula50a1', 'cedula50a2', 'cedula50a3', 'cedula50a4', 'cedula50a5']
let proceso2_cedula5_nullAux2 = ['cedula50b1', 'cedula50b2', 'cedula50b3', 'cedula50b4', 'cedula50b5']
let proceso2_cedula5_nullAux3 = ['cedula50c1', 'cedula50c2', 'cedula50c3', 'cedula50c4', 'cedula50c5']
let proceso2_cedula5_nullAux4 = ['cedula50d1', 'cedula50d2', 'cedula50d3', 'cedula50d4', 'cedula50d5']
function CedulaV(){
    localStorage.setItem("currentCedulaProceso2", "CedulaV")
    let valuesProceso2
    let divProceso2 = document.getElementById("content2")
    let button5 = document.getElementById("cedula5")
    let button6 = document.getElementById("cedula6")
    let button7 = document.getElementById("cedula7")
    let button8 = document.getElementById("cedula8")
    let button9 = document.getElementById("cedula9")
    let button10 = document.getElementById("cedula10")
    button5.setAttribute("style","background-color: #908989; ")
    button6.setAttribute("style","background-color: #ccc; ")
    button7.setAttribute("style","background-color: #ccc; ")
    button8.setAttribute("style","background-color: #ccc; ")
    button9.setAttribute("style","background-color: #ccc; ")
    button10.setAttribute("style","background-color: #ccc; ")
    
    divProceso2.innerHTML = `<table id="myTable2">
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
                    <select class="inputs mySelected2" id="Proceso2_Select1" name="">
                        <option value="0a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs Proceso2_campo1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs Proceso2_campo1" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs Proceso2_campo1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo1" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected2" id="Proceso2_Select4" name="">
                        <option value="0d">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs Proceso2_campo4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs Proceso2_campo4" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs Proceso2_campo4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo4" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected2" id="Proceso2_Select2" name="">
                        <option value="0b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs Proceso2_campo2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo2" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo2" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs Proceso2_campo2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo2" id="campo" value="-" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected2" id="Proceso2_Select3" name="">
                        <option value="0c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs Proceso2_campo3" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo3" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo3" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs Proceso2_campo3" placeholder="Escribe algo" type="number" id="campo" min="0"  step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs Proceso2_campo3" id="campo" value="-" readonly>
                </td>
                
            </tr>
            
        </tbody>
    </table>
    `
    //Metodo para poner el atributo selected al option seleccionado
    const selects = document.querySelectorAll(".mySelected2");
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
            if(values.includes(option.value) && option.value != '0a' && option.value != '0b' && option.value != '0c' && option.value != '0d' && !select.value.includes(option.value)){
                option.disabled = true
            }
            else{
                option.disabled = false
            }
        })
        asignCampo(proceso2_cedula5_campo1,"Proceso2_Select1",".Proceso2_campo1")
        asignCampo(proceso2_cedula5_campo2,"Proceso2_Select2",".Proceso2_campo2")
        asignCampo(proceso2_cedula5_campo3,"Proceso2_Select3",".Proceso2_campo3")
        asignCampo(proceso2_cedula5_campo4,"Proceso2_Select3",".Proceso2_campo4")
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
                    if(values.includes(option.value) && option.value != '0' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            asignCampo(proceso2_cedula5_campo1,"Proceso2_Select1",".Proceso2_campo1")
            asignCampo(proceso2_cedula5_campo2,"Proceso2_Select2",".Proceso2_campo2")
            asignCampo(proceso2_cedula5_campo3,"Proceso2_Select3",".Proceso2_campo3")
            asignCampo(proceso2_cedula5_campo4,"Proceso2_Select3",".Proceso2_campo4")
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
                field3.value = (field1 * field2).toFixed(4)
                localStorage.setItem(campo[2], Math.floor(field1 * field2))
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
        field3.value = field1 * field2
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