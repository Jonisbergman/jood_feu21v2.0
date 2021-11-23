var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loopedSlides: "5",
  // spaceBetween: "1",
  // initialSlide: "3",
  // setWrapperSize: true,

  
  coverflowEffect: {
    rotate: 0,
    stretch: -80,
    depth: 100,
    modifier: 1.5,
    slideShadows: false,
  },
});