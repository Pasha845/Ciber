const categorySlider = new Swiper('.category__slider', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 32,
  navigation: {
    nextEl: ".category__next",
    prevEl: ".category__prev"
  },
  scrollbar: {
    hide: true
  }
})