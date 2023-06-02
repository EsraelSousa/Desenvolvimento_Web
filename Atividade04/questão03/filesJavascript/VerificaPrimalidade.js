function isPrime(){
    let number1 = parseInt(document.getElementById("Numero").value);

    let iterator = 1;
    var resultado = "é primo";
    do {
        iterator += 1;
        if(number1 < 2 || (number1 % iterator == 0 && iterator != number1)){
            resultado = "não é primo";
        }
    } while (iterator * iterator <= number1);

    document.getElementById("resultado").innerHTML = "<b>O número " + number1 + " " + resultado + "</b>";
}