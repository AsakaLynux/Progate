//News1
$(function() {
    var inWrap = $('.inner-wrapper'),
        $slide = $('.slide');

    function slideNext() {
        inWrap.animate({ left: '-200%' }, 200, function() {
            inWrap.css('left', '-100%');
            $('.slide').last().after($('.slide').first());
        });
    }
    sliderInterval = setInterval(slideNext, 5000);
    $('.prev').on('click', function() {
        inWrap.animate({ left: '0%' }, 200, function() {
            inWrap.css('left', '-100%');
            $('.slide').first().before($('.slide').last());

        });
    });
    $('.next').on('click', function() {

        clearInterval(sliderInterval);
        slideNext();
    });


});

function authorScroll() {
    document.getElementById("author").scrollIntoView;
}

function aboutScroll() {
    document.getElementById("about").scrollIntoView;
}

// Top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}