// Array para guardar las jugadas registradas
const jugadas = [];

/**
 * Registra una jugada de ajedrez si no se ha repetido antes.
 * @param {string} pieza - Nombre de la pieza (ej: "reina").
 * @param {string} casilla - Casilla destino (ej: "d4").
 */
function registrarJugada(pieza, casilla) {

    // Limpia y convierte a mayúsculas los valores ingresados
    const piezaJugada = pieza.trim().toUpperCase();
    const casillaJugada = casilla.trim().toUpperCase();

    // Construye el texto con el formato "PIEZA A CASILLA"
    const jugada = `${piezaJugada} A ${casillaJugada}`;

    // Verifica si la jugada ya existe en el historial
    if (jugadas.includes(jugada)) {
        console.log("La jugada ya ha sido registrada");
    } else {
        // Si no existe, la agrega al array
        jugadas.push(jugada);
    }
}

// Ejemplos de jugadas registradas
registrarJugada("reina", "d4");
registrarJugada("alfil", "a5");
registrarJugada("peon", "c3");

// Muestra todas las jugadas separadas por saltos de línea
console.log(jugadas.join("\n"));
