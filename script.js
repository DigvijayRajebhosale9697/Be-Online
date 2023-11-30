function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


let T = gsap.timeline()

T.from('.Main,.Nav,.Content,.Right', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})



let T2 = gsap.timeline()
T2.from('.Main2, .Left2 ,.SR,.S, .Right2', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger: '.Main2, .Left2 ,.SR,.S, .Right2',
        scroller: 'body',
        // markers:true,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 5
    }
})

let T3 = gsap.timeline()
T3.from('.Testimonials, .T-C ,.testimonial', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger: '.Testimonials, .T-C ,.testimonial',
        scroller: 'body',
        // markers:true,
        start: 'top 60%',
        end: 'top 10%',
        scrub: 5
    }
})

let T4 = gsap.timeline()
T4.from('.Card, .Left3 ,.Right3', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger: '.Card, .Left3 ,.Right3',
        scroller: 'body',
        // markers:true,
        start: 'top 60%',
        end: 'top 10%',
        scrub: 5
    }
})


let T5 = gsap.timeline()
T5.from('.review-head, .reviews-container ,.review-card', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.review-head, .reviews-container ,.review-card',
        scroller: 'body',
        // markers:true,
        start: 'top 90%',
        end: 'top 50%',
        scrub: 5
    }
})


let T6 = gsap.timeline()
T6.from('.Con, .SL ,.Left5,.Right5,.Main-C,.C1,.C2', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.Con, .SL ,.Left5,.Right5,.Main-C,.C1,.C2',
        scroller: 'body',
        // markers:true,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 5
    }
})

let T7 = gsap.timeline()
T7.from('.footer,.F', {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.5,
    scrollTrigger:
    {
        trigger:'.footer,.F',
        scroller: 'body',
        // markers:true,
        start: 'top 100%',
        end: 'top 90%',
        scrub: 5
    }
})

