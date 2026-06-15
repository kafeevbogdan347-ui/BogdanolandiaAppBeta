let currentLangIndex = 0;
const langs = ['RU', 'BG', 'AR'];

const translations = {
    'RU': {
        'toggle-btn': 'Язык: РУ',
        'main-title': 'ГОСУДАРСТВЕННЫЙ ТЕРМИНАЛ',
        'main-subtitle': 'ЦЕНТРАЛЬНАЯ СИСТЕМА УПРАВЛЕНИЯ ЦИФРОВЫМ ГОСУДАРСТВОМ',
        'btn-passport': 'Паспорт',
        'btn-economy': 'Экономика',
        'btn-laws': 'Законы',
        'btn-infrastructure': 'Инфраструктура',
        'btn-tribunal': 'Трибунал',
        'title-gov': 'Государственное Управление',
        'txt-pres': 'Президент:',
        'txt-vice': 'Вице-президент:',
        'title-passport': 'Цифровой ID Гражданина',
        'txt-scanning': 'Ожидание биометрии...',
        'btn-tiktok': 'Привязать профиль TikTok',
        'title-economy': 'Государственная Экономика',
        'txt-treasury': 'Казна Государства',
        'txt-currency': 'Железа',
        'btn-taxes': 'Собрать налог (10 железа)',
        'title-orders': 'Госзаказы (Столичный округ Богдановск)',
        'txt-order-1': '1. Сбор ресурсов: 64 булыжника для расширения главного здания мэрии.',
        'btn-complete-order': 'Сдать ресурсы',
        'title-debtors': 'Инспекционный контроль (Индустриальный центр Семеновск)',
        'title-laws': 'Свод Основных Законов (7 Правил)',
        'title-infra': 'Инженерные Системы',
        'title-mobfarm': 'Технический расчет ферм мобов',
        'txt-mobfarm-desc': 'Автоматический расчет оптимальной высоты падения существ и вычисление шанса появления редких зомби в полной броне.',
        'btn-calc-farm': 'Запустить симуляцию',
        'title-tribunal': 'Государственный Суд',
        'txt-tribunal-desc': 'Модуль изоляции нарушителей правопорядка и злостных должников казны.',
        'btn-arrest': 'Конвоировать в тюрьму',
        'passport-role': 'РОЛЬ: ПРЕЗИДЕНТ',
        'passport-status': 'СТАТУС: ONLINE'
    },
    'BG': {
        'toggle-btn': 'Язык: БГ',
        'main-title': 'БОГДАН-ТЕРМИНАЛИУМ',
        'main-subtitle': 'ЦЕНТРАЛЬНО КИБЕР-УПРАВЛЕНИЕ',
        'btn-passport': 'Богдан-ID',
        'btn-economy': 'Ресурсы',
        'btn-laws': 'Постулаты',
        'btn-infrastructure': 'Крафт-База',
        'btn-tribunal': 'Бан-Окружение',
        'title-gov': 'Верховный Состав',
        'txt-pres': 'Богданатор:',
        'txt-vice': 'Вице-Богданатор:',
        'title-passport': 'Цифровиус Богдан-ID',
        'txt-scanning': 'Био-Фиксация Лика...',
        'btn-tiktok': 'Слиднуть ТокТок',
        'title-economy': 'Алмазно-Железный Фонд',
        'txt-treasury': 'Богдано-Казна',
        'txt-currency': 'Феррума',
        'btn-taxes': 'Снять 10 Феррума',
        'title-orders': 'Крафт-Квесты (Град Богдановск)',
        'txt-order-1': '1. Срубить блок-ресурсы (64 булыги) на Мэрию',
        'btn-complete-order': 'Зачекать',
        'title-debtors': 'Долг-Лист (Техно-Семеновск)',
        'title-laws': '7 Незыблемых Богдано-Правил',
        'title-infra': 'Управление Фермами',
        'title-mobfarm': 'Логика Спавна Мобов',
        'txt-mobfarm-desc': 'Детект высоты падения криперов и шанс армированных зомби.',
        'btn-calc-farm': 'Сгенерировать ТТХ',
        'title-tribunal': 'Высший Судилиум',
        'txt-tribunal-desc': 'Тотальная изоляция грифер-элементов.',
        'btn-arrest': 'Упечь в Бедрок',
        'passport-role': 'КРАФТ-ЧИН: БОГДАНАТОР',
        'passport-status': 'ЛОГ: СЕТЬ-АКТИВ'
    },
    'AR': {
        'toggle-btn': 'اللغة: العربية',
        'main-title': 'المحطة الحكومية',
        'main-subtitle': 'نظام إدارة الدولة الرقمية المركزية',
        'btn-passport': 'جواز سفر',
        'btn-economy': 'الاقتصاد',
        'btn-laws': 'القوانين',
        'btn-infrastructure': 'البنية التحتية',
        'btn-tribunal': 'محكمة',
        'title-gov': 'جهاز الدولة',
        'txt-pres': 'الرئيس:',
        'txt-vice': 'نائب الرئيس:',
        'title-passport': 'الهوية الرقمية للمواطن',
        'txt-scanning': 'مسح الوجه...',
        'btn-tiktok': 'ربط حساب تيك توك',
        'title-economy': 'القطاع المالي',
        'txt-treasury': 'الخزانة',
        'txt-currency': 'حديد',
        'btn-taxes': 'تحصيل ضريبة (10 حديد)',
        'title-orders': 'طلبات الدولة (منطقة العاصمة بوجدانوفسك)',
        'txt-order-1': '1. جمع الموارد: 64 حجر لتوسيع مبنى البلدية الرئيسي.',
        'btn-complete-order': 'تسليم الموارد',
        'title-debtors': 'مجلس التفتيش (مركز سيمينوفسك الصناعي)',
        'title-laws': 'قوانين بوجدانولانديا (7 قواعد)',
        'title-infra': 'الأنظمة الهندسية',
        'title-mobfarm': 'الحساب الفني لمزارع الوحوش',
        'txt-mobfarm-desc': 'حساب تلقائي لارتفاع السقوط الأمثل للمخلوقات وحساب نسبة ظهور الزومبي المدرع النادر.',
        'btn-calc-farm': 'بدء المحاكاة',
        'title-tribunal': 'المحكمة الحكومية',
        'txt-tribunal-desc': 'وحدة عزل مخالفي القانون والمتهربين من الضرائب.',
        'btn-arrest': 'إرسال إلى السجن',
        'passport-role': 'الدور: الرئيس',
        'passport-status': 'الحالة: متصل'
    }
};

