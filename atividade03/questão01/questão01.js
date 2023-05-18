function ordenaNumeros(){
    var number1 = parseFloat(document.getElementById("numero1").value);
    var number2 = parseFloat(document.getElementById("numero2").value);
    var number3 = parseFloat(document.getElementById("numero3").value);

    var aux1, aux2, aux3;

    if(number1 <= number2 && number1 <= number3 && number2 <= number3)
        aux1 = number1, aux2 = number2, aux3 = number3;
    else if(number1 <= number2 && number1 <= number3 && number3 <= number2)
        aux1 = number1, aux2 = number3, aux3 = number2;
    else if(number2 <= number1 && number2 <= number3 && number1 <= number3)
        aux1 = number2, aux2 = number1, aux3 = number3;  
    else if(number2 <= number1 && number2 <= number3 && number3 <= number1)
        aux1 = number2, aux2 = number2, aux3 = number1;
    else if(number3 <= number1 && number3 <= number2 && number1 <= number2)
        aux1 = number3, aux2 = number1, aux3 = number2;
    else
        aux1 = number3, aux2 = number2, aux3 = number1;

    document.getElementById("resultado").innerHTML = "Ordem crescente: " + aux1 + ", " + aux2 + ", " + aux3 + "<br>";
    document.getElementById("resultado").innerHTML += "Ordem decrescente: " + aux3 + ", " + aux2 + ", " + aux1 + "<br>";

}