// Variables globales

const mainContainer = document.querySelector('#main');
const sections = document.querySelectorAll('.container');

let oldPos = 0;
let actualPos = 0;
let isRight = true;

// Event Listener de la rueda del mouse

mainContainer.addEventListener('wheel', (e) => {
    // Desplazamiento horizontal
    mainContainer.scrollLeft += e.deltaY;

    let oldPos = actualPos;
    actualPos = mainContainer.scrollLeft;

    // Revisa hacia qué lado se mueve
    (oldPos > actualPos) ? isRight = false : isRight = true;

    // Revisar si debe bloquearse en alguna posicion
    checkLock();
    // Revisar animaciones
    checkVisibility();
    // Evitar el desplazamiento vertical predeterminado
    e.preventDefault();
});

// Funciones auxiliares para el eventListener

function checkVisibility() {
    sections.forEach(section => {
        const sectionLeft = section.getBoundingClientRect().left;
        const sectionRight = section.getBoundingClientRect().right;
        const windowWidth = window.innerWidth;

        if (sectionLeft < windowWidth * 0.9) {
            section.classList.add('fade-in');
        }
        if (sectionRight < windowWidth * 0.1) {
            section.classList.remove('fade-in');
        }
    });
}

function checkLock() { // Hacer que tenga un movimiento más suave en vez de este movimiento tan brusco
    let showedSections = document.getElementsByClassName('fade-in').length;

    if (showedSections > 0) {
        const windowWidth = window.innerWidth;
        if (isRight) {
            let lastSection = document.getElementsByClassName('fade-in')[showedSections -1];
            let leftFromLast = lastSection.getBoundingClientRect().left;
    
            if (leftFromLast < windowWidth * 0.8 && leftFromLast > windowWidth * 0.6) {
                console.log("Deberia mostrarse")
                console.log(leftFromLast)
                mainContainer.scrollLeft += (leftFromLast - 0.05 * windowWidth);
            }
        } else {
            if (showedSections == 2) {
                let firstSection = document.getElementsByClassName('fade-in')[showedSections -2];
                let rightFromFirst = firstSection.getBoundingClientRect().right;
                console.log(rightFromFirst)
                if (rightFromFirst < windowWidth * 0.8 && rightFromFirst < windowWidth * 0.6) {
                    console.log("Deberia mostrarse")
                    mainContainer.scrollLeft += (rightFromFirst - 0.95 * windowWidth);
                }
            }
        }
    }
}

console.log('COSAS POR MEJORAR: Hacer que tenga un movimiento más suave en vez de este movimiento tan brusco, hacer que oculte el contenedor anterior, arreglar el movimiento hacia atrás');
console.log("La visibilidad moviendose para la izquierda es tal que no siempre funciona correctamente");