// Плавная прокрутка
// Дождитесь загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const lenis = new Lenis({
        duration: 2.5,   // плавность (выше = медленнее/плавнее)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing
        smoothWheel: true, // включаем плавность колесика
        wheelMultiplier: 1, // чувствительность колеса
        touchMultiplier: 2, // для сенсорных экранов
    });

    // Анимационный цикл
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
});