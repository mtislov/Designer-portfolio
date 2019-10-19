/* Smooth Scroll */

$(function() {
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("#menu__list a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })
});


/* Modal */ 

$(function() {

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");


    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('active');
        $("body").addClass('scroll-off');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('active');
            $("body").removeClass('scroll-off');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('active');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
});