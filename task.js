document.addEventListener("DOMContentLoaded", function() {
    // Получаем элемент с id "timer"
    const timerElement = document.getElementById("timer");

    // Получаем начальное значение таймера
    let timeLeft = parseInt(timerElement.textContent);

    const countdown = setInterval(() => {
        // Уменьшаем значение таймера
        timeLeft -= 1;
        // Обновляем текст в элементе timer
        timerElement.textContent = timeLeft;

        // Проверяем, достигло ли значение 0
        if (timeLeft <= 0) {
            // Останавливаем таймер
            clearInterval(countdown);
            // Показываем сообщение
            alert("Вы победили в конкурсе!");
        }
    }, 1000); // Интервал 1 секунда
});