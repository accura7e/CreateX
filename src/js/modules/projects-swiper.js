// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function swiperProjects(){
    const swiper = new Swiper('.swiper-projects', {
        // Optional parameters
    

        slidesPerView: 3,
        // If we need pagination

        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.projects__button-next',
          prevEl: '.projects__button-prev',
        },
      
        
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            425: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

          },
        // And if we need scrollbar

    });
}



  export default swiperProjects