document.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const scheduleSection = document.getElementById('schedule');
    const musicSection = document.getElementById('music');
    const footerSection = document.getElementById('footer');

    // Тексты для анимации
    const texts = {
        line1: "Привет, друг!",
        line2: "Я Александр Найданов",
        final: "Если ты ищешь ведущего, стендапера. То листай дальше и смотри!"
    };

    // Сразу показываем картинку и подпись
    textContainer.innerHTML = `
        <div class="final-content">
            <div id="animated-text" class="animated-text"></div>
            <img src="https://sun9-29.userapi.com/s/v1/ig2/INtPY2hKl9xCoF2EnaVI5mpu4Hzy8tUgF4hpqdJ7tlEyOEQl-bsL1xWMy45OOKF_fjAw0RSstOtwwp3Q-PZWua0Y.jpg?quality=95&as=32x48,48x72,72x108,108x162,160x240,240x360,360x540,480x720,540x810,640x960,720x1080,853x1280&from=bu&cs=853x0" 
                 alt="Александр Найданов" 
                 class="profile-image">
            <div class="name-title">Александр Найданов</div>
        </div>
    `;

    const animatedText = document.getElementById('animated-text');
    const finalContent = textContainer.querySelector('.final-content');

    // Сразу показываем все секции
    finalContent.classList.add('visible');
    scheduleSection.classList.add('visible');
    musicSection.classList.add('visible');
    footerSection.classList.add('visible');

    // Функция для печати текста
    function typeText(element, text, speed) {
        return new Promise((resolve) => {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    // Функция для удаления текста
    function deleteText(element, speed) {
        return new Promise((resolve) => {
            let text = element.innerHTML;
            let i = text.length;
            
            function deleteChar() {
                if (i > 0) {
                    element.innerHTML = text.substring(0, i - 1);
                    i--;
                    setTimeout(deleteChar, speed);
                } else {
                    resolve();
                }
            }
            deleteChar();
        });
    }

    // Основная функция анимации
    async function startAnimation() {
        // 1. Печатаем первую строку
        await typeText(animatedText, texts.line1, 100);
        // 3. Удаляем первую строку (постепенно)
        await deleteText(animatedText, 50);
        // Ждем немного и добавляем вторую строку
        await new Promise(resolve => setTimeout(resolve, 500));
        animatedText.innerHTML += '<br>'; // Перенос строки
        await typeText(animatedText, texts.line2, 100);
        
        // Ждем паузу после печати обеих строк
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 2. Удаляем вторую строку (постепенно)
        await deleteSecondLine(animatedText, 50);
        
        
        
        // 4. Показываем финальный текст
        await typeText(animatedText, texts.final, 100);
    }
    

    // Запускаем анимацию
    startAnimation();
});