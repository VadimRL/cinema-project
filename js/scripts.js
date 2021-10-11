const schemeSvg 	= document.querySelector('.scheme-svg'),
	  totalPriceTag = document.querySelector('.price-total'),
	  menuButton 	= document.querySelector('.m-menu'),
	  menu 			= document.querySelector('.menu');

let cost 		= 800,
	totalPrice  = 0;

schemeSvg.addEventListener('click', e => {
	if (!e.target.classList.contains('booked') && !e.target.classList.contains('light')) {
		e.target.classList.toggle('active');
		let totalSeats = schemeSvg.querySelectorAll('.active').length;
		totalPrice = totalSeats * cost;
		totalPriceTag.textContent = totalPrice; 
	}
})

menuButton.addEventListener('click', () => {
	menu.classList.toggle('is-open');
})
