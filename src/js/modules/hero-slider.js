import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


function heroSlider(){
    const swiper = new Swiper('.hero-swiper', {
        // Optional parameters

        loop: true,
        speed: 1500,
        parallax: true,
        grabCursor: true,
        autoplay: true,
        autoplay: {
          delay: 2000
        },
        // If we need pagination
        pagination: {
          el: '.hero__slider-pagination',
          renderBullet: function (index, className) {
            return `<span class="${className}">
                      <span class="pagination-num">0${(index + 1)}</span>
                    </span>`
          },
        },

        // 
        
        

        // Navigation arrows
        navigation: {
          nextEl: '.hero__slider-btn-next',
          prevEl: '.hero__slider-btn-prev',
        },
      
        // And if we need scrollbar

      });
}

export default heroSlider