function menorEdad(){

    let nombre1 = document.getElementById("nombre1").value;
    let edad1 = parseInt(document.getElementById("edad1").value);
    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = parseInt(document.getElementById("edad2").value);
    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = parseInt(document.getElementById("edad3").value);
    let menorNombre = nombre1;
    let menorEdad = edad1;

    if(edad2 < menorEdad){
        menorEdad = edad2;
        menorNombre = nombre2;
    }
    if(edad3 < menorEdad){
        menorEdad = edad3;
        menorNombre = nombre3;
    }
     document.getElementById("resultado").innerHTML =
    "La persona menor es " + menorNombre + " con " + menorEdad + " años";
}