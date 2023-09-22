document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.block');

    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.6) {
                section.classList.add('fade-in');
            } else {
                section.classList.remove('fade-in');
            }
        });
    }

    // Ejecutar al cargar la página
    checkVisibility();

    // Ejecutar en eventos de desplazamiento
    window.addEventListener('scroll', checkVisibility);
});