/* ========================================
   NAVBAR: SCROLL EFFECT & MOBILE MENU
   ======================================== */
function initNavbar() {
	const navbar = document.getElementById('navbar');
	const navToggle = document.getElementById('navToggle');
	const navMenu = document.getElementById('navMenu');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 50) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});

	navToggle.addEventListener('click', () => {
		navMenu.classList.toggle('active');
	});

	// Закрытие меню при клике на ссылку
	navMenu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			navMenu.classList.remove('active');
		});
	});
}