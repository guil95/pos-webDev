$(document).ready(function(){
	esconderSubItens();
	$("h2").click(function(){
		if($(this).next().is(":visible")){			
		   $(this).next().slideUp();
		}else{
			$(this).next().slideDown();
		}
	});
	$("li a").click(function(){
		$(this).toggleClass("red");
	});
	$("#exercicios").fadeOut("slow");
});

var esconderSubItens = () => {
	$("ul").hide();
}