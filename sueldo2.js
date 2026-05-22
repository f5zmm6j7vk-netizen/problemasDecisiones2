function calcularSueldo(){

    let horas = parseInt(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);

    let sueldo = 0;
    if(horas <= 40){
        sueldo = horas * pago;
    }else if(horas <= 45){
        sueldo = (40 * pago) + ((horas - 40) * pago * 2);
    }else if(horas <= 50){
        sueldo = (40 * pago) +
                  (5 * pago * 2) +
                  ((horas - 45) * pago * 3);
    }else{
        document.getElementById("resultado").innerHTML =
        "No está permitido trabajar más de 50 horas";
        return;
    }
    document.getElementById("resultado").innerHTML =
    "El sueldo semanal es: $" + sueldo;
}