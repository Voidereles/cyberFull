// new WOW().init();

// new fullpage('#fullpage', {
//     // anchors: ['heroPage', '1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage',
//     //     'lastPage'
//     // ],
//     autoScrolling: true,
//     // scrollHorizontally: true

// });


// // fullpage_api.setAllowScrolling(true);
// new fullpage('#fullpage', {
//     // anchors: ['heroPage', '1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage',
//     //     'lastPage'
//     // ],
//     autoScrolling: true,
//     onLeave: function (origin, destination, direction) {
//         console.log(destination.item);

//     }
//     // scrollHorizontally: true

// });


// var myFullpage = new fullpage('#fullpage', {
//     anchors: ['heroPage', '1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage',
//         'lastPage'
//     ],
//     menu: '#menu',
//     lazyLoad: true
// });

//methods
// fullpage_api.setAllowScrolling(false);


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
})



$('.about__carousel').owlCarousel({
    loop: true,
    dots: true,
    lazyLoad: true,
    margin: 5,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1
});

$('.refer__carousel').owlCarousel({
    loop: true,
    dots: true,
    lazyLoad: true,
    margin: 35,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: true,
        },
        600: {
            items: 3,
            margin: 28,
            nav: false
        },
        1000: {
            items: 4,
            margin: 48,
            nav: false
        },
        1400: {
            items: 5
        }
    }
});

$('.news__carousel').owlCarousel({
    loop: true,
    dots: false,
    lazyLoad: true,
    margin: 25,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 15
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        1900: {
            items: 5
        }
    }
});







$(document).ready(function () {
    $("a[href*='#']:not([href='#])").click(function () {
        let target = $(this).attr("href");
        $('html,body').stop().animate({
            scrollTop: $(target).offset().top - 10
        }, 1000);
        event.preventDefault();


        $('.header__nav').removeClass('header__nav--entered');
        $('.nav-toggle').removeClass('nav-toggle--entered');
    });

    // $('body').scrollspy({
    //     target: '.navbar'
    // })

    // $('[data-spy="scroll"]').each(function () {
    //     var $spy = $(this).scrollspy('refresh')
    // });

    $(window).bind('scroll', function () {
        var currentTop = $(window).scrollTop();
        var elems = $('.scrollspy');
        elems.each(function (index) {
            var elemTop = $(this).offset().top - 100;
            var elemBottom = elemTop + $(this).height();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                var id = $(this).attr('id');
                var navElem = $('a[href="#' + id + '"]');
                navElem.addClass('active').siblings().removeClass('active');
            }
        })
    });

    $('.header__logo').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 1000);
    })

    $('.nav-toggle').click(function () {
        $('.header__nav').toggleClass('header__nav--entered');
        $('.nav-toggle').toggleClass('nav-toggle--entered');
    })

    // $(".projects__title")


});





// if ('IntersectionObserver' in window) {
//     // IntersectionObserver Supported
//     let config = {
//         root: null,
//         rootMargin: '0px',
//         threshold: 0.5
//     };

//     let observer = new IntersectionObserver(onChange, config);
//     sections.forEach(function (img) {
//         observer.observe(img)
//     });

//     function onChange(changes, observer) {
//         changes.forEach(function (change) {
//             if (change.intersectionRatio > 0) {
//                 // Stop watching and load the image
//                 loadImage(change.target);
//                 observer.unobserve(change.target);
//             }
//         });
//     }

// } else {
//     // IntersectionObserver NOT Supported
//     sections.forEach(function (image) {
//         loadImage(image);
//     });
// }

// function loadImage(image) {
//     image.classList.add('fade-in');

//     if (image.dataset && image.dataset.src) {
//         image.src = image.dataset.src;
//     }

//     if (image.dataset && image.dataset.srcset) {
//         image.srcset = image.dataset.srcset;
//     }
// }