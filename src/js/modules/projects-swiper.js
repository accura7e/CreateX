// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function swiperProjects(){
    const swiper = new Swiper('.swiper-projects', {
        // Optional parameters
    


        // If we need pagination

        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.projects__button-next',
          prevEl: '.projects__button-prev',
        },
      
        
        breakpoints: {
            450: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

          },
        // And if we need scrollbar

    });
}



  export default swiperProjects