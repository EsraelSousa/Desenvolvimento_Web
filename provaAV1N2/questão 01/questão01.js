function verificarSigno(){
    var nome = document.getElementById("nome").value;
    var anoNascimento = parseInt(document.getElementById("anoNascimento").value);

    var signo;
    if(!(anoNascimento >= 1925 && anoNascimento <= 2031)){
        document.getElementById("resposta").innerHTML = "Ano Invalido";
        return;
    }


    anoNascimento %= 12;
    switch(anoNascimento){
        case 0:
            signo = "Rato";
            break;
        case 1:
            signo = "Boi";
            break;
        case 2:
            signo = "Tigre";
            break;
        case 3:
            signo = "Coelho";
            break;
        case 4:
            signo = "Dragão";
            break;
        case 5:
            signo = "Cobra";
            break;
        case 6:
            signo = "Cavalo";
            break;
        case 7:
            signo = "Carneiro";
            break;
        case 8:
            signo = "Macaco";
            break;
        case 9:
            signo = "Galo";
            break;
        case 10:
            signo = "Cão";
            break;
        case 11:
            signo = "Porco";
            break;
        default:
            signo = "Indefinido";
    }

    document.getElementById("resposta").innerHTML = nome + " seu signo é " + signo + "<br>";
    document.getElementById("resposta").innerHTML += "Um dos  signos ocidental é Leão";
}