function toggleLanguage() {
    currentLangIndex = (currentLangIndex + 1) % langs.length;
    const lang = langs[currentLangIndex];
    
    document.getElementById('lang-toggle').innerText = translations[lang]['toggle-btn'];
    document.getElementById('main-title').innerText = translations[lang]['main-title'];
    document.getElementById('main-subtitle').innerText = translations[lang]['main-subtitle'];
    document.getElementById('btn-passport').innerText = translations[lang]['btn-passport'];
    document.getElementById('btn-economy').innerText = translations[lang]['btn-economy'];
    document.getElementById('btn-laws').innerText = translations[lang]['btn-laws'];
    document.getElementById('btn-infrastructure').innerText = translations[lang]['btn-infrastructure'];
    document.getElementById('btn-tribunal').innerText = translations[lang]['btn-tribunal'];
    
    document.getElementById('title-gov').innerText = translations[lang]['title-gov'];
    document.getElementById('txt-pres').innerHTML = `<b>${translations[lang]['txt-pres']}</b> Богдан`;
    document.getElementById('txt-vice').innerHTML = `<b>${translations[lang]['txt-vice']}</b> Семён`;
    
    document.getElementById('title-passport').innerText = translations[lang]['title-passport'];
    document.getElementById('txt-scanning').innerText = translations[lang]['txt-scanning'];
    document.getElementById('btn-tiktok').innerText = translations[lang]['btn-tiktok'];
    
    document.getElementById('title-economy').innerText = translations[lang]['title-economy'];
    document.getElementById('txt-treasury').innerText = translations[lang]['txt-treasury'];
    document.getElementById('txt-currency').innerText = translations[lang]['txt-currency'];
    document.getElementById('btn-taxes').innerText = translations[lang]['btn-taxes'];
    document.getElementById('title-orders').innerText = translations[lang]['title-orders'];
    document.getElementById('txt-order-1').innerText = translations[lang]['txt-order-1'];
    document.getElementById('btn-complete-order').innerText = translations[lang]['btn-complete-order'];
    document.getElementById('title-debtors').innerText = translations[lang]['title-debtors'];
    
    document.getElementById('title-laws').innerText = translations[lang]['title-laws'];
    document.getElementById('title-infra').innerText = translations[lang]['title-infra'];
    document.getElementById('title-mobfarm').innerText = translations[lang]['title-mobfarm'];
    document.getElementById('txt-mobfarm-desc').innerText = translations[lang]['txt-mobfarm-desc'];
    document.getElementById('btn-calc-farm').innerText = translations[lang]['btn-calc-farm'];
    
    document.getElementById('title-tribunal').innerText = translations[lang]['title-tribunal'];
    document.getElementById('txt-tribunal-desc').innerText = translations[lang]['txt-tribunal-desc'];
    document.getElementById('btn-arrest').innerText = translations[lang]['btn-arrest'];
    
    drawPassport();
}

function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.nav-bar .nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

function payTaxes() {
    const treasurySpan = document.getElementById('treasury');
    treasurySpan.innerText = parseInt(treasurySpan.innerText) + 10;
    alert(currentLangIndex === 0 ? 'Казна пополнена на 10 единиц железа!' : (currentLangIndex === 1 ? '10 Феррума добавлено!' : 'تم تحصيل 10 حديد!'));
}

function completeOrder() {
    alert(currentLangIndex === 0 ? 'Госзаказ выполнен! Ресурсы отправлены на склад.' : 'Госзаказ зачекан!');
}

function sendToPrison() {
    const suspect = document.getElementById('suspectInput').value.trim();
    if(suspect === '') {
        alert('Введите ник!'); return;
    }
    alert(`Игрок ${suspect} переведен в камеру содержания.`);
    document.getElementById('suspectInput').value = '';
}

function calcFarm() {
    alert('Расчет завершен. Рекомендуемая высота падения: 22.5 блока для гарантированного выживания с минимальным здоровьем.');
}

function drawPassport() {
    const canvas = document.getElementById('passport-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#2d2d2d';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('BOGDANOLANDIA OFFICIAL ID', 10, 25);
        
        ctx.fillStyle = '#a0a0a0';
        ctx.font = '11px sans-serif';
        ctx.fillText('ID: #849201', 10, 55);
        
        const lang = langs[currentLangIndex];
        ctx.fillText(translations[lang]['passport-role'], 10, 80);
        ctx.fillText(translations[lang]['passport-status'], 10, 105);
        
        ctx.fillStyle = '#444444';
        for(let i = 0; i < 30; i++) {
            ctx.fillRect(10 + (i * 6), 125, (i % 4 === 0 ? 3 : 1), 18);
        }
    }
}

window.onload = function() {
    drawPassport();
};
