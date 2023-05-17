// automatic carousel with glideJS for header
const glideHero = new Glide('.hero', {
  type: 'carousel',
  animationDuration: 2000,
  autoplay: 4500,
  focusAt: '1',
  startAt: 1,
  perView: 1, 
});

glideHero.mount();

// carousel for cargo products
const cargoGlide = new Glide('.cargo', {
  type: "carousel",
  focusAt: 1,
   startAt: 1,
   perView: 4,
   breakpoints: {
		800: {
			perView: 1
		}
	  },
   gap: 0,
   keyboard: true,
   animationDuration: 2000,
   autoplay: 4500,
});

cargoGlide.mount();