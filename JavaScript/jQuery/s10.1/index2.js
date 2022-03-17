// $(document).ready(function(){

    function efecto1() {
        $('.caja').hide(3000, function() {
            alert('Explica que pasó.')
        });
    }

    const efecto2 = () => {
        $('.caja').toggle(3000);
    }

    const efecto = () => {
        $('.caja').fadeOut(2000);
    }

    const efecto4 = () => {
        $('.caja').fadeIn(2000);
    }

    const efecto5 = () => {
        $('.caja').fadeToggle(1000);
    }

    const efecto6 = () => {
        $('.caja').slideUp(2000);
    }

    const efecto7 = () => {
        $('.caja').slideDown(1000);
    }

    const efecto8 = () => {
        $('.caja').slideToggle();
    }

// });