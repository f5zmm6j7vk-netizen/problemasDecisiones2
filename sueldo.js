function calcularSueldo(){

    let horas = parseInt(document.getElementById("horas").value);
    let pago = parseInt(document.getElementById("pago").value);

    let sueldo;

    if(horas > 40){

        let extras = horas - 40;

        sueldo = (40 * pago) + (extras * pago * 2);

    }else{

        sueldo = horas * pago;

    }

    document.getElementById("resultado").innerHTML =
    "El sueldo semanal es: $" + sueldo;

}