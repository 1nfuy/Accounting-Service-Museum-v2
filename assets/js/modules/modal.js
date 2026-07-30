/* ========================================
   MODAL (МОДАЛЬНОЕ ОКНО БИОГРАФИЙ)
   ======================================== */
function initModal() {
    const modal = document.getElementById('leaderModal');
    const modalClose = document.getElementById('modalClose');

    if (!modal || !modalClose) return;

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openLeaderModal(leader) {
    const modal = document.getElementById('leaderModal');
    const portrait = document.getElementById('modalPortrait');
    const title = document.getElementById('modalTitle');
    const period = document.getElementById('modalPeriod');
    const role = document.getElementById('modalRole');
    const bio = document.getElementById('modalBio');
    const achievements = document.getElementById('modalAchievements');
    const awards = document.getElementById('modalAwards');

    // Сброс предыдущих значений
    portrait.textContent = leader.initial;
    title.textContent = leader.name;
    period.textContent = leader.period;
    role.textContent = leader.role;
    bio.textContent = leader.bio;
    achievements.textContent = leader.achievements;
    portrait.style.boxShadow = '';
    portrait.style.borderColor = '';

    awards.innerHTML = '';
    if (leader.awards && leader.awards.length > 0) {
        leader.awards.forEach(award => {
            const li = document.createElement('li');
            li.textContent = award;
            awards.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Информация уточняется';
        li.style.fontStyle = 'italic';
        awards.appendChild(li);
    }

    // 🎖 Для героя — добавляем расширенный контент
    if (leader.isHero) {
        const modalContent = modal.querySelector('.modal-content');
        const awardsSection = modalContent.querySelector('.modal-section:last-of-type');
        
        // Создаем ОДИН общий контейнер для всего динамического контента героя
        const heroWrapper = document.createElement('div');
        heroWrapper.id = 'hero-dynamic-content';
        
        // 1. Послевоенная жизнь
        const afterWarSection = document.createElement('div');
        afterWarSection.className = 'modal-section';
        afterWarSection.innerHTML = `<h4>После войны</h4><p>${leader.afterWar}</p>`;
        
        // 2. Боевой путь
        const battleSection = document.createElement('div');
        battleSection.className = 'modal-section';
        battleSection.innerHTML = `<h4>Боевой путь</h4>`;
        const battleTimeline = document.createElement('div');
        battleTimeline.className = 'battle-timeline';
        leader.battles.forEach(battle => {
            const event = document.createElement('div');
            event.className = 'battle-event';
            event.innerHTML = `
                <div class="battle-event-year">${battle.year}</div>
                <div class="battle-event-text">${battle.text}</div>
            `;
            battleTimeline.appendChild(event);
        });
        battleSection.appendChild(battleTimeline);
        
        // 3. Подвиг на фронте
        const heroStorySection = document.createElement('div');
        heroStorySection.className = 'modal-section';
        heroStorySection.innerHTML = `
            <h4>Подвиг на фронте</h4>
            <p>${leader.heroStory.replace(/\n\n/g, '</p><p>')}</p>
        `;
        
        // 4. Цитата
        const quoteBlock = document.createElement('div');
        quoteBlock.className = 'hero-quote';
        quoteBlock.textContent = leader.quote;
        
        // Собираем всё в общий контейнер
        heroWrapper.appendChild(afterWarSection);
        heroWrapper.appendChild(battleSection);
        heroWrapper.appendChild(heroStorySection);
        heroWrapper.appendChild(quoteBlock);
        
        // Вставляем контейнер после секции наград
        awardsSection.after(heroWrapper);
        
        // Добавляем золотую звезду в портрет
        portrait.style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.6)';
        portrait.style.borderColor = 'var(--color-neon-gold)';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция для безопасной очистки при закрытии
function closeModal() {
    const modal = document.getElementById('leaderModal');
    if (!modal) return;
    
    const modalContent = modal.querySelector('.modal-content');
    
    // ✅ БЕЗОПАСНОЕ УДАЛЕНИЕ: ищем только наш специальный контейнер
    const heroWrapper = modalContent.querySelector('#hero-dynamic-content');
    if (heroWrapper) {
        heroWrapper.remove();
    }
    
    // Сбрасываем стили портрета
    const portrait = document.getElementById('modalPortrait');
    if (portrait) {
        portrait.style.boxShadow = '';
        portrait.style.borderColor = '';
    }
    
    // Снимаем класс активности и возвращаем прокрутку
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/* ========================================
   MODAL FOR EXHIBITS (МОДАЛЬНОЕ ОКНО ДЛЯ ЭКСПОНАТОВ)
   ======================================== */
function initExhibitModal() {
    const exhibitModal = document.getElementById('exhibitModal');
    const exhibitModalClose = document.getElementById('exhibitModalClose');
    const exhibitCards = document.querySelectorAll('.exhibit-card');

    if (!exhibitModal || !exhibitModalClose) return;

    // Открытие модального окна при клике на карточку экспоната
    exhibitCards.forEach(card => {
        card.addEventListener('click', () => {
            const exhibitId = parseInt(card.dataset.id);
            openExhibitModal(exhibitId);
        });
    });

    // Закрытие по крестику
    exhibitModalClose.addEventListener('click', closeExhibitModal);
    
    // Закрытие по клику вне контента
    exhibitModal.addEventListener('click', (e) => {
        if (e.target === exhibitModal) {
            closeExhibitModal();
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && exhibitModal.classList.contains('active')) {
            closeExhibitModal();
        }
    });
}

function openExhibitModal(exhibitId) {
    const modal = document.getElementById('exhibitModal');
    const photoInfo = exhibitPhotosData[exhibitId];
    
    if (!photoInfo || !modal) return;

    const modalImage = document.getElementById('modalExhibitImage');
    const modalTitle = document.getElementById('modalExhibitTitle');
    const modalDescription = document.getElementById('modalExhibitDescription');
    const modalPage = document.getElementById('modalExhibitPage');

    modalImage.src = `./assets/images/exhibits/${photoInfo.page}.jpg`;
    modalImage.alt = photoInfo.title;
    
    modalTitle.textContent = photoInfo.title;
    modalDescription.innerHTML = photoInfo.description;
    // modalPage.textContent = `Страница ${photoInfo.page} из архивного PDF`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExhibitModal() {
    const modal = document.getElementById('exhibitModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}