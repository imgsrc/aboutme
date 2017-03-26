$(document).ready(function () {

    //анимация смешивания в портфолио
    $("#portfolio_grid").mixItUp();

    //смена активной ссылки в портфолио
    $(".s_portfolio li").on("click", function () {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    //открытие контакта попап
    $(".popup_content").magnificPopup({type:"image"});
    //
    $(".section_header").animated("fadeInUp", "fadeOutDown");


    // $(".animation_1").animated("flipInY", "fadeOutY");
    $(".animation_2").animated("fadeInLeft", "fadeOutLeft");
    $(".animation_3").animated("fadeInRight", "fadeOutRight");

    $(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".right .resume_item").animated("fadeInRight", "fadeOutRight");

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        }
    });

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");

    $(".top_mnu ul a").on("click", function () {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
    }).append("<span>");

    //Валидация формы в bootstrap
    $("input, select, textarea").jqBootstrapValidation();
    //плавный скролл до ID
    $(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});