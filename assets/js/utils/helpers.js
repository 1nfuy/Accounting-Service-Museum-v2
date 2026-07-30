/* ========================================
   КАЛЬКУЛЯТОР
   ======================================== */
function initCalculator() {
	const calcButton = document.getElementById('calcButton');
	const initialCost = document.getElementById('initialCost');
	const usefulLife = document.getElementById('usefulLife');
	const yearsUsed = document.getElementById('yearsUsed');
	const result = document.getElementById('calcResult');

	calcButton.addEventListener('click', () => {
		const initial = parseFloat(initialCost.value) || 0;
		const life = parseFloat(usefulLife.value) || 1;
		const used = parseFloat(yearsUsed.value) || 0;

		// Линейная амортизация
		const annualDepreciation = initial / life;
		const totalDepreciation = annualDepreciation * used;
		const residualValue = Math.max(0, initial - totalDepreciation);

		result.textContent = formatCurrency(residualValue);
		
		// Анимация
		result.style.transform = 'scale(1.1)';
		setTimeout(() => {
			result.style.transform = 'scale(1)';
		}, 200);
	});

	// Первоначальный расчёт
	calcButton.click();
}

function formatCurrency(value) {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(value);
}

function downloadOriginalPDF() {
    // Здесь можно добавить логику скачивания оригинального PDF
    const pdfUrl = './assets/docs/Библиотека.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Библиотека.pdf';
    link.click();
}