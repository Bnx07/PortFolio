// ! A lo mejor podría mantener la idea del tren haciendo que aparezca un > en el contenido del sidebar en el que estoy

// TODO: Considerar si meter un chat o algo por el estilo, algo de backend

let sidebar = document.getElementById("sidebar");
let sidebarButtons = document.getElementsByClassName("sidebar-button");
let sidebarDivs = document.getElementsByClassName("sidebar-div");
let main = document.getElementById('main');

sidebar.addEventListener('click', (event) => {

    if (window.innerWidth > 768) {
        event.stopPropagation();
    }

    if (sidebar.style.transform != 'translateX(-20px)') {
        sidebar.style.transform = 'translateX(-20px)';
        // TODO: Añadir que se desplace el limite izquierdo del main
        main.classList.add('movedRight');
    } else {
        if (window.innerWidth > 768) {
            sidebar.style.transform = 'translateX(-400px)';
        } else {
            sidebar.style.transform = 'translateX(-100%)';
        }
        main.classList.remove('movedRight');
        // TODO: Añadir que se desplace el limite izquierdo del main
    }
})

for (const sidebarButton of sidebarButtons) {
    sidebarButton.addEventListener('click', (event) => {

        event.stopPropagation();

        let div = document.getElementById(`${sidebarButton.id}Div`);

        for (const sidebarDiv of sidebarDivs) {
            if (sidebarDiv.style.height != "0" && sidebarDiv.id != div.id) {
                sidebarDiv.style.height = "0";
            }
        }
        
        if (div.style.height != `${div.childElementCount * 22}px`) {
            div.style.height = `${div.childElementCount * 22}px`;
        } else {
            div.style.height = "0";
        }
    })
};

for (const sidebarDiv of sidebarDivs) {
    sidebarDiv.addEventListener('click', (event) => {
        if (window.innerWidth > 768) {
            event.stopPropagation();
        }
    });
}

// let trainMargin = document.getElementById("train");
// let main = document.getElementById("main");
// let intendedPosition = 0;
// let percent = 0;

// // TODO: Añadir que se mueva despacio y no a tirones
// // * A lo mejor un "transition: all ease 300ms" funca
// // ! No funciona el "transition: all ease 300ms" porque al pasar ese tiempo, tiene que acelerar el nuevo recorrido
// // * Si no, debería guardar el dato en un lugar y que se actualice frame a frame

// window.addEventListener('scroll', (e) => {
//     let mainHeight = main.clientHeight;
//     let mainPos = main.getBoundingClientRect().top; // Va de 0 a -1088
//     let screenHeight = window.innerHeight;

//     let space = mainHeight - screenHeight;
    
//     percent = mainPos / space; // ? Va desde 0 hasta -1, siendo -1 el final del todo
//     // FIXME: El 100% significa que está por debajo de la pantalla
    
//     intendedPosition = -space * percent;

//     // train.style.marginTop = `${-space * percent}px`;
// })

// // ? Movimiento continuo con setInterval
// // * Podría usar transition: all linear 300ms para que no sea a tirones

// setInterval(() => {
//     console.log(parseInt(train.style.marginTop, 10))
//     if (parseInt(train.style.marginTop, 10) < intendedPosition) {
//         console.log(train.style.marginTop)
//         console.log(intendedPosition)
//         train.style.marginTop = `${intendedPosition}px`;
//         // TODO: Hacer que se mueva de a poco hacia la posición deseada (Sumar x pixeles)
//     } else if (parseInt(train.style.marginTop, 10) > intendedPosition) {
//         console.log(train.style.marginTop)
//         console.log(intendedPosition)
//         train.style.marginTop = `${intendedPosition}px`;
//     }
// }, 500);

// // ? Movimiento de estación a estación
// // * La idea es que hayan estaciones de cada página y al llegar a una el tren va desde la estación actual a la otra

// // let stations = document.getElementsByClassName('station');

// // let position = 0;

// // ! El while true revienta la página
// // while (true) {
// //     if (Math.abs(intendedPosition - parseInt(train.style.marginTop, 10)) < 100) {
// //         console.log("Cerca");
// //     }
// // }