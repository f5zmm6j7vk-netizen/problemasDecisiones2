function verificarVoto(){

    let edad = parseInt(document.getElementById("edad").value);

    if(edad >= 18 && edad <= 75){

        document.getElementById("resultado").innerHTML =
        "El usuario SI puede votar";

    }else{

        document.getElementById("resultado").innerHTML =
        "El usuario NO puede votar";

    }

}