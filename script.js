let trainMargin = document.getElementById("train");
let main = document.getElementById("main");
let intendedPosition = 0;
let percent = 0;

// TODO: Añadir que se mueva despacio y no a tirones
// * A lo mejor un "transition: all ease 300ms" funca
// ! No funciona el "transition: all ease 300ms" porque al pasar ese tiempo, tiene que acelerar el nuevo recorrido
// * Si no, debería guardar el dato en un lugar y que se actualice frame a frame

window.addEventListener('scroll', (e) => {
    let mainHeight = main.clientHeight;
    let mainPos = main.getBoundingClientRect().top; // Va de 0 a -1088
    let screenHeight = window.innerHeight;

    let space = mainHeight - screenHeight;
    
    percent = mainPos / space; // ? Va desde 0 hasta -1, siendo -1 el final del todo
    // FIXME: El 100% significa que está por debajo de la pantalla
    
    intendedPosition = -space * percent;

    // train.style.marginTop = `${-space * percent}px`;
})

// ? Movimiento continuo con setInterval
// * Podría usar transition: all linear 300ms para que no sea a tirones

setInterval(() => {
    console.log(parseInt(train.style.marginTop, 10))
    if (parseInt(train.style.marginTop, 10) < intendedPosition) {
        console.log(train.style.marginTop)
        console.log(intendedPosition)
        train.style.marginTop = `${intendedPosition}px`;
        // TODO: Hacer que se mueva de a poco hacia la posición deseada (Sumar x pixeles)
    } else if (parseInt(train.style.marginTop, 10) > intendedPosition) {
        console.log(train.style.marginTop)
        console.log(intendedPosition)
        train.style.marginTop = `${intendedPosition}px`;
    }
}, 500);

// ? Movimiento de estación a estación
// * La idea es que hayan estaciones de cada página y al llegar a una el tren va desde la estación actual a la otra

// let stations = document.getElementsByClassName('station');

// let position = 0;

// ! El while true revienta la página
// while (true) {
//     if (Math.abs(intendedPosition - parseInt(train.style.marginTop, 10)) < 100) {
//         console.log("Cerca");
//     }
// }