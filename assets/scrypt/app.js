$(function () {

    /* fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(introH, scrollPos);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(introH, scrollPos);
    });

    function checkScroll(introH, scrollPos) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    console.log(introH);
    console.log(scrollPos);
    /* fixed header */

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        console.log(elementID);
        console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 65
        }, 800)
    });
});