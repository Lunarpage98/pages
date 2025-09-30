// Гамбургер-меню с анимацией фото
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu-link');
const homeSection = document.getElementById('home');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Сдвигаем фото вниз при открытии меню
    if (mobileMenu.classList.contains('active')) {
        homeSection.style.transform = 'translateY(50px)';
        homeSection.style.transition = 'transform 0.4s ease';
    } else {
        homeSection.style.transform = 'translateY(0)';
    }
});

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        homeSection.style.transform = 'translateY(0)';
    });
});

// Закрытие меню при клике вне меню
mobileMenu.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        homeSection.style.transform = 'translateY(0)';
    }
});