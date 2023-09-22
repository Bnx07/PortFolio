let position = 0;

// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.block');

//     function checkVisibility() {
//         sections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;

//             if (sectionTop < windowHeight * 0.6) {
//                 section.classList.add('fade-in');
//             } else {
//                 section.classList.remove('fade-in');
//             }
//         });
//     }

//     // Ejecutar al cargar la página
//     checkVisibility();

//     // Ejecutar en eventos de desplazamiento
//     window.addEventListener('scroll', checkVisibility);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     let prevScrollY = window.scrollY;
    
//     function checkScrollDirection() {
//         const currentScrollY = window.scrollY;
        
//         if (currentScrollY > prevScrollY) {
//             // Scroll hacia abajo
//             console.log("Scroll hacia abajo");
//         } else {
//             // Scroll hacia arriba
//             console.log("Scroll hacia arriba");
//         }
        
//         prevScrollY = currentScrollY;
//     }
    
//     // Ejecutar al cargar la página
//     checkScrollDirection();
    
//     // Ejecutar en eventos de desplazamiento
//     window.addEventListener('scroll', checkScrollDirection);
// });
