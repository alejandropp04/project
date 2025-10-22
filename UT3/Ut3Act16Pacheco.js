/**
 * Genera una posición aleatoria para colocar una pieza en un tablero 8x8.
 * @param {string} pieza - Nombre o tipo de la pieza a colocar.
 * @returns {string} - Mensaje con la posición generada.
 */
function colocarPiezaAleatoria(pieza) {
  // --- Cálculo agrupado con Math ---
  // Generamos fila y columna aleatorias entre 1 y 8
  const filaAleatoria = Math.floor(Math.random() * 8) + 1;
  const columnaAleatoria = Math.floor(Math.random() * 8) + 1;

  // --- Construcción del resultado ---
  const posicion = `Fila: ${filaAleatoria}, Columna: ${columnaAleatoria}`;
  
  // --- Salida informativa ---
  console.log(`La pieza "${pieza}" se colocó en la posición -> ${posicion}`);

  // Devolvemos la posición para posible reutilización
  return posicion;
}

// Ejemplo de uso:
colocarPiezaAleatoria("Reina");
