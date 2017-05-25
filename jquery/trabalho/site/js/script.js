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
        url: "/json/estados-cidades.json",
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
            url: "/json/estados-cidades.json",
            dataType: "json",
            data: {estado : estado},
            type: "GET"
        }).done(function (data) {
            var html = '';
            for(var i in data.estados[estado].cidades){
                html += '<option value='+i+'>'+data.estados[estado].cidades[i]+'</option>';
            }
            $("#cidade").html(html);
        });
    });

});

