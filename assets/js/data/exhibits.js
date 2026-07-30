/* ========================================
   ДАННЫЕ: ЭКСПОНАТЫ
   ======================================== */
const exhibitsData = [
	{
		id: 1,
		title: 'Структура 1860 г.',
		year: '1860 г.',
		era: 'empire',
		icon: '📊',
		image: './assets/images/exhibits/structure-1860.jpg',
		description: 'Схема, демонстрирующая структуру Госбанка в 1860 г.'
	},
	{
		id: 2,
		title: 'Указ об учреждении Госбанка',
		year: 'Май 1860 г.',
		era: 'empire',
		icon: '💰',
		image: './assets/images/exhibits/bank-foundation.jpg',
		description: ''
	},
	{
		id: 3,
		title: 'Письмо о назначении управляющего',
		year: '1860 г.',
		era: 'empire',
		icon: '💵',
		image: './assets/images/exhibits/letter.jpg',
		description: ''
	},
	{
		id: 4,
		title: 'Структура 1894 г.',
		year: '1894 г.',
		era: 'empire',
		icon: '📜',
		image: './assets/images/exhibits/structure-1894.jpg',
		description: ''
	},
	{
		id: 5,
		title: 'Выдержка из устава',
		year: '1894 г.',
		era: 'empire',
		icon: '📖',
		image: './assets/images/exhibits/ustav.jpg',
		description: ''
	},
	{
		id: 6,
		title: 'Табель содержаний',
		year: '1894 г.',
		era: 'empire',
		icon: '📚',
		image: './assets/images/exhibits/table.jpg',
		description: ''
	},
	{
		id: 7,
		title: 'Ответ Канцелярии',
		year: '1894 г.',
		era: 'empire',
		icon: '🏅',
		image: './assets/images/exhibits/office_response.jpg',
		description: ''
	},
	{
		id: 8,
		title: 'Ссуды на особых основаниях',
		year: '1904-1913 гг.',
		era: 'empire',
		icon: '🚂',
		image: './assets/images/exhibits/loans-on-special-grounds.jpg',
		description: 'Таблица итогов выдачи ссуд по учётно-ссудным процентам за 50 лет деятельности Императорского Госбанка.'
	},
	{
		id: 9,
		title: 'Заседание Совета Госбанка',
		year: '',
		era: 'empire',
		icon: '📒',
		image: './assets/images/exhibits/meeting.jpg',
		description: ''
	},
	{
		id: 10,
		title: 'Директива акционерным банкам',
		year: '1914 г.',
		era: 'empire',
		icon: '📈',
		image: './assets/images/exhibits/directive.jpg',
		description: ''
	},
	{
		id: 11,
		title: 'Удостоверение',
		year: '1916 г.',
		era: 'empire',
		icon: '⚖️',
		image: './assets/images/exhibits/id.jpg',
		description: ''
	},
	{
		id: 12,
		title: 'Чековая книжка',
		year: '',
		era: 'empire',
		icon: '📝',
		image: './assets/images/exhibits/checkbook.jpg',
		description: ''
	},
	{
		id: 13,
		title: 'Пассивы Госбанка',
		year: '1861–1910 гг.',
		era: 'empire',
		icon: '📊',
		image: './assets/images/exhibits/passives-diagram.jpg',
		description: 'Диаграмма пассивов Государственного банка с момента основания до начала XX века. Отражает эволюцию финансовой системы Империи.'
	},
	{
		id: 14,
		title: 'Валовая прибыль и её составные части',
		year: '1860–1909 гг.',
		era: 'empire',
		icon: '💰',
		image: './assets/images/exhibits/profit-table.jpg',
		description: 'Таблица, демонстрирующая структуру прибыли Госбанка за полвека его деятельности.'
	},
	{
		id: 15,
		title: 'Денежные знаки в народном обращении',
		year: '1865–1910 гг.',
		era: 'empire',
		icon: '💵',
		image: './assets/images/exhibits/money-signs.jpg',
		description: 'Таблица видов денежных знаков: банковое серебро, золото, монета, кредитные билеты.'
	},
	{
		id: 16,
		title: 'Прошение о награждении',
		year: '1906 г.',
		era: 'empire',
		icon: '📗',
		image: './assets/images/exhibits/reward.jpg',
		description: ''
	},
	{
		id: 17,
		title: 'Итоги выдач по учетно-ссудным операциям',
		year: '1860-1910 гг.',
		era: 'empire',
		icon: '📸',
		image: './assets/images/exhibits/results.jpg',
		description: ''
	},
	{
		id: 18,
		title: 'Баланс',
		year: '1913 г.',
		era: 'empire',
		icon: '📸',
		image: './assets/images/exhibits/balance.jpg',
		description: ''
	},
	{
		id: 19,
		title: 'Расписка',
		year: '1917 г.',
		era: 'empire',
		icon: '🖨️',
		image: './assets/images/exhibits/note.jpg',
		description: ''
	},
	{
		id: 20,
		title: 'Штампы-нумераторы и печати',
		year: '1940-е – 1950-е',
		era: 'ussr',
		icon: '🔏',
		image: './assets/images/exhibits/stamps-seals.jpg', // Страница 49
		description: 'Штампы-нумераторы, печати Ленинградской городской конторы Госбанка СССР — инструменты эпохи.'
	},
	{
		id: 21,
		title: 'Электронные вычислительные машины',
		year: '1960-е – 1970-е',
		era: 'ussr',
		icon: '💾',
		// Нет фотографии — будет иконка
		description: 'Минск-22, ЕС ЭМ. Вычислительные комплексы занимали целые залы и весили несколько тонн, а производительность была меньше, чем у современного смартфона.'
	},
	{
		id: 22,
		title: 'Персональные компьютеры',
		year: '1980-е – 1990-е',
		era: 'ussr',
		icon: '💻',
		image: './assets/images/exhibits/pc-1980s.jpg', // Страница 38
		description: '«Электроника», «Роботрон». Появление ПК в бухгалтерских отделах — начало цифровой эры.'
	},
	{
		id: 23,
		title: 'АРМ бухгалтера',
		year: '1990-е',
		era: 'modern',
		icon: '🖥️',
		// Нет фотографии — будет иконка
		description: 'Автоматизированное рабочее место бухгалтера. Переход с бумажных мемориальных ордеров на электронные проводки.'
	},
	{
		id: 24,
		title: 'Цифровой рубль',
		year: '2020-е',
		era: 'modern',
		icon: '₿',
		// Нет фотографии — будет иконка
		description: 'Тестирование цифрового рубля — новая форма национальной валюты на основе блокчейн-технологий.'
	}
];

