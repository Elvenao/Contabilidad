window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("currentCedula") == null){
        CedulaI()
        CedulaV()
    }else{
        switch(localStorage.getItem("currentCedula")){
            case "CedulaI":
                CedulaI()
                break
            case "CedulaII":
                CedulaII()
                break
            case "CedulaIII":
                CedulaIII()
                break
            case "CedulaIV":
                CedulaIV()
                break
            default:
                CedulaI()
                break
        }

        switch(localStorage.getItem("currentCedulaProceso2")){
            case "CedulaV":
                CedulaV()
                break
            case "CedulaVI":
                CedulaVI()
                break
            case "CedulaVII":
                CedulaVII()
                break
            case "CedulaVIII":
                CedulaVIII()
                break
            case "CedulaIX":
                CedulaIX()
                break
            case "CedulaX":
                CedulaX()
                break
            default:
                CedulaV()
                break
        }
    }
    
})


const extras = ["finalDate","initialDate","inventarioInicialPT","inventarioInicialMP","comprasNetas","supervisor","elaborador"]



extras.forEach(element =>{
    document.getElementById(element).addEventListener("input", ()=>{
        localStorage.setItem(element, document.getElementById(element).value)
    })
    if(localStorage.getItem(element) != null) document.getElementById(element).value = localStorage.getItem(element)
})

/*
document.getElementById("companyName").addEventListener("input",()=>{
    if(document.getElementById("companyName").value == "" || localStorage.getItem("cedula10_ImporteVenta1") == null){
        document.getElementById("Btn1").setAttribute("disabled","disabled")
    }else{
        document.getElementById("Btn1").removeAttribute("disabled")
    }
    localStorage.setItem("companyName", document.getElementById("companyName").value)
})
*/

const datosBasicos = ["companyName","initialDate","finalDate"]

datosBasicos.forEach((element)=>{
    document.getElementById(element).addEventListener('input', ()=>{
        localStorage.setItem(element,document.getElementById(element).value )
    })
    document.getElementById(element).value = localStorage.getItem(element)
})


document.getElementById("finalDate")

