function openTab(tabId) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Убираем активный класс у всех кнопок
    const btns = document.querySelectorAll('.nav-btn');
    btns.forEach(btn => btn.classList.remove('active'));

    // Показываем нужную вкладку
    document.getElementById(tabId).classList.add('active');
    
    // Подсвечиваем нажатую кнопку
    event.target.classList.add('active');
}

function payTaxes() {
    const treasurySpan = document.getElementById('treasury');
    let current = parseInt(treasurySpan.innerText);
    current += 50; // Добавляем 50 алмазов
    treasurySpan.innerText = current;
    alert('Налоги успешно собраны! Казна пополнена.');
}

function completeOrder() {
    alert('Отличная работа! 64 камня доставлены на склад. Награда переведена на ваш счет.');
}

// Простая отрисовка ID карты на Canvas
window.onload = function() {
    const canvas = document.getElementById('passport-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#002200';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = '16px Courier New';
        ctx.fillText('PASSPORT: BOGDANOLANDIA', 10, 20);
        
        ctx.font = '12px Courier New';
        ctx.fillText('ID: #849201', 10, 50);
        ctx.fillText('ROLE: ПРЕЗИДЕНТ / АДМИН', 10, 70);
        ctx.fillText('STATUS: В СЕТИ', 10, 90);
        
        // Рисуем штрихкод
        for(let i = 0; i < 20; i++) {
            ctx.fillRect(10 + (i * 8), 110, Math.random() * 4 + 1, 30);
        }
    }
};
