/**
 * Created by Burki on 26/11/2015.
 */

$(document).ready(function() {

    // pocetak funkcije
    function getSize() {

        // uzimanje visine i sirine prozora
        var winHeight = $(window).height();
        var winWidth = $(window).width();

        // prilagodba divova visini i sirini
        $('[data-full="true"]').css({'width' : winWidth+'px', 'height' : winHeight+'px'});

        // prilagodba za iPhone-ove
        if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            $('[data-full="true"]').css({'width' : winWidth+'px', 'height' : winHeight+70+'px'});
            $('#home').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
        }


        // Micanje klasa
        $('#menu a').removeClass('current');
        $('#header').removeClass('dark light');


        // Provjera na kojem je pageu
        var currentPage = $(window).scrollTop() + 60;

        if(currentPage < winHeight) {
            // dodavanje korektnih klasa
            $('#menu a[href="#home"]').addClass('current');
            $('#header').addClass('light');
        } else if(currentPage > winHeight && currentPage < winHeight*2) {
            $('#menu a[href="#two"]').addClass('current');
            $('#header').addClass('dark');
        } else if(currentPage > winHeight*2 && currentPage < winHeight*3) {
            $('#menu a[href="#three"]').addClass('current');
            $('#header').addClass('dark');
        } else if(currentPage > winHeight*3 && currentPage < winHeight*4) {
            $('#menu a[href="#four"]').addClass('current');
            $('#header').addClass('light');

        }
    }

    // kad se klikne header
    $('#header ul li a').click(function() {
        // Get the hash of the anchor
        var hash = $(this).attr('href');
        // uzmi offset(i.e. height dokumenta) plus 2
        var offset = $(hash).offset().top+2;

        // animacija da se uspori scrollanje
        $('html,body').animate({scrollTop: offset},'slow', function() {
            // promijeni hash nakon scrollanja.
            window.location.hash = hash;
        });
        return false;
    });

    // prilikom scrollanja
    $(window).scroll(function() {
        // pretpostavljeno da ne scrollaju izvan dokumenta (mobile)
        if($(window).scrollTop() < $(window).height()*3.5) {
            // mijenjanje poziciji headera tako da je uvijek na vrhu
            $('#header').stop().animate({'top' : $(window).scrollTop()+'px'}, 20);
        }
    });

    // prilikom resizeanja
    $(window).resize(function() {
        // uzimanje Hash i visine
        var hash = window.location.hash;
        var height = $(window).height();

        // zadrzavanje pozicije scrollanja ovisno o anchoru
        if(hash == '#home') { $(window).scrollTop(0); }
        else if(hash == '#two') { $(window).scrollTop(height); }
        else if(hash == '#three') { $(window).scrollTop(((height*2))); }
        else if(hash == '#four') { $(window).scrollTop((height*3)); }

    });

    // four

    function aboutPage() {
        // uzimanje sirine i visine about pagea pa dijelimo s 4
        var aboutWidth = $('#four').width();
        var aboutHeight = $('#four').height() / 4;
    }

    // CONTACT

    function contactBackground() {
        // sirina prozora
        var theWidth = $(window).width();


    }

    /* pokretanje svih funkcija */

    contactBackground();
    aboutPage();
    getSize();
    $(window).resize(getSize);
    $(window).scroll(getSize);

});


