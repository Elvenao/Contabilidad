let cedula5_campo1 = ['cedula5MPD1', 'cedula5MPD2', 'cedula5MPD3', 'cedula5MPD4', 'cedula5MPD5']
let cedula5_campo2 = ['cedula5MOD1', 'cedula5MOD2', 'cedula5MOD3', 'cedula5MOD4', 'cedula5MOD5']
let cedula5_campo3 = ['cedula5CI1', 'cedula5CI2', 'cedula5CI3', 'cedula5CI4', 'cedula5CI5']
let cedula5_campo4 = ['cedula5SP1', 'cedula5SP2', 'cedula5SP3', 'cedula5SP4', 'cedula5SP5']
let cedula5_nullAux = ['cedula5null1', 'cedula5null2', 'cedula5null3', 'cedula5null4', 'cedula5null5']
let cedula5_nullAux1 = ['cedula501a1', 'cedula501a2', 'cedula501a3', 'cedula501a4', 'cedula501a5']
let cedula5_nullAux2 = ['cedula501b1', 'cedula501b2', 'cedula501b3', 'cedula501b4', 'cedula501b5']
let cedula5_nullAux3 = ['cedula501c1', 'cedula501c2', 'cedula501c3', 'cedula501c4', 'cedula501c5']
let cedula5_nullAux4 = ['cedula501d1', 'cedula501d2', 'cedula501d3', 'cedula501d4', 'cedula501d5']
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
                    <select class="inputs mySelected2" id="cedula5_Select1" name="">
                        <option value="01a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula5_1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs cedula5_1" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula5_1" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_1" id="campo" value="0" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected2" id="cedula5_Select4" name="">
                        <option value="01d">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula5_4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input  class="inputs cedula5_4" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula5_4" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_4" id="campo" value="0" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected2" id="cedula5_Select2" name="">
                        <option value="01b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula5_2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_2" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_2" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula5_2" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_2" id="campo" value="0" readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs mySelected2" id="cedula5_Select3" name="">
                        <option value="01c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="SP">Semiproducto</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula5_3" placeholder="Escribe algo" type="number" id="campo" min="0" step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_3" placeholder="Escribe algo" type="number" id="campo" min="0" max="1" step="any" oninput="enforceMinMax(this)" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_3" id="campo" value="-" readonly>
                </td>
                <td>
                    <input class="inputs cedula5_3" placeholder="Escribe algo" type="number" id="campo" min="0"  step="any" onkeydown="if(event.key === '-' || event.key === 'e'){event.preventDefault();}">
                </td>
                <td>
                    <input class="inputs cedula5_3" id="campo" value="0" readonly>
                </td>
                
            </tr>
            
        </tbody>
    </table>
    `
    //Metodo para poner el atributo selected al option seleccionado
    const cedula5_selects = document.querySelectorAll(".mySelected2");
    cedula5_selects.forEach(select => {
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
    cedula5_selects.forEach(select => {
        localStorage.setItem(select.id, select.value)
        values = Array.from(cedula5_selects).map(s => s.value);
        [...select.options].forEach(option =>{
            if(values.includes(option.value) && option.value != '01a' && option.value != '01b' && option.value != '01c' && option.value != '01d' && !select.value.includes(option.value)){
                option.disabled = true
            }
            else{
                option.disabled = false
            }
        })
        CedulaV_asignCampo(cedula5_campo1,"cedula5_Select1",".cedula5_1")
        CedulaV_asignCampo(cedula5_campo2,"cedula5_Select2",".cedula5_2")
        CedulaV_asignCampo(cedula5_campo3,"cedula5_Select3",".cedula5_3")
        CedulaV_asignCampo(cedula5_campo4,"cedula5_Select4",".cedula5_4")
        select.addEventListener('change',()=>{
            localStorage.setItem(select.id, select.value)
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Agregar 'selected' al que fue seleccionado
            const seleccionado = select.options[select.selectedIndex];
            seleccionado.setAttribute("selected", "selected");


            values = Array.from(cedula5_selects).map(s => s.value)
            document.querySelectorAll(".mySelected2").forEach(element =>{
                [...element.options].forEach(option =>{
                    if(values.includes(option.value) && option.value != '01a' && option.value != '01b' && option.value != '01c' && option.value != '01d' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            CedulaV_asignCampo(cedula5_campo1,"cedula5_Select1",".cedula5_1")
            CedulaV_asignCampo(cedula5_campo2,"cedula5_Select2",".cedula5_2")
            CedulaV_asignCampo(cedula5_campo3,"cedula5_Select3",".cedula5_3")
            CedulaV_asignCampo(cedula5_campo4,"cedula5_Select4",".cedula5_4")
            CedulaV_onInputRefresh(cedula5_campo1)
            CedulaV_onInputRefresh(cedula5_campo2)
            CedulaV_onInputRefresh(cedula5_campo3)
            CedulaV_onInputRefresh(cedula5_campo4)
            
        })
        if(localStorage.getItem("cedula5_Select1") != null){
            CedulaV_onRefresh(cedula5_campo1)
            CedulaV_onRefresh(cedula5_campo2)
            CedulaV_onRefresh(cedula5_campo3)
            CedulaV_onRefresh(cedula5_campo4)
        }
    })

    cedula5_nullAux.forEach(element =>{
        localStorage.removeItem(element)
    })
    cedula5_nullAux1.forEach(element =>{
        localStorage.removeItem(element)
    })
    cedula5_nullAux2.forEach(element =>{
        localStorage.removeItem(element)
    })
    cedula5_nullAux3.forEach(element =>{
        localStorage.removeItem(element)
    })
    cedula5_nullAux4.forEach(element =>{
        localStorage.removeItem(element)
    })


    CedulaV_onRefresh(cedula5_campo1)
    CedulaV_onRefresh(cedula5_campo2)
    CedulaV_onRefresh(cedula5_campo3)
    CedulaV_onRefresh(cedula5_campo4)

    
    CedulaV_onInput(cedula5_campo1)
    CedulaV_onInput(cedula5_campo2)
    CedulaV_onInput(cedula5_campo3)
    CedulaV_onInput(cedula5_campo4)
    cedula5_unidadesTerminadasIguales()
}

/*
    Metodo para calcular los resultados calculables cuando haya un evento de tipo input en los elementos <input>
*/
function CedulaV_onInput(campo){
    campo.forEach(element =>{
        document.getElementById(element).addEventListener('input', () =>{
            const field1 = document.getElementById(campo[0]).value == null ? 0: Number(document.getElementById(campo[0]).value)
            const field2 = document.getElementById(campo[1]).value == null ? 0: Number(document.getElementById(campo[1]).value)
            let  field3 = document.getElementById(campo[2])
            const field4 = document.getElementById(campo[3]).value == null ? 0: Number(document.getElementById(campo[3]).value)
            let  field5 = document.getElementById(campo[4])
            
            field3.value = formatNumber(field1 * field2)
            localStorage.setItem(campo[2], formatNumber(field1 * field2))
            field5.value = Number(field3.value) + Number(field4)
            localStorage.setItem(campo[4], Number(field3.value) + Number(field4))
        })
    })
}
/*
    Metodo para calcular los resultados cuando el boton Cedula I haya sido presionado
*/
function CedulaV_onInputRefresh(campo){
    const field1 = document.getElementById(campo[0]).value == null ? 0: Number(document.getElementById(campo[0]).value)
    const field2 = document.getElementById(campo[1]).value == null ? 0: Number(document.getElementById(campo[1]).value)
    let  field3 = document.getElementById(campo[2])
    const field4 = document.getElementById(campo[3]).value == null ? 0: Number(document.getElementById(campo[3]).value)
    let  field5 = document.getElementById(campo[4])
    
    field3.value = formatNumber(field1 * field2)
    localStorage.setItem(campo[2], formatNumber(field1 * field2))
    field5.value = Number(field3.value) + Number(field4)
    localStorage.setItem(campo[4], Number(field3.value) + Number(field4)) 
}

/*
    Metodo para crear un Item en localStorage para todos los inputs de manera automatica
*/

function CedulaV_onRefresh(campo){
    campo.forEach(element => {
        document.getElementById(element).value = localStorage.getItem(element)
    })
}

/*
    Metodo para actualizar los items de los inputs cuando haya un evento de tipo input
 */

function CedulaV_onChange(campo){
    campo.forEach(element => {
        document.getElementById(element).addEventListener('input',()=>{
            if(!cedula5_nullAux1.includes(campo[0]) && !cedula5_nullAux2.includes(campo[0]) && !cedula5_nullAux3.includes(campo[0]) && !cedula5_nullAux4.includes(campo[0])){
                localStorage.setItem(element,document.getElementById(element).value)
            }
        })
    })
}
/*
    Metodo para asignarles de forma automatica el id a los inputs de acuerdo al option seleccionado, ademas de inicializar el 
    item en localStorage con key igual a su id
*/
function CedulaV_asignCampo(campo,Select,campoClass){
    let j = 0
    for(let i = 0; i < campo.length; i++){
        campo[i] = "cedula5" + localStorage.getItem(Select) + Number(i+1)
    }
    if(localStorage.getItem(campo[0]) == null){
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            
            if(!cedula5_nullAux1.includes(campo[0]) && !cedula5_nullAux2.includes(campo[0]) && !cedula5_nullAux3.includes(campo[0])){
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
    CedulaV_onChange(campo)
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

function formatNumber(num) {
  num = Number(num); // convierte string u otro a número
  if (isNaN(num)) return 0; // o null, o lo que desees si no es válido
  return parseFloat(num.toFixed(4));
}

function cedula5_unidadesTerminadasIguales(){
    const unidades = ["cedula5MPD4","cedula5MOD4","cedula5CI4", "cedula5SP4"]
    let bloqueado = false;

    unidades.forEach((element) => {
        document.getElementById(element).addEventListener('input', () => {
            if (bloqueado) return;

            bloqueado = true;
            const nuevoValor = document.getElementById(element).value;

            unidades.forEach((otroId) => {
                document.getElementById(otroId).value = nuevoValor;
                localStorage.setItem(otroId, nuevoValor);

                // Solo disparar input si no es el mismo que lo originó
                if (otroId !== element) {
                    document.getElementById(otroId).dispatchEvent(new Event("input", { bubbles: true }));
                }
            });

            bloqueado = false;
        });
    });
}