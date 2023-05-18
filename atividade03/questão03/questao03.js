function formasPagamento() {
    var valorNormal = parseFloat(document.getElementById("valorNormal").value);
    var opcaoPagamento = document.querySelector('input[name="opcaoPagamento"]:checked').value;

    var valorFinal;
    
    switch (opcaoPagamento) {
        case "A":
            valorFinal = valorNormal * 0.85;
            break;
        case "B":
            valorFinal = valorNormal * 0.9;
            break;
        case "C":
            valorFinal = valorNormal * 1.1;
            break;
        case "D":
            valorFinal = valorNormal * 1.15;
            break;
        case "E":
            valorFinal = valorNormal * 0.8;
            break;
        default:
            document.getElementById("resultado").innerHTML = "Marque uma opção de pagamento!";
            return; // Sai da função se a opção de pagamento não estiver marcada
    }

    document.getElementById("resultado").innerHTML = "O Valor final: R$ " + valorFinal.toFixed(2) + "<br>";
}
