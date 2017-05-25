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
    	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});

	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	}); 
 
});

