function calcularCusto(){
    var KmEstrada = parseFloat(document.getElementById("KmViagem").value);
    var kmL = parseFloat(document.getElementById("KmL").value);
    var preco = parseFloat(document.getElementById("PrecoL").value);
    
    var qtdLitros = KmEstrada / kmL;
    var qtdDinheiro = preco * qtdLitros;

    document.getElementById("resultado").innerHTML = "Litros de combustível que  serão gastos na viagem: " + qtdLitros.toFixed(2) + "<br>";
    document.getElementById("resultado").innerHTML += "Dinheiro gasto com combustíve: " + qtdDinheiro.toFixed(2) + "<br>";
}