/* ========================================
   RENDER LEADERS (РУКОВОДИТЕЛИ)
   ======================================== */
function renderLeaders() {
	const grid = document.getElementById('leadersGrid');
	
	leadersData.forEach(leader => {
		const card = document.createElement('div');
		card.className = 'leader-card fade-in';
		card.dataset.id = leader.id;
		
		// Если это карточка героя — добавляем особый класс
		if (leader.isHero) {
			card.classList.add('hero-card');
		}
		
		const eraLabel = {
			'empire': 'Империя',
			'ussr': 'СССР',
			'modern': 'Современность'
		}[leader.era];

		card.innerHTML = `
			${leader.isHero ? '<div class="hero-badge-star">★</div>' : ''}
			<div class="leader-portrait">
				<div class="leader-portrait-placeholder">${leader.initial}</div>
			</div>
			<div class="leader-info">
				<h3 class="leader-name">${leader.name}</h3>
				<div class="leader-period">${leader.period}</div>
				<p class="leader-role">${leader.role}</p>
				<span class="leader-era-tag">${eraLabel}</span>
			</div>
		`;

		card.addEventListener('click', () => openLeaderModal(leader));
		grid.appendChild(card);
	});
}

/* ========================================
   RENDER EXHIBITS (ЭКСПОНАТЫ С ФОТОГРАФИЯМИ)
   ======================================== */
function renderExhibits() {
	const grid = document.getElementById('exhibitsGrid');
	
	exhibitsData.forEach((exhibit, index) => {
		const card = document.createElement('div');
		card.className = 'exhibit-card fade-in';
		card.dataset.id = index + 1;
		card.dataset.era = exhibit.era;
		
		// Проверяем, есть ли фотография
		const hasImage = exhibit.image && exhibit.image.trim() !== '';
		
		card.innerHTML = `
			<div class="exhibit-image">
				${hasImage 
					? `<img src="${exhibit.image}" alt="${exhibit.title}" class="exhibit-photo" loading="lazy">`
					: `<div class="exhibit-icon">${exhibit.icon}</div>`
				}
			</div>
			<div class="exhibit-info">
				<h3 class="exhibit-title">${exhibit.title}</h3>
				<div class="exhibit-year">${exhibit.year}</div>
				<p class="exhibit-desc">${exhibit.description}</p>
			</div>
		`;

		card.addEventListener('click', () => openExhibitModal(index + 1));
		grid.appendChild(card);
	});
}

/* ========================================
   FILTERS ДЛЯ ЭКСПОНАТОВ
   ======================================== */
function initFilters() {
	const filterBtns = document.querySelectorAll('.filter-btn');
	const exhibitCards = document.querySelectorAll('.exhibit-card');

	filterBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			// Убираем active у всех кнопок
			filterBtns.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');

			const filter = btn.dataset.filter;

			exhibitCards.forEach(card => {
				if (filter === 'all' || card.dataset.era === filter) {
					card.classList.remove('hidden');
					setTimeout(() => card.classList.add('visible'), 50);
				} else {
					card.classList.add('hidden');
					card.classList.remove('visible');
				}
			});
		});
	});
}