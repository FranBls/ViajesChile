//Incio Smooth scroll//
$(document).ready(function () {

    $("a").click(function () {
        var gato = this.hash
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 70
            },
            900
        )
    });
    //Termino smooth scroll//
    //Intervalo para carousel//
    $('#carouselSeccion').carousel({
        interval: 200
    });
})

//tooltip bottom sobre parrafo card//
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})