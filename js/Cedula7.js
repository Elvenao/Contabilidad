let cedula7_campo1 = ['cedula7MPD1', 'cedula7MPD2', 'cedula7MPD3']
let cedula7_campo2 = ['cedula7MOD1', 'cedula7MOD2', 'cedula7MOD3']
let cedula7_campo3 = ['cedula7CI1', 'cedula7CI2', 'cedula7CI3']
let cedula7_nullAux = ['cedula7null1', 'cedula7null2', 'cedula7null3', 'cedula7null4', 'cedula7null5']
let cedula7_nullAux1 = ['cedula70a1', 'cedula70a2', 'cedula70a3']
let cedula7_nullAux2 = ['cedula70b1', 'cedula70b2', 'cedula70b3']
let cedula7_nullAux3 = ['cedula70c1', 'cedula70c2', 'cedula70c3']


function CedulaVII(){
    localStorage.setItem("currentCedulaProceso2", "CedulaVII")
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
    button7.setAttribute("style","background-color: #908989; ")
    button8.setAttribute("style","background-color: #ccc; ")
    button9.setAttribute("style","background-color: #ccc; ")
    button10.setAttribute("style","background-color: #ccc; ")
    divProceso2.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Elemento</td>
            <td>Unidades Equivalentes de Inventario Final de Proceso</td>
            <td>Costo Unitario por Elemento</td>
            <td>Costo Total</td>
            </tr>
        </thead>
        <tbody id="myTable2">
            <tr>
                <td>
                    <select class="inputs cedula7_mySelected" id="cedula7_Select1" name="">
                        <option value="0a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula7_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula7_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula7_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula7_mySelected" id="cedula7_Select2" name="">
                        <option value="0b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula7_2" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula7_2" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula7_2" placeholder="Escribe algo" type="number"  readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula7_mySelected" id="cedula7_Select3" name="">
                        <option value="0c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula7_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula7_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula7_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                
            </tr>
            <tr>
                <td colspan="3">
                    <input class="inputs" placeholder="Total" type="number" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula7Total" placeholder="-" type="number" readonly>
                </td>
                
            </tr>
        </tbody>
    </table>`
    const selects = document.querySelectorAll(".cedula7_mySelected");
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
        
        cedula7_asignCampo(cedula7_campo1,"cedula7_Select1",".cedula7_1")
        cedula7_asignCampo(cedula7_campo2,"cedula7_Select2",".cedula7_2")
        cedula7_asignCampo(cedula7_campo3,"cedula7_Select3",".cedula7_3")
        cedula7_CalculateTotal()
        
        select.addEventListener('change',()=>{
            localStorage.setItem(select.id, select.value)
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Agregar 'selected' al que fue seleccionado
            const seleccionado = select.options[select.selectedIndex];
            seleccionado.setAttribute("selected", "selected");


            values = Array.from(selects).map(s => s.value)
            document.querySelectorAll(".cedula7_mySelected").forEach(element =>{
                [...element.options].forEach(option =>{
                    if(values.includes(option.value) && option.value != '0' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            
            cedula7_asignCampo(cedula7_campo1,"cedula7_Select1",".cedula7_1")
            cedula7_asignCampo(cedula7_campo2,"cedula7_Select2",".cedula7_2")
            cedula7_asignCampo(cedula7_campo3,"cedula7_Select3",".cedula7_3")
            cedula7_CalculateTotal()
            
            
        })
        if(localStorage.getItem("cedula7_Select1") != null){
            /*
            cedula7_onRefresh(cedula7_campo1)
            cedula7_onRefresh(cedula7_campo2)
            cedula7_onRefresh(cedula7_campo3)
            */
        }
    })
}

function cedula7_asignCampo(campo,Select,campoClass){
    let j = 0
    for(let i = 0; i < campo.length; i++){
        campo[i] = "cedula7" + localStorage.getItem(Select) + Number(i+1)
    }
    if(localStorage.getItem(campo[0]) == null){
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            if(!cedula7_nullAux1.includes(campo[0]) && !cedula7_nullAux2.includes(campo[0]) && !cedula7_nullAux3.includes(campo[0])){
                if(j == 0){
                    element.value = localStorage.getItem("cedula1"+ document.getElementById(Select).value + "3")
                    
                }else if(j == 1){
                    element.value = localStorage.getItem("cedula2"+ document.getElementById(Select).value + "5")
                }else{
                    element.value = Number(localStorage.getItem("cedula1"+ document.getElementById(Select).value + "3")) * Number(localStorage.getItem("cedula2"+ document.getElementById(Select).value + "5"))
                    localStorage.setItem(element.id, Number(localStorage.getItem("cedula1"+ document.getElementById(Select).value + "3")) * Number(localStorage.getItem("cedula2"+ document.getElementById(Select).value + "5")) )
                }
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
}

function cedula7_CalculateTotal(){
    let monto1 = localStorage.getItem(cedula7_campo1[2])
    let monto2 = localStorage.getItem(cedula7_campo2[2])
    let monto3 = localStorage.getItem(cedula7_campo3[2])
    let resultado
    resultado = !isNaN(monto1) ? Number(monto1) : 0
    resultado += !isNaN(monto2) ? Number(monto2) : 0 
    resultado += !isNaN(monto3) ? Number(monto3) : 0
    document.getElementById("cedula7Total").value =  resultado
}