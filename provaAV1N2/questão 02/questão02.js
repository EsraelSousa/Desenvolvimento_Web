function verificarIsTriangulo(){
	var a = parseFloat(document.getElementById("lado1").value);
	var b = parseFloat(document.getElementById("lado2").value);
	var c = parseFloat(document.getElementById("lado3").value);

	if (a + b > c && a + c > b && b + c > a){
		var ans = "TRIÂNGULO ";
		if(a === b && a === c && b === c)
			ans += "EQUILÁTERO";
		else if(a === b && a == c && b != c)
			ans += "ISÓCELES";
		else
			ans += "ESCALENO";

		document.getElementById("resultado").innerHTML = ans;
	}
	else{
		document.getElementById("resultado").innerHTML = "Os valores não formam triângulo!";
	}

}


