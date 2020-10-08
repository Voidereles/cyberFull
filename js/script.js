// new WOW().init();

var introLogo = document.getElementById('IntroLogo');

(function () {

    var throttle = function (type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function () {
    scaleValue = window.pageYOffset / 50;
    if (scaleValue <= 1) {
        scaleValue = 1;
    }
    // introLogo.style.transform = "translate(-50%, -350%) scale(" + scaleValue + ")";
});



$(document).ready(function () {
    // $("a[href*='#']:not([href='#])").click(function () {
    //     let target = $(this).attr("href");
    //     $('html,body').stop().animate({
    //         scrollTop: $(target).offset().top - 10
    //     }, 1000);
    //     event.preventDefault();


    //     $('.header__nav').removeClass('header__nav--entered');
    //     $('.nav-toggle').removeClass('nav-toggle--entered');
    // });

    // $('body').scrollspy({
    //     target: '.navbar'
    // })

    // $('[data-spy="scroll"]').each(function () {
    //     var $spy = $(this).scrollspy('refresh')
    // });

    // $(window).bind('scroll', function () {
    //     var currentTop = $(window).scrollTop();
    //     var elems = $('.scrollspy');
    //     elems.each(function (index) {
    //         var elemTop = $(this).offset().top - 100;
    //         var elemBottom = elemTop + $(this).height();
    //         if (currentTop >= elemTop && currentTop <= elemBottom) {
    //             var id = $(this).attr('id');
    //             var navElem = $('a[href="#' + id + '"]');
    //             navElem.addClass('active').siblings().removeClass('active');
    //         }
    //     })
    // });

    // $('.header__logo').click(function () {
    //     $('html,body').stop().animate({
    //         scrollTop: 0
    //     }, 1000);
    // })

    // $('.nav-toggle').click(function () {
    //     $('.header__nav').toggleClass('header__nav--entered');
    //     $('.nav-toggle').toggleClass('nav-toggle--entered');
    // });

});