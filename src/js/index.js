// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';



const topSwiper = new Swiper('.swiperTop', {
    // Optional parameters
   
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });