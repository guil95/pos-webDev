(function ($) {
    $.fn.subString = function () {
        $(this).each(function () {
            var texto = $(this).html();
            texto = texto.replace(/e/ig, 'enter');
            texto = texto.replace(/i/ig, 'inis');
            texto = texto.replace(/o/ig, 'omber');
            texto = texto.replace(/u/ig, 'ufter');
            texto = texto.replace(/a/ig, 'ais');
            $(this).html(texto);
        });
        return this;
    };
})(jQuery);

$(document).ready(function () {
    $("p").subString();
});


