var detectaIsograma = (palavrastr) => {
var controle = [];
var palavra  = palavrastr.toUpperCase();
for(var i = 0; i < palavra.length; i++){
	 if(typeof controle[palavra[i]] == "undefined"){
   		controle[palavra[i]] = 1;
   }else{
   		return true;
   }
}
	return false;
}
