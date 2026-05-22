function calcularPasaje(){

    let alumnos = parseInt(document.getElementById("alumnos").value);
    let costo = 0;
    let total = 0;

    if(alumnos > 100){
        costo = 20;
    }else if(alumnos >= 50){
        costo = 35;
    }else if(alumnos >= 20){
        costo = 40;
    }else{
        costo = 70;
    }
    total = alumnos * costo;
    document.getElementById("resultado").innerHTML =
    "Cada alumno paga: $" + costo +
    "<br>Total a pagar: $" + total;

}