$(document).ready(function(){

    //Efecto para el menu horizontal
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //Efecto Header
    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    // Scroll Elemento menu
    let menu = $('.main .menu').offset().top,
    galeria = $('.galeria').offset().top,
    ubicacion = $('.mapa').offset().top;
    
    //Boton "Acerca de"
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 500
        }, 500);
    });

    //Boton "Menu
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu + 400
        });
    });

    //Boton "Galeria"
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria - 90
        });
    });

    //Boton "Ubicacion"
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion - 40
        });
    });

});