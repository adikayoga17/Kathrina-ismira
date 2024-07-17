/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial-container', {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints:{
            767:{
                slidesPerView: 2,
            }
        }
    }
)