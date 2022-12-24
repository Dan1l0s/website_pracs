$(document).ready(function() {
    $('.menu-burger').click(function() {
        $('.menu-burger').toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
        $('.main').toggleClass('open-menu');
    });

    $('.close-menu').click(function() {
        $(window).scrollTop(0);

        $('.menu-burger').toggleClass('open-menu', false);
        $('.nav').toggleClass('open-menu', false);
        $('.main').toggleClass('open-menu', false);
        var height;
        if ($(document).width() > 850) {
            height = -10;
        }
        else {
            height = document.getElementById('menu-burger').clientHeight;
        }
        var pos = $($(this).attr("href")).position().top;
        $(window).scrollTop(pos-height);

        return false;
    });

    $('.top').click(function() {
        $(window).scrollTop(0);
        return false;
    });
});




