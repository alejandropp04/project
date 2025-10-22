function valorPieza(pieza) {
  switch (pieza) {
    case "♕": // Dama
      return 9;
    case "♖": // Torre
      return 5;
    case "♔": // Rey blanco
    case "♚": // Rey negro
      return 10;
    default:
      return 0; // si no se reconoce la pieza
  }
}

// Ejemplo de uso
console.log(valorPieza("♕")); // debería devolver 9
console.log(valorPieza("♖")); // 5
console.log(valorPieza("♔")); // 10
console.log(valorPieza("♚")); // 10
console.log(valorPieza("♞")); // 0

