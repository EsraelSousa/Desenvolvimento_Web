function isPrime(){
    var number1;
    do {
        number1 = parseInt(prompt("Digite um número (digite 0 para parar):"));

        if(number1 == 0){
            alert("Programa encerrado");
        }
        else if(number1 < 0){
            alert("Número invalido");
        }
        else{
            var resultado = "é primo";
            for(var i=2; i*i <= number1 && resultado == "é primo"; i++){
                if(number1 % i == 0)
                    resultado = "não é primo";
            }
            if (number1 == 1 ) resultado = "não é primo";
            alert("O número " + number1 + " " + resultado);
        }
    }while(number1 != 0);
}