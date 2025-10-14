function movimientosPosibles (pieza){
    switch (pieza){
        case "♘":
            return ["L", "2 adelante 1 al lado", "2 al lado 1 adelante"];
        case "♗":
            return ["diagonales hacia adelante", "diagonales hacia atras"];
        case "♖":
            return ["adelante", "atras", "izquierda", "derecha"];
        case "♕":
            return ["adelante", "atras", "izquierda", "derecha", "diagonales en todos los sentidos"];
        case "♔":
            return ["1 paso en cualquier posicion"];
        case "♙":
            return ["adelante"];
        default:
            return ["Movimiento desconocido"];
    }
}

function mostrarMovimientos(piezas){
    for (const pieza of piezas){
        console.log("Movimientos de ", pieza, ": ",  movimientosPosibles(pieza));
    }
}

//Ejecucion movimientosPosibles
console.log(`Movimientos posibles de ♙ : ${movimientosPosibles("♙")}`);
console.log(`Movimientos posibles de ♖ : ${movimientosPosibles("♖")}`);
console.log(`Movimientos posibles de ♕ : ${movimientosPosibles("♕")}`);
console.log(`Movimientos posibles de ♔ : ${movimientosPosibles("♔")}`);
console.log(`Movimientos posibles de $ : ${movimientosPosibles("$")}`);


//Ejecucion mostrarMovimientos
console.log("Recorriendo el array y mostrando los movimiento");
const piezas = ["♖", "♕", "♔", "♘", "♗"];
mostrarMovimientos(piezas);