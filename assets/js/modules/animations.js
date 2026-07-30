/* ========================================
   SCROLL ANIMATIONS (Intersection Observer)
   ======================================== */
function initScrollAnimations() {
	const fadeElements = document.querySelectorAll('.fade-in');
	
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	});

	fadeElements.forEach(el => observer.observe(el));

	// Отдельный observer для карточек руководителей и экспонатов
	const cards = document.querySelectorAll('.leader-card, .exhibit-card');
	cards.forEach((card, index) => {
		card.style.transitionDelay = `${index * 0.005}s`;
	});
}

/* ========================================
   SMOOTH SCROLL
   ======================================== */
function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
}