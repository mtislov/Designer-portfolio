/* Smooth Scroll */

$(function() {
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("scroll");
        var blockOffset = $(blockId).offset().top;

        $("#menu__list a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })
});