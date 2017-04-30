$(document).ready(function(){
	
	$("#bt-enviar").click(detectaVazio);

	$("#bt-limpar").click(limparCampos);

	$("input").on("keypress", function(){
		$(this).css("background", "#FFF");
		}
	);

	redLabel();

	thirdYellow();

	inserirHtml();
	
});

var detectaVazio = (e) => {
	e.preventDefault();
	var esconder = true;
	$("input").each(function(){
		if($(this).val() == ""){
			$(this).css("background", "#FF0000");
			esconder = false;
		}
	});
	if(esconder){
		esconderTitulo();
	}
};

var limparCampos = (e) => {
	e.preventDefault();
	$("input").each(function(){
		if($(this).attr("type") != "submit"){	
			$(this).val("");
			$(this).css("background", "#FFF");
		}
	});
};

var redLabel = () => {
	$("label").css("color", "#F00");
}

var thirdYellow = () => {
	$("#lista-exercicios li").eq(2).css("background-color", "yellow");
}

var inserirHtml = () => {
	$("#lista-exercicios").append("<li>Novo Item Apend</li>");
	$("<li>Novo Item ApeendTo</li>").appendTo("#lista-exercicios");
}

var esconderTitulo = () => {
	$("h2").fadeOut('slow');
}