function isNumberPerfect(){
    let number1 = parseInt(document.getElementById("Numero").value);

    let iterator = 1, sumDivisores = 0;
    while(iterator <= number1 / 2){
        sumDivisores += (number1 % iterator == 0)? iterator : 0;
        iterator += 1;
    } 

    document.getElementById("resultado").innerHTML = "O número " + number1 ;
    document.getElementById("resultado").innerHTML += ((number1 != sumDivisores)? " não" : "") + " é perfeito<br>";
    document.getElementById("resultado").innerHTML += "Soma dos divisores = " + sumDivisores;
}