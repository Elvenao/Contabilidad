window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("currentCedula") == null){
        CedulaI()
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