// Переключение между экранами
const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок и экранов
        navButtons.forEach(btn => btn.classList.remove('active'));
        screens.forEach(screen => screen.classList.remove('active'));
        
        // Добавляем активный класс текущей кнопке
        button.classList.add('active');
        
        // Показываем соответствующий экран
        const screenId = button.getAttribute('data-screen');
        const activeScreen = document.getElementById(screenId);
        if (activeScreen) {
            activeScreen.classList.add('active');
        }
    });
});

// Модальное окно
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        setTimeout(() => event.target.style.display = 'none', 300);
    }
});

// Обработка формы добавления пользователя
document.getElementById('addUserForm')?.