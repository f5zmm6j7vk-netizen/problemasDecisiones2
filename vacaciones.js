function vacaciones(){

    let dinero = parseFloat(document.getElementById("dinero").value);
    let costo = parseFloat(document.getElementById("costo").value);
    let mexico = 750 * 2 * costo;
    let pv = 800 * 2 * costo;
    let acapulco = 1200 * 2 * costo;
    let cancun = 1800 * 2 * costo;
    let mensaje = "";

    if(dinero >= cancun){
        mensaje = "Puede ir a Cancún";
    }else if(dinero >= acapulco){
        mensaje = "Puede ir a Acapulco";
    }else if(dinero >= pv){
        mensaje = "Puede ir a P.V.";
    }else if(dinero >= mexico){
        mensaje = "Puede ir a México";
    }else{
        mensaje = "Debe quedarse en casa";
    }
    document.getElementById("resultado").innerHTML = mensaje;
}