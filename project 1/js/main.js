$(document).ready(function() {
    $('.mikhail').on('click',function () {
        $('html,body').animate({scrollTop:$('#arti').offset().top},1000);
    });

    $('.koko').on('click',function () {
        $('html,body').animate({scrollTop:$('#arti').offset().top},1000);
    });

    $('.kok').on('click',function () {
        $('html,body').animate({scrollTop:$('#test').offset().top},1000);
    });



    //hidden the scrollup
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $("#backtotop").addClass("visible");
        } else {
            $("#backtotop").removeClass("visible");
        }
    });

});