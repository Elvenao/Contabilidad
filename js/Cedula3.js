let cedula3_campo1 = ['cedula3MPD1', 'cedula3MPD2', 'cedula3MPD3']
let cedula3_campo2 = ['cedula3MOD1', 'cedula3MOD2', 'cedula3MOD3']
let cedula3_campo3 = ['cedula3CI1', 'cedula3CI2', 'cedula3CI3']
let cedula3_nullAux = ['cedula3null1', 'cedula3null2', 'cedula3null3', 'cedula3null4', 'cedula3null5']
let cedula3_nullAux1 = ['cedula30a1', 'cedula30a2', 'cedula30a3']
let cedula3_nullAux2 = ['cedula30b1', 'cedula30b2', 'cedula30b3']
let cedula3_nullAux3 = ['cedula30c1', 'cedula30c2', 'cedula30c3']


function CedulaIII(){
    localStorage.setItem("currentCedula", "CedulaIII")
    let div = document.getElementById("content")
    let button = document.getElementById("cedula1")
    let button2 = document.getElementById("cedula2")
    let button3 = document.getElementById("cedula3")
    let button4 = document.getElementById("cedula4")
    button.setAttribute("style","background-color: #ccc; ")
    button2.setAttribute("style","background-color: #ccc; ")
    button3.setAttribute("style","background-color: #908989; ")
    button4.setAttribute("style","background-color: #ccc; ")
    div.innerHTML = `<table id="myTable">
        <thead>
            <tr class ="headers">
            <td>Elemento</td>
            <td>Unidades Equivalentes de Inventario Final de Proceso</td>
            <td>Costo Unitario por Elemento</td>
            <td>Costo Total</td>
            </tr>
        </thead>
        <tbody id="mainTable">
            <tr>
                <td>
                    <select class="inputs cedula3_mySelected" id="cedula3_Select1" name="">
                        <option value="0a">Seleccionar</option>
                        <option selected value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula3_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula3_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula3_1" placeholder="Escribe algo" type="number"  readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula3_mySelected" id="cedula3_Select2" name="">
                        <option value="0b">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option selected value="MOD">MOD</option>
                        <option value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula3_2" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula3_2" placeholder="Escribe algo" type="number"  readonly>
                </td>
                <td>
                    <input class="inputs cedula3_2" placeholder="Escribe algo" type="number"  readonly>
                </td>
                
            </tr>
            <tr>
                <td>
                    <select class="inputs cedula3_mySelected" id="cedula3_Select3" name="">
                        <option value="0c">Seleccionar</option>
                        <option value="MPD">MPD</option>
                        <option value="MOD">MOD</option>
                        <option selected value="CI">CI</option>
                    </select>
                </td>
                <td>
                    <input class="inputs cedula3_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula3_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                <td>
                    <input class="inputs cedula3_3" placeholder="Escribe algo" type="number" readonly>
                </td>
                
            </tr>
            <tr>
                <td colspan="3">
                    <input class="inputs" placeholder="Total" type="number" readonly>
                </td>
                <td>
                    <input class="inputs" id="cedula3Total" placeholder="-" type="number" readonly>
                </td>
                
            </tr>
        </tbody>
    </table>`
    const selects = document.querySelectorAll(".cedula3_mySelected");
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
        
        cedula3_asignCampo(cedula3_campo1,"cedula3_Select1",".cedula3_1")
        cedula3_asignCampo(cedula3_campo2,"cedula3_Select2",".cedula3_2")
        cedula3_asignCampo(cedula3_campo3,"cedula3_Select3",".cedula3_3")
        cedula3_CalculateTotal()
        
        select.addEventListener('change',()=>{
            localStorage.setItem(select.id, select.value)
            select.querySelectorAll("option").forEach(opt => {
                opt.removeAttribute("selected");
            });

            // Agregar 'selected' al que fue seleccionado
            const seleccionado = select.options[select.selectedIndex];
            seleccionado.setAttribute("selected", "selected");


            values = Array.from(selects).map(s => s.value)
            document.querySelectorAll(".cedula3_mySelected").forEach(element =>{
                [...element.options].forEach(option =>{
                    if(values.includes(option.value) && option.value != '0' && !element.value.includes(option.value)){
                        option.disabled = true
                    }
                    else{
                        option.disabled = false
                    }
                })
            })
            
            cedula3_asignCampo(cedula3_campo1,"cedula3_Select1",".cedula3_1")
            cedula3_asignCampo(cedula3_campo2,"cedula3_Select2",".cedula3_2")
            cedula3_asignCampo(cedula3_campo3,"cedula3_Select3",".cedula3_3")
            cedula3_CalculateTotal()
            
            
        })
        if(localStorage.getItem("cedula3_Select1") != null){
            /*
            cedula3_onRefresh(cedula3_campo1)
            cedula3_onRefresh(cedula3_campo2)
            cedula3_onRefresh(cedula3_campo3)
            */
        }
    })
}

function cedula3_asignCampo(campo,Select,campoClass){
    let j = 0
    for(let i = 0; i < campo.length; i++){
        campo[i] = "cedula3" + localStorage.getItem(Select) + Number(i+1)
    }
    if(localStorage.getItem(campo[0]) == null){
        document.querySelectorAll(campoClass).forEach(element =>{
            element.setAttribute("id",campo[j])
            if(!cedula3_nullAux1.includes(campo[0]) && !cedula3_nullAux2.includes(campo[0]) && !cedula3_nullAux3.includes(campo[0])){
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

function cedula3_CalculateTotal(){
    let monto1 = localStorage.getItem(cedula3_campo1[2])
    let monto2 = localStorage.getItem(cedula3_campo2[2])
    let monto3 = localStorage.getItem(cedula3_campo3[2])
    let resultado
    resultado = !isNaN(monto1) ? Number(monto1) : 0
    resultado += !isNaN(monto2) ? Number(monto2) : 0 
    resultado += !isNaN(monto3) ? Number(monto3) : 0
    document.getElementById("cedula3Total").value =  resultado
}