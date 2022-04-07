$(document).ready(function(){

    $(window).scroll(function(){
        let windowWidth = $(window).width();

        if (windowWidth > 800) {
            let scroll = $(this).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 15 + '%)'
            });
        }
    });

    $(window).resize(function(){
        let windowWidth = $(window).width();

        if (windowWidth < 800) {
            $('.acerca-de article').css({
                    'transform': 'translate(0px, 0px)'
            });
        }
    });

});