function Btn1(){
    
    const nombre = document.getElementById("companyName").value
    const estado = "Estado de Costos de Producción y de Ventas"
    const doc = new window.jspdf.jsPDF();
    let dia1 = document.getElementById("initialDate").value
    let dia2 = document.getElementById("finalDate").value
    const elaborador = localStorage.getItem("elaborador") == null ? "" : localStorage.getItem("elaborador")
    const supervisor = localStorage.getItem("supervisor") == null ? "" : localStorage.getItem("supervisor")
    
    if(localStorage.getItem("cedula10_ImporteVenta1") == null || localStorage.getItem("cedula10_ImporteVenta1") == ""){
        Swal.fire({
            title: "Faltan Datos",
            text: "Completa tus cedulas",
            icon: "warning"
            });
        return
    }

    if(nombre == null || nombre == "" || dia1 == null || dia1 == "" || dia2 == null || dia2 == "" || elaborador == null || elaborador == "" || supervisor == null || supervisor == ""){
        Swal.fire({
            title: "Faltan Datos",
            text: "Llena los campos faltantes",
            icon: "warning"
            });
        return
    }
    dia2 = dia2.split("-")
    
    dia1 = dia1.split("-")
    const year = dia2[0]
    dia2 = dia2[2]
    dia1 = dia1[2]
    const mes = obtenerNombreMes(document.getElementById("initialDate").value)
    const pageWidth = doc.internal.pageSize.getWidth();
    const fecha = "Del "+ dia1 + " al " + dia2 + " de " + mes + " de " + year
    let d = 1.5
    let c = 8
    let e = 7
    doc.setFontSize(16);
    doc.text(nombre, centerPdf(nombre,pageWidth) , 10);
    doc.text(estado, centerPdf(estado,pageWidth) , 20);
    doc.text(fecha, centerPdf(estado,pageWidth) + 15, 30);
    doc.setFontSize(9);
    doc.text("Total", 105 + c, 40);
    doc.text("Proceso 1", 140, 40);
    doc.text("Proceso 2", 175, 40);
    doc.text(" Inventario Inicial de Materia Prima", 20, 40+ e);
    doc.text("+Compras Netas de Materia Prima", 20, 47 + e);
    doc.text("=Materia Prima Disponible", 20, 54+ e);
    doc.text("-Inventario Final de Materia Prima", 20, 61+ e);
    doc.text("=Materia Prima Consumida", 20, 68+ e);
    doc.text("+MOD", 20, 75+ e);
    doc.text("+CI", 20, 82+ e);
    doc.text("=Costo Incurrido", 20, 89+ e);
    doc.text("+Inventario Inicial de la Producción en Proceso 1", 20, 96+ e);
    doc.text("=Total Procesado 1", 20, 102+ e);
    doc.text("-Inventario Final de la Producción en Proceso 1", 20, 109+ e);
    doc.text("=Costo de la Producción Terminada 1", 20, 116+ e);
    doc.text("+Inventario Inicial de la Producción en Proceso 2", 20, 123+ e);
    doc.text("=Total Procesado 2", 20, 130+ e);
    doc.text("-Inventario Final de la Producción en Proceso 2", 20, 137+ e);
    doc.text("=Costo de la Producción Terminada 2", 20, 144+ e);
    doc.text("+Inventario Inicial de la Producción Terminada", 20, 151+ e);
    doc.text("=Producción Terminada Disponible", 20, 158+ e);
    doc.text("-Inventario Final de la Producción Terminada", 20, 165+ e);
    doc.text("=Costo de lo Vendido", 20, 172+ e);

    const invInicialMP = localStorage.getItem("inventarioInicialMP") == null ? 0 : Number(localStorage.getItem("inventarioInicialMP"))
    const comprasNetas = localStorage.getItem("comprasNetas") == null ? 0 : Number(localStorage.getItem("comprasNetas"))
    const MPD1 = localStorage.getItem("cedula2MPD2") == null ? 0 : Number(localStorage.getItem("cedula2MPD2"))
    const MPD2 = localStorage.getItem("cedula6MPD2") == null ? 0 : Number(localStorage.getItem("cedula6MPD2"))
    const MPDisponible = invInicialMP + comprasNetas
    const InvFinalMP = MPDisponible - MPD1 - MPD2
    const MPConsumida = MPD1 + MPD2

    const MOD1 = localStorage.getItem("cedula2MOD2") == null ? 0 : Number(localStorage.getItem("cedula2MOD2"))
    const MOD2 = localStorage.getItem("cedula6MOD2") == null ? 0 : Number(localStorage.getItem("cedula6MOD2"))
    const MODTotal = MOD1 + MOD2

    const CI1 = localStorage.getItem("cedula2CI2") == null ? 0 : Number(localStorage.getItem("cedula2CI2"))
    const CI2 = localStorage.getItem("cedula6CI2") == null ? 0 : Number(localStorage.getItem("cedula6CI2"))
    const CITotal = CI1 + CI2
    
    const CostoIncurrido1 = MPD1 + MOD1 + CI1
    const CostoIncurrido2 = MPD2 + MOD2 + CI2
    const CostoIncurridoTotal = CostoIncurrido1 + CostoIncurrido2
    

    const InvInicialPP1 = localStorage.getItem("cedula2Total1") == null ? 0 : Number(localStorage.getItem("cedula2Total1"))
    const InvFinalPP1 = localStorage.getItem("cedula3Total") == null ? 0 : Number(localStorage.getItem("cedula3Total"))
    const TotalProcesado1 = InvInicialPP1 + CostoIncurrido1
    const CostoPT1 = TotalProcesado1 - InvFinalPP1


    const InvInicialPP2 = localStorage.getItem("cedula6Total1") == null ? 0 : Number(localStorage.getItem("cedula6Total1"))
    const InvFinalPP2 = localStorage.getItem("cedula7Total") == null ? 0 : Number(localStorage.getItem("cedula7Total"))
    const TotalProcesado2 = InvInicialPP2 + CostoIncurrido2 + CostoPT1
    const CostoPT2 = TotalProcesado2 - InvFinalPP2
    const CostoPTTotal = CostoIncurridoTotal + InvInicialPP1 - InvFinalPP1 + InvInicialPP2 - InvFinalPP2
    
    const InvInicialPT = localStorage.getItem("InventarioInicialPT") == null ? 0 : Number(localStorage.getItem("InventarioInicialPT"))

    const PTDisponible = CostoPTTotal + InvInicialPT

    const InvFinalPT = localStorage.getItem("cedula9_costoTotalInventarioFinal") == null ? 0 : Number(localStorage.getItem("cedula9_costoTotalInventarioFinal"))
    const CostoDeLoVendido = PTDisponible - InvFinalPT
    localStorage.setItem("CostoDeLoVendido", CostoDeLoVendido)

    

    //Total
    doc.text("$"+invInicialMP.toLocaleString(), 112 + c, 47,{ align: "right" })
    doc.text("$"+comprasNetas.toLocaleString(), 112+ c, 54,{ align: "right" })
    doc.text("________", 112+ c, 56,{ align: "right" })
    doc.text("$" + MPDisponible.toLocaleString(), 112+ c, 61,{ align: "right" })
    doc.text("$" + InvFinalMP.toLocaleString(), 112+ c, 68,{ align: "right" })
    doc.text("________", 112+ c, 70,{ align: "right" })
    doc.text("$" + MPConsumida.toLocaleString(), 112+ c, 75,{ align: "right" })
    doc.text("$" + MODTotal.toLocaleString(), 112+ c, 82,{ align: "right" })
    doc.text("$" + CITotal.toLocaleString(), 112+ c, 89,{ align: "right" })
    doc.text("________", 112+ c, 91,{ align: "right" })
    doc.text("$" + CostoIncurridoTotal.toLocaleString(), 112 + c, 96,{ align: "right" })
    doc.text("$" + InvInicialPP1.toLocaleString(), 112 + c, 103,{ align: "right" })
    //
    //
    doc.text("$" + InvFinalPP1.toLocaleString(), 112 + c, 117 -d ,{ align: "right" })
    //
    //
    doc.text("$" + InvInicialPP2.toLocaleString(), 112 + c, 131 -d ,{ align: "right" })
    //
    //
    doc.text("$" + InvFinalPP2.toLocaleString(), 112 + c, 145 -d ,{ align: "right" })
    doc.text("________", 112+ c, 147 -d,{ align: "right" })
    doc.text("$" + CostoPTTotal.toLocaleString(), 112 + c, 152 -d ,{ align: "right" })
    doc.text("$" + InvInicialPT.toLocaleString() , 112+ c, 159-d,{ align: "right" })
    doc.text("________", 112+ c, 161 -d,{ align: "right" })
    doc.text("$" + PTDisponible.toLocaleString() , 112+ c, 168-d,{ align: "right" })
    doc.text("$" + InvFinalPT.toLocaleString() , 112+ c, 175-d,{ align: "right" })
    doc.text("________", 112+ c, 177 -d,{ align: "right" })
    doc.text("$" + CostoDeLoVendido.toLocaleString() , 112+ c, 182-d,{ align: "right" })


    //Proceso 1
    doc.text("$ 0", 153, 47,{ align: "right" })
    doc.text("$ 0", 153, 54,{ align: "right" })
    doc.text("________", 153, 56,{ align: "right" })
    doc.text("$0", 153, 61,{ align: "right" })
    doc.text("$0", 153, 68,{ align: "right" })
    doc.text("________", 153, 70,{ align: "right" })
    doc.text("$" + MPD1.toLocaleString(), 153, 75,{ align: "right" })
    doc.text("$" + MOD1.toLocaleString(), 153, 82,{ align: "right" })
    doc.text("$" + CI1.toLocaleString(), 153, 89,{ align: "right" })
    doc.text("________", 153, 91,{ align: "right" })
    doc.text("$" + CostoIncurrido1.toLocaleString(), 153, 96,{ align: "right" })
    doc.text("$" + InvInicialPP1.toLocaleString(), 153, 103,{ align: "right" })
    doc.text("________", 153, 105,{ align: "right" })
    doc.text("$" + TotalProcesado1.toLocaleString(), 153, 110,{ align: "right" })
    doc.text("$" + InvFinalPP1.toLocaleString(), 153, 117 -d,{ align: "right" })
    doc.text("________", 153, 119 -d ,{ align: "right" })
    doc.text("$" + CostoPT1.toLocaleString(), 153, 124 - d,{ align: "right" })
    //
    //
    //
    //
    //
    //
    //
    doc.text("$ 0", 153, 159-d,{ align: "right" })
    

    //Proceso 2
    doc.text("$ 0", 188, 47,{ align: "right" })
    doc.text("$ 0", 188, 54,{ align: "right" })
    doc.text("________", 188, 56,{ align: "right" })
    doc.text("$0", 188, 61,{ align: "right" })
    doc.text("$0", 188, 68,{ align: "right" })
    doc.text("________", 188, 70,{ align: "right" })
    doc.text("$" + MPD2.toLocaleString(), 188, 75,{ align: "right" })
    doc.text("$" + MOD2.toLocaleString(), 188, 82,{ align: "right" })
    doc.text("$" + CI2.toLocaleString(), 188, 89,{ align: "right" })
    doc.text("________", 188, 91,{ align: "right" })
    doc.text("$" + CostoIncurrido2.toLocaleString(), 188, 96,{ align: "right" })
    //
    //
    //
    //
    //
    //
    doc.text("$" + CostoPT1.toLocaleString(), 188, 124 - d,{ align: "right" })
    doc.text("$" + InvInicialPP2.toLocaleString(), 188, 131 - d,{ align: "right" })
    doc.text("________", 188, 133 - d,{ align: "right" })
    doc.text("$" + TotalProcesado2.toLocaleString(), 188, 138 - d,{ align: "right" })
    doc.text("$" + InvFinalPP2.toLocaleString(), 188, 145 - d,{ align: "right" })
    doc.text("________", 188, 147 - d,{ align: "right" })
    doc.text("$" + CostoPT2.toLocaleString(), 188, 152 - d,{ align: "right" })
    doc.text("$ 0", 188, 159-d,{ align: "right" })

    //Firmas

    doc.text("__________________________________",40,250)
    doc.text("Elaboró " + String(elaborador),50,257 )

    doc.text("__________________________________",120,250)
    doc.text("Supervisó "+ String(supervisor),130,257 )

    doc.save( estado + " de "+ nombre+".pdf");
    
    
}

