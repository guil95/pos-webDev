'use stric'

window.onload = iniciar;

function iniciar(){
	 var botao = document.getElementById('calcular');


	botao.addEventListener('click', calcular);

}


let teste = () => {
	alert("teste")
}

let calculoCombustivel = () => {
	return new Promise((resolve, reject) => {
		var campo1 = document.getElementById("gasolina");

		var gasolina = campo1.value;

		var campo2 = document.getElementById("etanol");

		var etanol = campo2.value;

		
		if(gasolina < 1 || etanol < 1){
			alert("valores invalidos");
			return;
		}

		let calculo = etanol/gasolina;

		if(calculo <= 0.7){
			return resolve(1);
		}else{
			return reject(1);
		}		
	});
}

let showMessageEtanol = () => {
	document.getElementById("resultado").innerHTML = "Melhor etanol";
	console.log("Melhor etanol");
}

let showMessageGasolina = () => {
	document.getElementById("resultado").innerHTML = "Melhor gasolina";
	console.log("Melhor gasolina");
}


let calcular = () => {
	calculoCombustivel()
	.then(showMessageEtanol)
	.catch(showMessageGasolina)
;
}