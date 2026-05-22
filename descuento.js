function calcularDescuento(){

    let precio = parseFloat(document.getElementById("precio").value);
    let descuento;
    let total;

    if(precio >= 200){
        descuento = precio * 0.15;
    }else if(precio > 100 && precio < 200){
        descuento = precio * 0.12;
    }else{
        descuento = precio * 0.10;
    }

    total = precio - descuento;
    document.getElementById("resultado").innerHTML =
    "Descuento: $" + descuento + 
    "<br>Total a pagar: $" + total;
}