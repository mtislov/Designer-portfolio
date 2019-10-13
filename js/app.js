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

    modalCall.on("click", function(event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data("modal");
        

        $(modalId).addClass("active");
    });

    
    
});