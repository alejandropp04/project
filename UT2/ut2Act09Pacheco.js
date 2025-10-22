//Creamos el array con las piezas
function calcularValorPiezas(tablero = []){
    const valores = {
        "♕": 9,
        "♖": 5,
        "♗": 3,
        "♘": 3,
        "♙": 1,
        "♔": 500
    };
    let valorTablero = 0;

    for(const pieza of tablero){
      valorTablero += valores[pieza];
    }
    return valorTablero;
}

function compararJugadores(jugadorA = [], jugadorB = []) {
    puntosA = calcularValorPiezas(jugadorA);
    puntosB = calcularValorPiezas(jugadorB);
    if(puntosA > puntosB){
        console.log(`El jugador A tiene ventaja con ${puntosA} puntos frente a ${puntosB}`);
    }else if(puntosB > puntosA){
        console.log(`El jugador B tiene ventaja con ${puntosB} puntos frente a ${puntosA}`);
    }else{
        console.log(`Ambos jugadores van empate con ${puntosA}`);
    }
}

//Ejecucion de la primera funcion con el total de piezas en el tablero
const piezas = ["♕", "♖", "♗", "♘", "♙", "♔"];
console.log("Valor total de las piezas del tablero: " + calcularValorPiezas(piezas));

//Ejecucion de la segunda funcion
const jugador1 = ["♕", "♖", "♗", "♘", "♙"];
const jugador2 = ["♕", "♖", "♗", "♔"];
compararJugadores(jugador1, jugador2);