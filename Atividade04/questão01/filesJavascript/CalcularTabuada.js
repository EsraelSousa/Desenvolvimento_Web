function calcularTabuada(){
    let number1 = parseInt(document.getElementById("Numero").value);

    var coluna1, coluna2;
    for(var i=1; i<=10; i++){
        coluna1 = "multiplica" + i;
        coluna2 = "resposta" + i;
        document.getElementById(coluna1).innerHTML = i + " * " + number1 + "  = ";
        document.getElementById(coluna2).innerHTML = i*number1;
    }
}