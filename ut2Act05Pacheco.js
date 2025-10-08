function mostrarMovimiento(pieza) {
  switch (pieza) {
    case "♕":
      console.log("La dama se mueve en cualquier dirección y cualquier número de casillas.");
      break;

    case "♖":
      console.log("La torre se mueve en línea recta, horizontal o verticalmente, cualquier número de casillas.");
      break;

    case "♔":
    case "♚":
      console.log("El rey se mueve una casilla en cualquier dirección.");
      break;

    default:
      console.log("Símbolo no válido. No corresponde a una pieza de ajedrez.");
  }
}

// Llamadas directas a la función:
mostrarMovimiento("♖");
mostrarMovimiento("♕");
mostrarMovimiento("♔");
mostrarMovimiento("♚");
mostrarMovimiento("♞"); // Ejemplo de símbolo no válido
