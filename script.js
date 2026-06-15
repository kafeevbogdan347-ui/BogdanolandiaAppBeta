// Локализация: Русский и Богданоландский языки
let currentLanguage = 'RU';

const translations = {
    'RU': {
        'toggle-btn': 'Язык: РУ',
        'main-title': 'ГОСУДАРСТВЕННЫЙ ТЕРМИНАЛ',
        'main-subtitle': 'СИСТЕМА УПРАВЛЕНИЯ ЦИФРОВЫМ ГОСУДАРСТВОМ',
        'btn-passport': 'Паспорт',
        'btn-economy': 'Экономика',
        'btn-laws': 'Законы (7)',
        'btn-tribunal': 'Трибунал',
        'title-passport': 'Цифровой ID Гражданина',
        'txt-scanning': 'Сканирование лица...',
        'btn-tiktok': 'Привязать аккаунт TikTok',
        'title-economy': 'Финансовый сектор',
        'txt-treasury': 'Казна',
        'txt-currency': 'Железа',
        'btn-taxes': 'Собрать налог (10 железа)',
        'title-orders': 'Госзаказы (Столица Богдановск)',
        'txt-order-1': '1. Добыть 64 камня для постройки новой мэрии',
        'btn-complete-order': 'Выполнить',
        'title-debtors': 'Доска Инспекции (Семеновск)',
        'title-laws': 'Свод 7 Законов Богданоландии',
        'title-tribunal': 'Судебная Система',
        'txt-tribunal-desc': 'Введение санкций против нарушителей порядка и должников государственной казны.',
        'btn-arrest': 'Отправить в тюрьму',
        'passport-role': 'РОЛЬ: ПРЕЗИДЕНТ / АДМИН',
        'passport-status': 'СТАТУС: В СЕТИ'
    },
    'BG': {
        'toggle-btn': 'Язык: БГ',
        'main-title': 'БОГДАН-ТЕРМИНАЛИУМ',
        'main-subtitle': 'БОГДАНОВСКОЕ КИБЕР-УПРАВЛЕНИЕ СЕРВЕРОМ',
        'btn-passport': 'Богдан-ID',
        'btn-economy': 'Ресурсы',
        'btn-laws': '7 Постулатов',
        'btn-tribunal': 'Бан-Окружение',
        'title-passport': 'Цифровиус Богдан-ID',
        'txt-scanning': 'Био-Фиксация Лика...',
        'btn-tiktok': 'Слиднуть ТокТок-Профиль',
        'title-economy': 'Алмазно-Железный Фонд',
        'txt-treasury': 'Богдано-Казна',
        'txt-currency': 'Феррума',
        'btn-taxes': 'Снять 10 Феррума с Люда',
        'title-orders': 'Крафт-Квесты (Град Богдановск)',
        'txt-order-1': '1. Срубить блок-ресурсы (64 булыги) на Мэрию',
        'btn-complete-order': 'Зачекать',
        'title-debtors': 'Долг-Лист (Техно-Семеновск)',
        'title-laws': '7 Незыблемых Богдано-Правил',
        'title-tribunal': 'Высший Судилиум',
        'txt-tribunal-desc': 'Тотальная изоляция грифер-элементов и беспредельщиков.',
        'btn-arrest': 'Упечь в Бедрок',
        'passport-role': 'КРАФТ-ЧИН: БОГДАНАТОР',
        'passport-status': 'ЛОГ: СЕТЬ-АКТИВ'
    }
};

function toggleLanguage() {
    currentLanguage = (currentLanguage === 'RU') ? 'BG' : 'RU';
    document.getElementById('lang-toggle').innerText = translations[currentLanguage]['toggle-btn'];
    
    // Обновление текстовых элементов по ID
    document.getElementById('main-title').innerText = translations[currentLanguage]['main-title'];
    document.getElementById('main-subtitle').innerText = translations[currentLanguage]['main-subtitle'];
    document.getElementById('btn-passport').innerText = translations[currentLanguage]['btn-passport'];
    document.getElementById('btn-economy').innerText = translations[currentLanguage]['btn-economy'];
    document.getElementById('btn-laws').innerText = translations[currentLanguage]['btn-laws'];
    document.getElementById('btn-tribunal').innerText = translations[currentLanguage]['btn-tribunal'];
    
    document.getElementById('title-passport').innerText = translations[currentLanguage]['title-passport'];
    document.getElementById('txt-scanning').innerText = translations[currentLanguage]['txt-scanning'];
    document.getElementById('btn-tiktok').innerText = translations[currentLanguage]['btn-tiktok'];
    
    document.getElementById('title-economy').innerText = translations[currentLanguage]['title-economy'];
    document.getElementById('txt-treasury').innerText = translations[currentLanguage]['txt-treasury'];
    document.getElementById('txt-currency').innerText = translations[currentLanguage]['txt-currency'];
    document.getElementById('btn-taxes').innerText = translations[currentLanguage]['btn-taxes'];
    document.getElementById('title-orders').innerText = translations[currentLanguage]['title-orders'];
    document.getElementById('txt-order-1').innerText = translations[currentLanguage]['txt-order-1'];
    document.getElementById('btn-complete-order').innerText = translations[currentLanguage]['btn-complete-order'];
    document.getElementById('title-debtors').innerText = translations[currentLanguage]['title-debtors'];
    
    document.getElementById('title-laws').innerText = translations[currentLanguage]['title-laws'];
    document.getElementById('title-tribunal').innerText = translations[currentLanguage]['title-tribunal'];
    document.getElementById('txt-tribunal-desc').innerText = translations[currentLanguage]['txt-tribunal-desc'];
    document.getElementById('btn-arrest').innerText = translations[currentLanguage]['btn-arrest'];
    
    // Перерисовка паспорта на новом языке
    drawPassport();
}

function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const btns = document.querySelectorAll('.nav-bar .nav-btn');
    btns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

function payTaxes() {
    const treasurySpan = document.getElementById('treasury');
    let current = parseInt(treasurySpan.innerText);
    current += 10; // Сбор налога ровно по 10 железа
    treasurySpan.innerText = current;
    alert(currentLanguage === 'RU' ? 'Собрано 10 железа!' : '10 Феррума изъято в Богдано-Казну!');
}

function completeOrder() {
    alert(currentLanguage === 'RU' ? 'Ресурсы доставлены в Богдановск!' : 'Булыга упакована на спавн!');
}

function sendToPrison() {
    const suspect = document.getElementById('suspectInput').value.trim();
    if(suspect === '') {
        alert(currentLanguage === 'RU' ? 'Введите ник!' : 'Лог пуст! Дай ник-нейм!');
        return;
    }
    alert(currentLanguage === 'RU' ? `Игрок ${suspect} отправлен в тюрьму за нарушение законов!` : `Объект ${suspect} депортирован в бедрок-камеру!`);
    document.getElementById('suspectInput').value = '';
}

function drawPassport() {
    const canvas = document.getElementById('passport-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#020202';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = '14px Courier New';
        ctx.fillText('PASSPORT: BOGDANOLANDIA', 10, 25);
        
        ctx.font = '12px Courier New';
        ctx.fillText('ID: #849201', 10, 55);
        ctx.fillText(translations[currentLanguage]['passport-role'], 10, 75);
        ctx.fillText(translations[currentLanguage]['passport-status'], 10, 95);
        
        // Штрихкод
        ctx.fillStyle = '#00bb00';
        for(let i = 0; i < 24; i++) {
            ctx.fillRect(10 + (i * 7), 115, (i % 3 === 0 ? 4 : 1.5), 25);
        }
    }
}

window.onload = function() {
    drawPassport();
};