// Данные для фотографий экспонатов с указанием страниц PDF
const exhibitPhotosData = {
	1: { page: 'structure-1860', title: "Структура 1860 г.", description: "Схема, демонстрирующая структуру Госбанка в 1860 г." },
	2: { page: 'bank-foundation', title: "Указ об учреждении Госбанка", description: "" },
	3: { page: 'letter', title: "Письмо о назначении управляющего", description: "" },
	4: { page: 'structure-1894', title: "Структура 1894 г.", description: "Схема, демонстрирующая структуру Госбанка в 1860 г." },
	5: { page: 'ustav', title: "Устав Госбанка", description: "" },
	6: { page: 'table', title: "Табель содержаний", description: "" },
	7: { page: 'office_response', title: "Ответ Канцелярии", description: "" },
	8: { page: 'loans-on-special-grounds', title: "Ссуды на особых основаниях", description: "Таблица итогов выдачи ссуд по учётно-ссудным процентам за 50 лет деятельности Императорского Госбанка." },
	9: { page: 'meeting', title: "Заседание Совета Госбанка", description: "" },
	10: { page: 'directive', title: "Директива акционерным банкам", description: "" },
	11: { page: 'id', title: "Удостоверение", description: "" },
	12: { page: 'checkbook', title: "Чековая книжка", description: "" },
	13: { page: 'passives-diagram', title: "Пассивы Госбанка (диаграмма)", description: "Диаграмма пассивов с 1861 по 1910 год" },
	14: { page: 'profit-table', title: "Валовая прибыль", description: "Таблица валовой прибыли за 1860-1909 гг." },
	15: { page: 'money-signs', title: "Денежные знаки", description: "Денежные знаки в народном обращении 1865-1910 гг." },
	16: { page: 'reward', title: "Прошение о награждении", description: "Прошение бухгалтера 1-го разряда о награждении орденом, 1906 г." },
	17: { page: 'results', title: "Итоги выдач по учетно-ссудным операциям", description: "" },
	18: { page: 'balance', title: "Баланс Госбанка", description: "Баланс на 23 мая (5 июня) 1913 г." },
	19: { page: 'note', title: "Расписка о вкладе", description: "Расписка о приеме вклада на хранение, 13.10.1917" }
};