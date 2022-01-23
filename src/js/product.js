import 'owl.carousel';

// Referenzen slider
$('#product-slider').owlCarousel({
  autoWidth: false,
  loop: true,
  autoplayHoverPause: true,
  nav: true,
  dots: false,
  autoplay: true,
  margin: 20,
  items: 1,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
