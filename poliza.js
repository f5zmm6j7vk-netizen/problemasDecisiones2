function calcularPoliza(){

    let poliza = document.getElementById("poliza").value;
    let alcohol = document.getElementById("alcohol").value;
    let lentes = document.getElementById("lentes").value;
    let enfermedad = document.getElementById("enfermedad").value;
    let edad = parseInt(document.getElementById("edad").value);
    let base = 0;
    let total = 0;

    if(poliza == "A" || poliza == "a"){
        base = 1200;
    }else{
        base = 950;
    }
    total = base;
    if(alcohol == "si"){
        total += base * 0.10;
    }
    if(lentes == "si"){
        total += base * 0.05;
    }
    if(enfermedad == "si"){
        total += base * 0.05;
    }
    if(edad > 40){
        total += base * 0.20;
    }else{
        total += base * 0.10;
    }
    document.getElementById("resultado").innerHTML =
    "Costo total de la póliza: $" + total;

}