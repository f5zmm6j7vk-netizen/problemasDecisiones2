function verificarRegalo(){

    let dinero = parseFloat(document.getElementById("dinero").value);

    if(dinero <= 10){

        document.getElementById("resultado").innerHTML =
        "Puede comprar una tarjeta";

    }else if(dinero >= 11 && dinero <= 100){

        document.getElementById("resultado").innerHTML =
        "Puede comprar chocolates";
    }else if(dinero >= 101 && dinero <= 250){
        document.getElementById("resultado").innerHTML =
        "Puede comprar flores";
    }else{
        document.getElementById("resultado").innerHTML =
        "Puede comprar un anillo";
    }    
}