
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function testimonialsSlider(){
    const swiper = new Swiper('.testimonials-swiper', {
        // Optional parameters

        loop: true,
        keyboard: true,
        // If we need pagination

      
        // Navigation arrows
        navigation: {
          nextEl: '.testimonials__bottom-btn-next',
          prevEl: '.testimonials__bottom-btn-prev',
        },
      
        // And if we need scrollbar

      });
    
}

export default testimonialsSlider