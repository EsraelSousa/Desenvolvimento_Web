function verificarPesoIdeal(){
    var sexo = document.getElementById("sexo").value;
    var altura = parseFloat(document.getElementById("altura").value);
    var ideal;

    if(sexo === "masculino")
        ideal = (altura * 72.7) - 58;
    else if(sexo === "feminino")
        ideal = (62.1 * altura) - 44.7;
    else  
        ideal = "erro na entrada";
    
    document.getElementById("resultado").innerHTML = "O peso ideal é " + ideal + "<br>";
}