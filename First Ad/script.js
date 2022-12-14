$(document).ready(function(){
    let linkActive = false;
    let splide = new Splide('.splide', {
        type    : 'loop',
        // autoplay: true,
        rewind: false,
        perPage : 1,
        autoStart: true
    })
    splide.on( 'autoplay:playing', function ( rate ) {
        if (rate == 1) {
            animation_icant_reach()
        }
    } );
    splide.mount();

    var rect = $('.tap_box')[0].getBoundingClientRect();
    var mouse = {x: 0, y: 0, moved: false};

    $(".tap_box").mousemove(function(e) {
        if (linkActive === true) return
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    $('.tap_box').mouseleave(() => {
        mouse.moved = true;
        mouse.x = 150;
        mouse.y = 120;
    })

    gsap.ticker.add(() => {
        if (mouse.moved){    
          parallaxIt(".button", -8);
          parallaxIt(".text", -10);
          parallaxIt(".background", -18);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        gsap.to(target, 0.5, {
          x: (mouse.x - rect.width / 2) / rect.width * movement,
          y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }
    
    gsap.set('.text-loading', {opacity: 0, y: -10})
    gsap.set('.progress-loading-bar', {opacity: 0})
    gsap.set('.loader', {display: 'none'})
    gsap.fromTo('.splide__arrow--next', {opacity: 0, right: -30}, {opacity: 1, right: -3, duration: 0.5})
    gsap.fromTo('.splide__arrow--prev', {opacity: 0, left: -30}, {opacity: 1, left: -3, duration: 0.5})
    gsap.fromTo('.background', {scaleX: 2.5, scaleY: 2.5, y: 0}, {scaleX: 1.2, scaleY: 1.2, y: 0, duration: 1})
    gsap.fromTo('.splide__slide', {opacity: 0}, {opacity: 1, duration: 0.5})
    gsap.fromTo('.logo', {opacity: 0, y: -20}, {opacity: 1, y:0, duration: 0.5})
    gsap.fromTo('.text', {opacity: 0, y: 20}, {opacity: 1, y:0, duration: 0.5})
    gsap.fromTo('.splide__pagination', {opacity: 0, y: 20}, {opacity: 1, y:0, duration: 0.5, delay: 0.4})
    gsap.fromTo('.button', {opacity: 0, y: 20}, {opacity: 1, y:0, duration: 0.5, delay: 0.2})


    $('.go-out').on('click', function (e) {
        mouse.moved = false;
        linkActive = true
        let link = $(this).attr('href')
        $('.tap_box').removeClass('tap_box')
        e.preventDefault();
        outTro()
        setTimeout(() => {
            window.parent.location.href = link
        }, 1500);
    })

    $('.splide__pagination__page').on('click', function() {
        animation_icant_reach()
    })

    $('.splide__arrow--prev').on('click', function () {
        // let prev = $('.splide__slide.is-prev')[0];
        // let clonePrev = $('.splide__slide.splide__slide--clone.is-prev')[0]
        // if (clonePrev) {
            return animation_icant_reach()
        // }
        // if (prev) {
            // return animation_slide(prev)
        // }
    })

    $('.splide__arrow--next').on('click', function () {
        // let next = $('.splide__slide.is-next')[0];
        // let cloneNext = $('.splide__slide.splide__slide--clone.is-next')[0]
        // if (cloneNext) {
            return animation_icant_reach()
        // }
        // if (next) {
            // return animation_slide(next)
        // }
    })

    function animation_slide(dom) {
        let background = $(dom).find('.background')
        let logo = $(dom).find('.logo')
        let text = $(dom).find('.text')
        let button = $(dom).find('.button')

        $('.splide__arrows button').attr("disabled", true);

        gsap.fromTo(background, {scaleX: 1.8, scaleY: 1.8}, {scaleX: 1.2, scaleY: 1.2, y:0, duration: 1.2})
        gsap.fromTo(logo, {opacity: 0, y: -20}, {opacity: 1, y:0, duration: 0.8})
        gsap.set(text, {opacity: 0, y: 30})
        gsap.to(text, {opacity: 1, y:0, duration: 0.8, delay: 0.15})
        gsap.set(button, {opacity: 0, y: 30})
        gsap.to(button, {opacity: 1, y:0, duration: 0.8, delay: 0.3})

    }

    function animation_icant_reach() {
        $('.splide__arrows button').attr("disabled", true);

        gsap.fromTo('.background', {scaleX: 1.8, scaleY: 1.8}, {scaleX: 1.2, scaleY: 1.2, y:0, duration: 1.2})
        gsap.fromTo('.logo', {opacity: 0, y: -20}, {opacity: 1, y:0, duration: 0.8})
        gsap.fromTo('.text', {opacity: 0, y: 30}, {opacity: 1, y:0, duration: 0.8})
        gsap.fromTo('.button', {opacity: 0, y: 30}, {opacity: 1, y:0, duration: 0.8, delay: 0.1})
    }

    function outTro() {
        gsap.set('.loader', {display: 'block'})
        gsap.to('.logo', {opacity: 0, y: -20, duration: 0.3})
        gsap.to('.text', {opacity: 0, y: 20, duration: 0.2, delay: 0.2})
        gsap.to('.button', {opacity: 0, y: 20, duration: 0.2, delay: 0.1})
        gsap.to('.splide__pagination', {opacity: 0, y: 20, duration: 0.2})
        gsap.to('.splide__arrow--next', {opacity: 0, right: -50, delay: 0.3})
        gsap.to('.splide__arrow--prev', {opacity: 0, left: -50, delay: 0.3})
        gsap.to('.background', {opacity: 0, delay: 0.5})
        gsap.to('.loading-bar', { height: 4, delay: 0.8, duration: 0.3})
        gsap.to('.loading-bar', { width: 180, delay: 1, duration: 0.3})
        gsap.to('.text-loading', {opacity: 1, y: 0, display: 'block', delay: 1.1})
        gsap.to('.progress-loading-bar', {width: 30, opacity: 1, duration: 0.3, delay: 1.3})
        gsap.to('.progress-loading-bar', {width: 80, duration: 0.3, delay: 1.5})
        gsap.to('.progress-loading-bar', {width: 100, duration: 0.3, delay: 2})
        gsap.to('.progress-loading-bar', {width: 120, duration: 0.3, delay: 2.5})
        gsap.to('.progress-loading-bar', {width: 150, duration: 0.3, delay: 2.8})
    }
    
})