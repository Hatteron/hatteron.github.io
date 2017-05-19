$(function(){
    $('[placeholder]').placeholder();
	$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
	});
    $('.tov-img2').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        fade: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
    });
    $("a.tov-button2").click(function(){
        var title = $(this).attr("title");
        var el=$(this).parents(".section");
        $(el).append("<div class='pop-form'><div><form action='' method='post' class='cpa__order_form'><div><input type='text' name='name' placeholder='Введите Ф.И.О'></div><div><input type='text' name='phone' placeholder='Введите телефон'></div><div><button class='button'>Получить скидку</button></div><input type='hidden' name='comment'></form></div></div>");
        if ($(".pop-form").css('display') == 'none') {
            $(".pop-form").animate({height: 'show'}, "fast");
            $(this).css({'background-color' : '#cccccc', 'border-color' : '#aaaaaa', 'color' : '#999999'});
            $(this).text("Скрыть")
        } else {
            $(".pop-form").animate({height: 'hide'},"fast", function(){$(this).remove()});
            $(this).css({'background-color' : '#4090db', 'border-color' : '#4090db', 'color' : '#fff'});
            $(this).text("Получить скидку")
        }
        $("input[name='comment']").val(title);
        
        return false;
    });
    
});
 