function abrirModal(content,tipo,titulo){
	var modal = document.getElementById('modal');
	var modalConteudo = document.getElementById('modal-container');
	var html = '';
	if(tipo == 2){

	html = '<img src="'+content+'">';
}
if(tipo == 1){
	html = '<div class="textoModal"><h1 class="titulo">'+titulo+'</h1><p>'+content+'</p></div>';
}
	modalConteudo.innerHTML = html;
	modal.style.display = "block";
}

function fecharModal(){
	var modal = document.getElementById('modal');
	modal.style.display = "none";
}