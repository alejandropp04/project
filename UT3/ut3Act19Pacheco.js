/**
 * Funcion para pasar una coordenada a valor
 * @param letra
 * @returns {number}
 */
function coordenadaAValor(letra){
    return "abcdefgh".indexOf(letra.toLowerCase()) + 1;
}
/**
 * Funcion que verifica si un movimiento es válido para una pieza
 * @param pieza
 * @param origen
 * @param destino
 * @returns {boolean}
 */
function esMovimientoValido(pieza, origen, destino){
    const colOrigen = coordenadaAValor(origen[0]);
    const filaOrigen = parseInt(origen[1]);
    const colDestino = coordenadaAValor(destino[0]);
    const filaDestino = parseInt(destino[1]);

    const columna = colDestino - colOrigen;
    const fila = filaDestino - filaOrigen;

    switch (pieza) {
        case "♙": //Peon (avanza una fila)
            return columna === 0 && fila === 1;

        case "♘": // Caballo (movimiento en L)
            return (Math.abs(columna) === 2 && Math.abs(fila) === 1) ||
                (Math.abs(columna) === 1 && Math.abs(fila) === 2);
        case "♗": // Alfil (movimiento en diagonal)
            return Math.abs(columna) === Math.abs(fila);

        default:
            return false;
    }
}

/**
 * Funcion mostrar resultado, devuelve si es valido o no el movimiento
 * @param pieza
 * @param origen
 * @param destino
 */
function mostrarResultado(pieza, origen, destino){
    const valido = esMovimientoValido(pieza, origen, destino);
    console.log(
        `${valido ? "Movimiento válido" : "Movimiento inválido"}: ${pieza} de ${origen} a ${destino}`
    );
}

//Array de jugabas
const jugadas =[
    ["♘", "b1", "c3"],
    ["♗", "c1", "c4"],
    ["♙", "e2", "e3"],
    ["♙", "e2", "e4"],
    ["♘", "g1", "f3"],
    ["♗", "f1", "c4"]
];

//Validar todas las jugadas en bucle
for(const jugada of jugadas){
    const [pieza, origen, destino] = jugada;
    mostrarResultado(pieza, origen, destino);
}