document.addEventListener('DOMContentLoaded', () => {
	// Navigation links hover
	let navLinks = document.querySelectorAll('nav a, .social a');

	navLinks.forEach((navLink) => {
		navLink.addEventListener('mouseenter', () => {
			let letter = navLink.querySelectorAll('.letter');
			anime.remove(letter);
			anime.timeline({
				targets: letter,
			})
			.add({
				translateX: [0, -30],
				opacity: [1, 0],
				easing: 'easeInExpo',
				duration: 500,
				delay: (el, i) => 30 * i,
			})
			.add({
				translateX: [40, 0],
				opacity: [0, 1],
				easing: 'easeOutExpo',
				duration: 1100,
				delay: (el, i) => 30 * i,
			})
		})
	})

	// Gallery nav hover
	let galleryLinks = document.querySelectorAll('.gallery-nav div');

	galleryLinks.forEach((galleryLink) => {
		galleryLink.addEventListener('mouseenter', () => {
			anime.remove(galleryLink);
			anime({
				targets: galleryLink,
				scale: 1.1,
				translateX: -5,
				translateY: -5,
				easing: 'easeOutExpo',
			})
		})

		galleryLink.addEventListener('mouseleave', () => {
			anime.remove(galleryLink);
			anime({
				targets: galleryLink,
				scale: 1,
				translateX: 0,
				translateY: 0,
				easing: 'easeOutExpo',
			})
		})
	})
})
