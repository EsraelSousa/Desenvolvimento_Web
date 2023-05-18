function verificaAprovacao(){
	var nome = document.getElementById("nome").value;
	var disciplina = document.getElementById("disciplina").value;
	var qtdFaltas = parseInt(document.getElementById("quantidadeFaltas").value);
	var cargaHoraria = parseInt(document.getElementById("cargaHoraria").value);
	var nota1 = parseFloat(document.getElementById("nota1").value);
	var nota2 = parseFloat(document.getElementById("nota2").value);
	var nota3 = parseFloat(document.getElementById("nota3").value);
	
	var situacao;
	
	if(qtdFaltas > cargaHoraria * 0.25)
		situacao = "Reprovad@ por falta!";
	else{
		var media = (nota1 + nota2 + nota3) / 3;
		if(media >= 7 && media <= 10)
			situacao = "Aprovavado";
		else 
			situacao = "Reprovado por Nota";
	}
	
	document.getElementById("resultado").innerHTML = "<b>" + nome + "</b> você foi <b>" + situacao + "</b> na disciplina " + disciplina;
}