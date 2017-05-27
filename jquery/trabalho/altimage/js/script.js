(function ($){
	$.fn.altImage = function(){
	var alt = $(this).attr("alt");
    $(this).each(function(){
           $(this).after('<br>'+this.alt);
        
    });
	return this;
};
})(jQuery);

$(document).ready(function(){
    $("img").altImage();
});