function Btn2(){

}

function centerPdf(text, pageWidth){
    const doc = new window.jspdf.jsPDF();
    const textWidth = doc.getTextWidth(text);
    let x = (pageWidth - textWidth)
    return  x / 2
}

function obtenerNombreMes(fechaISO) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const partes = fechaISO.split("-"); // ["2025", "06", "27"]
  const mesNumero = parseInt(partes[1], 10); // 6

  return meses[mesNumero - 1]; // meses[5] = "junio"
}

const contentTotal = ["gastosAdministracion","gastosVentas","gastosGenerales"]

contentTotal.forEach( (elemento)=>{
    if(document.getElementById(elemento) != null){
        document.getElementById(elemento).value = localStorage.getItem(elemento)
    }
})

let div = document.getElementById("gastosContent")

const gastos = document.getElementById("gastosSelect")
if(gastos.value == "0"){
    
        div.innerHTML = `
            <label class="inputs title" for="gastosGenerales">Gastos Generales</label>
            <input style="margin-bottom: 3vh;" class="inputs" type="number" placeholder="Gastos Generales" name="gastosGenerales" id="gastosGenerales"> 
        `
        document.getElementById("gastosGenerales").value = localStorage.getItem("gastosGenerales")
        document.getElementById("gastosGenerales").addEventListener('input',()=>{
            
            localStorage.setItem("gastosGenerales", document.getElementById("gastosGenerales").value)
           
        })
        
    }else{
        const content = ["gastosAdministracion","gastosVentas"]
        div.innerHTML = `
            <label  class="inputs title" for="gastosVentas">Gastos de Ventas</label>
            <input style="margin-bottom: 3vh;" class="inputs" type="number" placeholder="Gastos de Ventas" name="gastosVentas" id="gastosVentas"> 
            <label class="inputs title" for="gastosAdministracion">Gastos de Administracion</label>
            <input style="margin-bottom: 3vh;" class="inputs" type="number" placeholder="Gastos de Administracion" name="gastosAdministracion" id="gastosAdministracion"> 
            
        `
        content.forEach((element)=>{
            document.getElementById(element).value = localStorage.getItem(element)
            document.getElementById(element).addEventListener('input', ()=>{
                localStorage.setItem(element, document.getElementById(element).value)
                
            })
        })
        
        
    }
