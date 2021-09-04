const commonOptions = {
  controls: false,
  arrowKeys: true,
  navAsThumbnails: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
}

const productCarousel = tns({
  ...commonOptions,
  container: '.product-carousel .slider-list',
  navContainer: '.product-carousel .thumbnail-list',
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
})

const userGallery = tns({
  ...commonOptions,
  container: '.user-gallery .slider-list',
  gutter: 4,
  edgePadding: 16,
  controlsContainer: '.user-gallery-controls',
  navContainer: '.user-gallery .thumbnail-list',
  loop: false,
  responsive: {
    768: {
      gutter: 6,
      edgePadding: 75,
      controls: true,
    },
  },
})
