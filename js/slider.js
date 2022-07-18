const swiper1 = new Swiper(".slider-1",{
  autoplay:{
    delay:3500,
    disableOnInteraction:false,
  },
  grapbCursor: true,
  effect: 'fade',
  loop: true,
  navigation :{
    nextEl:".swiper-next",
    prevEl:".swiper-prev" 
  }
});

var swiper2 = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30
  ,
  loop:true,
  breakpoints:{
    640:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:3,
    },
    1024:{
      slidesPerView:4,
    }
  }

});

var swiper3 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30
  ,
  loop:true,
  breakpoints:{
    640:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:3,
    },
    1024:{
      slidesPerView:4,
    }
  }

});
