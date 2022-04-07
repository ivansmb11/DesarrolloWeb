$(document).ready(function(){

    $(window).scroll(function(){
        let windowWidth = $(window).width();

        if (windowWidth > 800) {
            let scroll = $(this).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 3 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, ' + scroll / 5 + '%)'
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