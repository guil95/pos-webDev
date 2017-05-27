$(document).ready(function () {
    $('.dropdown').hover(
            function () {
                $(this).children('.sub-menu').slideDown(200);
            },
            function () {
                $(this).children('.sub-menu').slideUp(200);
            }
    );

    $('.banners').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',

    });
    $('#scrollToTop').fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    $('#scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $.ajax({
        url: "json/estados-cidades.json",
        dataType: "json",
        type: "GET"
    }).done(function (data) {
        var html = '';
        for (var i in data.estados) {
            html += '<option value=' + i + '>' + data.estados[i].nome + '</option>';
        }
        console.log(html)
        $("#estado").append(html);
    });

    $("#estado").click(function () {
        var estado = $(this).val();
        $.ajax({
            url: "json/estados-cidades.json",
            dataType: "json",
            data: {estado: estado},
            type: "GET"
        }).done(function (data) {
            var html = '';
            for (var i in data.estados[estado].cidades) {
                html += '<option value=' + i + '>' + data.estados[estado].cidades[i] + '</option>';
            }
            $("#cidade").html(html);
        });
    });
    $(".slick-dots").remove();

    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#formulario").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            }
        }
    });
    $( "#dtNascimento" ).datepicker();
    
    var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$('#telefone').mask(SPMaskBehavior, spOptions);

	$('.galeria').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
    
    $(".galeria").fadeOut();
    $("#galeria").on("click",function(){
        $("#formulario").fadeOut("slow");
        $(".galeria").fadeIn("slow");
    });
    $(".formulario").on("click",function(){
        $(".galeria").fadeOut("slow");
        $("#formulario").fadeIn("slow");
    });
});