let value 
gastos.addEventListener('change', () => {
    console.log(gastos.value)
    value = gastos.value
    
    if(value == "0"){
        div.innerHTML = `
            <label class="inputs title" for="gastosGenerales">Gastos Generales</label>
            <input style="margin-bottom: 3vh;" class="inputs" type="number" placeholder="Gastos Generales" name="gastosGenerales" id="gastosGenerales"> 
        `
        document.getElementById("gastosGenerales").value = localStorage.getItem("gastosGenerales")
        document.getElementById("gastosGenerales").addEventListener('input',()=>{
            localStorage.setItem("gastosGenerales", document.getElementById("gastosGenerales").value)
        })
        
    }else{
        const content = ["gastosAdministracion","gastosVentas"]
        div.innerHTML = `
            <label  class="inputs title" for="gastosVentas">Gastos de Ventas</label>
            <input style="margin-bottom: 3vh;" class="inputs" type="number" placeholder="Gastos de Ventas" name="gastosVentas" id="gastosVentas"> 
            <label class="inputs title" for="gastosAdministracion">Gastos de Administracion</label>
            <input style="margin-bottom: 3vh;" class="inputs" type="number" placeholder="Gastos de Administracion" name="gastosAdministracion" id="gastosAdministracion"> 
            
        `
        content.forEach((element)=>{
            document.getElementById(element).value = localStorage.getItem(element)
            document.getElementById(element).addEventListener('input', ()=>{
                localStorage.setItem(element, document.getElementById(element).value)
            })
        })
        
    }
})

