const resultado = document.getElementById('resultado');
const btnResta = document.getElementById('btnResta');

function restarPieza(){
    const totalInicial =  8; //peones
    const capturados = 1;
    const restantes = totalInicial - capturados;

    resultado.textContent = `Peones restantes: ${restantes}`;
}
btnResta.addEventListener('click', restarPieza);

//Ejemplo calcular el numero de casillas
const movs = document.getElementById('movs');
const btnMovs = document.getElementById('btnMovs');



//EJemplo calcular turno de jugador (Resto)
function turnoActual(movimiento){
    return movimiento % 2 === 0 ? "blancas" : "negras"
}
console.log(turnoActual(1)); //negras
console.log(turnoActual(2)); //blancas


//Ejemplo asginar dama
const piezaElemento = document.getElementById('pieza');
const btnAsignar = document.getElementById('btnAsignar');

function asignarDama(){
    const pieza = "♔";
    piezaElemento.textContent = `Se ha asignado la pieza: ${pieza}`;
}
btnAsignar.addEventListener('click', asignarDama);