function Btn2(){
    const elaborador = localStorage.getItem("elaborador") == null ? "" : localStorage.getItem("elaborador")
    const supervisor = localStorage.getItem("supervisor") == null ? "" : localStorage.getItem("supervisor")
    const nombre = document.getElementById("companyName").value
    const estado = "Estado de Resultados"
    const doc = new window.jspdf.jsPDF();
    let dia1 = document.getElementById("initialDate").value
    let dia2 = document.getElementById("finalDate").value
    let suma = 0
    dia2 = dia2.split("-")
    
    dia1 = dia1.split("-")
    const year = dia2[0]
    dia2 = dia2[2]
    dia1 = dia1[2]
    const mes = obtenerNombreMes(document.getElementById("initialDate").value)
    const pageWidth = doc.internal.pageSize.getWidth();
    const fecha = "Del "+ dia1 + " al " + dia2 + " de " + mes + " de " + year

    if(nombre == null || nombre == "" || dia1 == null || dia1 == "" || dia2 == null || dia2 == "" || elaborador == null || elaborador == "" || supervisor == null || supervisor == "" ){
        Swal.fire({
            title: "Faltan Datos",
            text: "Llena los campos faltantes",
            icon: "warning"
            });
        return
    }
    doc.setFontSize(16);
    doc.text(nombre, centerPdf(nombre,pageWidth) , 10);
    doc.text(estado, centerPdf(estado,pageWidth) , 20);
    doc.text(fecha, centerPdf(estado,pageWidth) -10, 30);
    doc.setFontSize(14);
    doc.text("Parcial", 132, 40)
    doc.text("Total", 175, 40)
    doc.text("Ventas Netas", 10, 50)
    doc.text("-Costo de lo Vendido", 10, 60)
    doc.text("=Utilidades Netas",10,70)
    doc.text("(-)Gastos Generales",10,80)

    const ventasNetas = localStorage.getItem("cedula10_ImporteVenta1") == null ? 0 : Number(localStorage.getItem("cedula10_ImporteVenta1"))
    const CostoDeLoVendido = localStorage.getItem("CostoDeLoVendido") == null ? 0 : Number(localStorage.getItem("CostoDeLoVendido"))
    
    const UtilidadesBrutas = ventasNetas - CostoDeLoVendido

    const gastosGenerales = localStorage.getItem("gastosGenerales") == null ? 0 : Number(localStorage.getItem("gastosGenerales"))
    const gastosVentas = localStorage.getItem("gastosVentas") == null ? 0 : Number(localStorage.getItem("gastosVentas"))
    const gastosAdministracion = localStorage.getItem("gastosAdministracion") == null ? 0 : Number(localStorage.getItem("gastosAdministracion"))
    

    doc.text("$" + ventasNetas.toLocaleString(), 147,  50,{ align: "right" })
    doc.text("$" + CostoDeLoVendido.toLocaleString(), 147,  60,{ align: "right" })
    doc.text("__________", 147, 62,{ align: "right" })
    doc.text("$" + UtilidadesBrutas.toLocaleString(), 186,  70,{ align: "right" })
    
    if(gastos.value == "0"){
        if(document.getElementById("gastosGenerales").value != null && document.getElementById("gastosGenerales").value != ""){
            const UtilidadBruta = UtilidadesBrutas - gastosGenerales
            doc.text("$" + gastosGenerales.toLocaleString(), 147,  80,{ align: "right" })
            doc.text("__________", 186, 82,{ align: "right" })
            doc.text("$" + UtilidadBruta.toLocaleString(), 186,  90,{ align: "right" })
        }else{
            Swal.fire({
            title: "Faltan Datos",
            text: "Llena el campo de Gastos Generales",
            icon: "warning"
            });
        }
    }else{
        if(document.getElementById("gastosAdministracion").value != null || document.getElementById("gastosAdministracion").value != "" || document.getElementById("gastosVentas").value != null || document.getElementById("gastosVentas").value != ""){
            
            doc.text("Gastos de Ventas",10,90)
            doc.text("Gastos de Administración",10,100)

            const UtilidadBruta = UtilidadesBrutas - gastosAdministracion - gastosVentas
            const gastosTotales = gastosAdministracion + gastosVentas
            doc.text("$" + gastosVentas.toLocaleString(), 147,  90,{ align: "right" })
            doc.text("$" + gastosAdministracion.toLocaleString(), 147,  100,{ align: "right" })
            doc.text("$" + gastosTotales.toLocaleString(), 186,  100,{ align: "right" })
            doc.text("__________", 186, 102,{ align: "right" })
            doc.text("$" + UtilidadBruta.toLocaleString(), 186,  110,{ align: "right" })
            suma = 20
        }else{
            Swal.fire({
            title: "Faltan Datos",
            text: "Llena el campo de Gastos de Administración y de Gastos de Ventas",
            icon: "warning"
            });
        } 
    }
    doc.text("Utilidades Antes de Intereses e Impuestos",10,90 + suma)
    doc.setFontSize(9);
    doc.text("__________________________________",40,250)
    doc.text("Elaboró " + String(elaborador),50,257 )

    doc.text("__________________________________",120,250)
    doc.text("Supervisó "+ String(supervisor),130,257 )

    doc.save( estado + " de "+ nombre+".pdf");
    doc.save(estado + " de " + nombre + ".pdf")
}

